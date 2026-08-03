import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { TInitialData } from '../../types/TInitialData';
import { TNodeWithLexicalScopeStatements } from '../../types/node/TNodeWithLexicalScopeStatements';
import { TStatement } from '../../types/node/TStatement';
import { TStringArrayScopeCallsWrappersDataByEncoding } from '../../types/node-transformers/string-array-transformers/TStringArrayScopeCallsWrappersDataByEncoding';
import { TStringArrayCustomNodeFactory } from '../../types/container/custom-nodes/TStringArrayCustomNodeFactory';

import { ICustomNode } from '../../interfaces/custom-nodes/ICustomNode';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStringArrayScopeCallsWrapperData } from '../../interfaces/node-transformers/string-array-transformers/IStringArrayScopeCallsWrapperData';
import { IStringArrayScopeCallsWrappersData } from '../../interfaces/node-transformers/string-array-transformers/IStringArrayScopeCallsWrappersData';
import { IStringArrayScopeCallsWrappersDataStorage } from '../../interfaces/storages/string-array-transformers/IStringArrayScopeCallsWrappersDataStorage';
import { IStringArrayStorage } from '../../interfaces/storages/string-array-transformers/IStringArrayStorage';
import { IVisitedLexicalScopeNodesStackStorage } from '../../interfaces/storages/string-array-transformers/IVisitedLexicalScopeNodesStackStorage';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';
import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';
import { StringArrayCustomNode } from '../../enums/custom-nodes/StringArrayCustomNode';
import { StringArrayWrappersType } from '../../enums/node-transformers/string-array-transformers/StringArrayWrappersType';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeAppender } from '../../node/NodeAppender';
import { NodeGuards } from '../../node/NodeGuards';
import { StringArrayScopeCallsWrapperFunctionNode } from '../../custom-nodes/string-array-nodes/StringArrayScopeCallsWrapperFunctionNode';
import { StringArrayScopeCallsWrapperVariableNode } from '../../custom-nodes/string-array-nodes/StringArrayScopeCallsWrapperVariableNode';

@injectFromBase()
@injectable()
export class StringArrayScopeCallsWrapperTransformer extends AbstractNodeTransformer {
    /**
     * @type {NodeTransformer[]}
     */
    public override readonly runAfter: NodeTransformer[] = [NodeTransformer.StringArrayRotateFunctionTransformer];

    /**
     * @type {IStringArrayStorage}
     */
    private readonly stringArrayStorage: IStringArrayStorage;

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
     * @param {IVisitedLexicalScopeNodesStackStorage} visitedLexicalScopeNodesStackStorage
     * @param {IStringArrayStorage} stringArrayStorage
     * @param {IStringArrayScopeCallsWrappersDataStorage} stringArrayScopeCallsWrappersDataStorage
     * @param {TStringArrayCustomNodeFactory} stringArrayTransformerCustomNodeFactory
     */
    public constructor(
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions,
        @inject(ServiceIdentifiers.IVisitedLexicalScopeNodesStackStorage)
        visitedLexicalScopeNodesStackStorage: IVisitedLexicalScopeNodesStackStorage,
        @inject(ServiceIdentifiers.IStringArrayStorage) stringArrayStorage: IStringArrayStorage,
        @inject(ServiceIdentifiers.IStringArrayScopeCallsWrappersDataStorage)
        stringArrayScopeCallsWrappersDataStorage: IStringArrayScopeCallsWrappersDataStorage,
        @inject(ServiceIdentifiers.Factory__IStringArrayCustomNode)
        stringArrayTransformerCustomNodeFactory: TStringArrayCustomNodeFactory
    ) {
        super(randomGenerator, options);

        this.visitedLexicalScopeNodesStackStorage = visitedLexicalScopeNodesStackStorage;
        this.stringArrayStorage = stringArrayStorage;
        this.stringArrayScopeCallsWrappersDataStorage = stringArrayScopeCallsWrappersDataStorage;
        this.stringArrayTransformerCustomNodeFactory = stringArrayTransformerCustomNodeFactory;
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        if (!this.options.stringArrayWrappersCount) {
            return null;
        }

        switch (nodeTransformationStage) {
            case NodeTransformationStage.StringArray:
                return {
                    enter: (node: ESTree.Node, parentNode: ESTree.Node | null): void => {
                        throw new Error("STUB");
                    },
                    leave: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    }
                };

            default:
                return null;
        }
    }

    /**
     * @param {TNodeWithLexicalScopeStatements} lexicalScopeBodyNode
     * @returns {TNodeWithLexicalScopeStatements}
     */
    public transformNode(lexicalScopeBodyNode: TNodeWithLexicalScopeStatements): TNodeWithLexicalScopeStatements {
        const stringArrayScopeCallsWrappersDataByEncoding: TStringArrayScopeCallsWrappersDataByEncoding | null =
            this.stringArrayScopeCallsWrappersDataStorage.get(lexicalScopeBodyNode) ?? null;

        if (!stringArrayScopeCallsWrappersDataByEncoding) {
            return lexicalScopeBodyNode;
        }

        const stringArrayScopeCallsWrappersDataList: (IStringArrayScopeCallsWrappersData | undefined)[] = Object.values(
            stringArrayScopeCallsWrappersDataByEncoding
        );

        // iterates over data for each encoding type
        for (const stringArrayScopeCallsWrappersData of stringArrayScopeCallsWrappersDataList) {
            if (!stringArrayScopeCallsWrappersData) {
                continue;
            }

            const { scopeCallsWrappersData } = stringArrayScopeCallsWrappersData;
            const scopeCallsWrappersDataLength: number = scopeCallsWrappersData.length;

            const upperStringArrayCallsWrapperData = this.getUpperStringArrayCallsWrapperData(
                stringArrayScopeCallsWrappersData
            );

            /**
             * Iterates over each name of scope wrapper name
             * Reverse iteration appends wrappers at index `0` at the correct order
             */
            for (let i = scopeCallsWrappersDataLength - 1; i >= 0; i--) {
                const stringArrayScopeCallsWrapperData = scopeCallsWrappersData[i];

                this.getAndAppendStringArrayScopeCallsWrapperNode(
                    lexicalScopeBodyNode,
                    stringArrayScopeCallsWrapperData,
                    upperStringArrayCallsWrapperData
                );
            }
        }

        return lexicalScopeBodyNode;
    }

    /**
     * @param {IStringArrayScopeCallsWrappersData} stringArrayScopeCallsWrappersData
     * @returns {IStringArrayScopeCallsWrapperData}
     */
    private getRootStringArrayCallsWrapperData(
        stringArrayScopeCallsWrappersData: IStringArrayScopeCallsWrappersData
    ): IStringArrayScopeCallsWrapperData {
        throw new Error("STUB");
    }

    /**
     * @param {IStringArrayScopeCallsWrappersData} stringArrayScopeCallsWrappersData
     * @returns {IStringArrayScopeCallsWrapperData}
     */
    private getUpperStringArrayCallsWrapperData(
        stringArrayScopeCallsWrappersData: IStringArrayScopeCallsWrappersData
    ): IStringArrayScopeCallsWrapperData {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithLexicalScopeStatements} lexicalScopeBodyNode
     * @param {IStringArrayScopeCallsWrapperData} stringArrayScopeCallsWrapperData
     * @param {IStringArrayScopeCallsWrapperData} upperStringArrayCallsWrapperData
     */
    private getAndAppendStringArrayScopeCallsWrapperNode(
        lexicalScopeBodyNode: TNodeWithLexicalScopeStatements,
        stringArrayScopeCallsWrapperData: IStringArrayScopeCallsWrapperData,
        upperStringArrayCallsWrapperData: IStringArrayScopeCallsWrapperData
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {IStringArrayScopeCallsWrapperData} stringArrayScopeCallsWrapperData
     * @param {IStringArrayScopeCallsWrapperData} upperStringArrayCallsWrapperData
     * @returns {TStatement[]}
     */
    private getStringArrayScopeCallsWrapperVariableNode(
        stringArrayScopeCallsWrapperData: IStringArrayScopeCallsWrapperData,
        upperStringArrayCallsWrapperData: IStringArrayScopeCallsWrapperData
    ): TStatement[] {
        throw new Error("STUB");
    }

    /**
     * @param {IStringArrayScopeCallsWrapperData} stringArrayScopeCallsWrapperData
     * @param {IStringArrayScopeCallsWrapperData} upperStringArrayCallsWrapperData
     * @returns {TStatement[]}
     */
    private getStringArrayScopeCallsWrapperFunctionNode(
        stringArrayScopeCallsWrapperData: IStringArrayScopeCallsWrapperData,
        upperStringArrayCallsWrapperData: IStringArrayScopeCallsWrapperData
    ): TStatement[] {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithLexicalScopeStatements} lexicalScopeBodyNode
     */
    private onLexicalScopeNodeEnter(lexicalScopeBodyNode: TNodeWithLexicalScopeStatements): void {
        this.visitedLexicalScopeNodesStackStorage.push(lexicalScopeBodyNode);
    }

    private onLexicalScopeNodeLeave(): void {
        this.visitedLexicalScopeNodesStackStorage.pop();
    }
}
