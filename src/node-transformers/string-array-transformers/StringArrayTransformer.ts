import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { TIdentifierNamesGeneratorFactory } from '../../types/container/generators/TIdentifierNamesGeneratorFactory';
import { TInitialData } from '../../types/TInitialData';
import { TNodeWithLexicalScopeStatements } from '../../types/node/TNodeWithLexicalScopeStatements';
import { TStatement } from '../../types/node/TStatement';
import { TStringArrayScopeCallsWrappersDataByEncoding } from '../../types/node-transformers/string-array-transformers/TStringArrayScopeCallsWrappersDataByEncoding';
import { TStringArrayCustomNodeFactory } from '../../types/container/custom-nodes/TStringArrayCustomNodeFactory';

import { ICustomNode } from '../../interfaces/custom-nodes/ICustomNode';
import { IIdentifierNamesGenerator } from '../../interfaces/generators/identifier-names-generators/IIdentifierNamesGenerator';
import { ILiteralNodesCacheStorage } from '../../interfaces/storages/string-array-transformers/ILiteralNodesCacheStorage';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStringArrayScopeCallsWrapperData } from '../../interfaces/node-transformers/string-array-transformers/IStringArrayScopeCallsWrapperData';
import { IStringArrayScopeCallsWrappersDataStorage } from '../../interfaces/storages/string-array-transformers/IStringArrayScopeCallsWrappersDataStorage';
import { IStringArrayScopeCallsWrapperParameterIndexesData } from '../../interfaces/node-transformers/string-array-transformers/IStringArrayScopeCallsWrapperParameterIndexesData';
import { IStringArrayStorage } from '../../interfaces/storages/string-array-transformers/IStringArrayStorage';
import { IStringArrayStorageAnalyzer } from '../../interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer';
import { IStringArrayStorageItemData } from '../../interfaces/storages/string-array-transformers/IStringArrayStorageItem';
import { IVisitedLexicalScopeNodesStackStorage } from '../../interfaces/storages/string-array-transformers/IVisitedLexicalScopeNodesStackStorage';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';
import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';
import { StringArrayCustomNode } from '../../enums/custom-nodes/StringArrayCustomNode';
import { StringArrayWrappersType } from '../../enums/node-transformers/string-array-transformers/StringArrayWrappersType';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeLiteralUtils } from '../../node/NodeLiteralUtils';
import { NodeMetadata } from '../../node/NodeMetadata';
import { NodeUtils } from '../../node/NodeUtils';
import { StringArrayCallNode } from '../../custom-nodes/string-array-nodes/StringArrayCallNode';

@injectFromBase()
@injectable()
export class StringArrayTransformer extends AbstractNodeTransformer {
    /**
     * @type {number}
     */
    private static readonly minShiftedIndexValue: number = -1000;

    /**
     * @type {number}
     */
    private static readonly maxShiftedIndexValue: number = 1000;

    /**
     * @type {NodeTransformer[]}
     */
    public override readonly runAfter: NodeTransformer[] = [NodeTransformer.StringArrayRotateFunctionTransformer];

    /**
     * @type {IIdentifierNamesGenerator}
     */
    private readonly identifierNamesGenerator: IIdentifierNamesGenerator;

    /**
     * @type {ILiteralNodesCacheStorage}
     */
    private readonly literalNodesCacheStorage: ILiteralNodesCacheStorage;

    /**
     * @type {IStringArrayStorage}
     */
    private readonly stringArrayStorage: IStringArrayStorage;

    /**
     * @type {IStringArrayStorageAnalyzer}
     */
    private readonly stringArrayStorageAnalyzer: IStringArrayStorageAnalyzer;

    /**
     * @type {IStringArrayScopeCallsWrappersDataStorage}
     */
    private readonly stringArrayScopeCallsWrappersDataStorage: IStringArrayScopeCallsWrappersDataStorage;

    /**
     * @type {TStringArrayCustomNodeFactory}
     */
    private readonly stringArrayTransformerCustomNodeFactory: TStringArrayCustomNodeFactory;

    /**
     * @type {IVisitedLexicalScopeNodesStackStorage}
     */
    private readonly visitedLexicalScopeNodesStackStorage: IVisitedLexicalScopeNodesStackStorage;

    /**
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     * @param {ILiteralNodesCacheStorage} literalNodesCacheStorage
     * @param {IVisitedLexicalScopeNodesStackStorage} visitedLexicalScopeNodesStackStorage
     * @param {IStringArrayStorage} stringArrayStorage
     * @param {IStringArrayScopeCallsWrappersDataStorage} stringArrayScopeCallsWrappersDataStorage
     * @param {IStringArrayStorageAnalyzer} stringArrayStorageAnalyzer
     * @param {TIdentifierNamesGeneratorFactory} identifierNamesGeneratorFactory
     * @param {TStringArrayCustomNodeFactory} stringArrayTransformerCustomNodeFactory
     */
    public constructor(
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions,
        @inject(ServiceIdentifiers.ILiteralNodesCacheStorage) literalNodesCacheStorage: ILiteralNodesCacheStorage,
        @inject(ServiceIdentifiers.IVisitedLexicalScopeNodesStackStorage)
        visitedLexicalScopeNodesStackStorage: IVisitedLexicalScopeNodesStackStorage,
        @inject(ServiceIdentifiers.IStringArrayStorage) stringArrayStorage: IStringArrayStorage,
        @inject(ServiceIdentifiers.IStringArrayScopeCallsWrappersDataStorage)
        stringArrayScopeCallsWrappersDataStorage: IStringArrayScopeCallsWrappersDataStorage,
        @inject(ServiceIdentifiers.IStringArrayStorageAnalyzer) stringArrayStorageAnalyzer: IStringArrayStorageAnalyzer,
        @inject(ServiceIdentifiers.Factory__IIdentifierNamesGenerator)
        identifierNamesGeneratorFactory: TIdentifierNamesGeneratorFactory,
        @inject(ServiceIdentifiers.Factory__IStringArrayCustomNode)
        stringArrayTransformerCustomNodeFactory: TStringArrayCustomNodeFactory
    ) {
        super(randomGenerator, options);

        this.literalNodesCacheStorage = literalNodesCacheStorage;
        this.visitedLexicalScopeNodesStackStorage = visitedLexicalScopeNodesStackStorage;
        this.stringArrayStorage = stringArrayStorage;
        this.stringArrayScopeCallsWrappersDataStorage = stringArrayScopeCallsWrappersDataStorage;
        this.stringArrayStorageAnalyzer = stringArrayStorageAnalyzer;
        this.identifierNamesGenerator = identifierNamesGeneratorFactory(options);
        this.stringArrayTransformerCustomNodeFactory = stringArrayTransformerCustomNodeFactory;
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        switch (nodeTransformationStage) {
            case NodeTransformationStage.StringArray:
                return {
                    enter: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    }
                };

            default:
                return null;
        }
    }

    /**
     * @param {Program} programNode
     */
    public prepareNode(programNode: ESTree.Program): void {
        if (this.options.stringArray) {
            this.stringArrayStorageAnalyzer.analyze(programNode);
        }

        if (this.options.stringArrayShuffle) {
            this.stringArrayStorage.shuffleStorage();
        }

        if (this.options.stringArrayRotate) {
            this.stringArrayStorage.rotateStorage();
        }
    }

    /**
     * @param {Literal} literalNode
     * @param {NodeGuards} parentNode
     * @returns {NodeGuards}
     */
    public transformNode(literalNode: ESTree.Literal, parentNode: ESTree.Node): ESTree.Node {
        if (
            !NodeLiteralUtils.isStringLiteralNode(literalNode) ||
            NodeLiteralUtils.isProhibitedLiteralNode(literalNode, parentNode)
        ) {
            return literalNode;
        }

        const stringArrayStorageItemData: IStringArrayStorageItemData | undefined =
            this.stringArrayStorageAnalyzer.getItemDataForLiteralNode(literalNode);
        const cacheKey: string = this.literalNodesCacheStorage.buildKey(literalNode, stringArrayStorageItemData);
        const useCachedValue: boolean = this.literalNodesCacheStorage.shouldUseCachedValue(
            cacheKey,
            stringArrayStorageItemData
        );

        let resultNode: ESTree.Node;

        if (useCachedValue) {
            const nodeFromCache: ESTree.Node = <ESTree.Node>this.literalNodesCacheStorage.get(cacheKey);

            resultNode = NodeUtils.clone(nodeFromCache);
        } else {
            resultNode = stringArrayStorageItemData
                ? this.getStringArrayCallNode(stringArrayStorageItemData)
                : literalNode;
            this.literalNodesCacheStorage.set(cacheKey, resultNode);
        }

        NodeUtils.parentizeNode(resultNode, parentNode);

        return resultNode;
    }

    /**
     * @param {IStringArrayStorageItemData} stringArrayStorageItemData
     * @returns {Expression}
     */
    private getStringArrayCallNode(stringArrayStorageItemData: IStringArrayStorageItemData): ESTree.Expression {
        throw new Error("STUB");
    }

    /**
     * @param {IStringArrayStorageItemData} stringArrayStorageItemData
     * @returns {IStringArrayScopeCallsWrapperData}
     */
    private getStringArrayScopeCallsWrapperData(
        stringArrayStorageItemData: IStringArrayStorageItemData
    ): IStringArrayScopeCallsWrapperData {
        throw new Error("STUB");
    }

    /**
     * @param {IStringArrayStorageItemData} stringArrayStorageItemData
     * @returns {IStringArrayScopeCallsWrapperData}
     */
    private getRootStringArrayScopeCallsWrapperData(
        stringArrayStorageItemData: IStringArrayStorageItemData
    ): IStringArrayScopeCallsWrapperData {
        throw new Error("STUB");
    }

    /**
     * @param {IStringArrayStorageItemData} stringArrayStorageItemData
     * @returns {IStringArrayScopeCallsWrapperData}
     */
    private getUpperStringArrayScopeCallsWrapperData(
        stringArrayStorageItemData: IStringArrayStorageItemData
    ): IStringArrayScopeCallsWrapperData {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithLexicalScopeStatements} currentLexicalScopeBodyNode
     * @param {IStringArrayStorageItemData} stringArrayStorageItemData
     * @returns {TStringArrayScopeCallsWrappersDataByEncoding}
     */
    private getAndUpdateStringArrayScopeCallsWrappersDataByEncoding(
        currentLexicalScopeBodyNode: TNodeWithLexicalScopeStatements,
        stringArrayStorageItemData: IStringArrayStorageItemData
    ): TStringArrayScopeCallsWrappersDataByEncoding {
        throw new Error("STUB");
    }

    /**
     * @returns {number}
     */
    private getStringArrayCallsWrapperShiftedIndex(): number {
        throw new Error("STUB");
    }

    /**
     * @returns {IStringArrayScopeCallsWrapperParameterIndexesData | null}
     */
    private getStringArrayCallsWrapperParameterIndexesData(): IStringArrayScopeCallsWrapperParameterIndexesData | null {
        throw new Error("STUB");
    }
}
