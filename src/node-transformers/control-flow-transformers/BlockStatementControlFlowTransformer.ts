import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { TControlFlowCustomNodeFactory } from '../../types/container/custom-nodes/TControlFlowCustomNodeFactory';
import { TInitialData } from '../../types/TInitialData';
import { TStatement } from '../../types/node/TStatement';

import { IArrayUtils } from '../../interfaces/utils/IArrayUtils';
import { ICustomNode } from '../../interfaces/custom-nodes/ICustomNode';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { ControlFlowCustomNode } from '../../enums/custom-nodes/ControlFlowCustomNode';
import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { BlockStatementControlFlowFlatteningNode } from '../../custom-nodes/control-flow-flattening-nodes/BlockStatementControlFlowFlatteningNode';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeUtils } from '../../node/NodeUtils';

@injectFromBase()
@injectable()
export class BlockStatementControlFlowTransformer extends AbstractNodeTransformer {
    /**
     * @type {IArrayUtils}
     */
    private readonly arrayUtils: IArrayUtils;

    /**
     * @type {TControlFlowCustomNodeFactory}
     */
    private readonly controlFlowCustomNodeFactory: TControlFlowCustomNodeFactory;

    /**
     * @param {TControlFlowCustomNodeFactory} controlFlowCustomNodeFactory
     * @param {IArrayUtils} arrayUtils
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     */
    public constructor(
        @inject(ServiceIdentifiers.Factory__IControlFlowCustomNode)
        controlFlowCustomNodeFactory: TControlFlowCustomNodeFactory,
        @inject(ServiceIdentifiers.IArrayUtils) arrayUtils: IArrayUtils,
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(randomGenerator, options);

        this.controlFlowCustomNodeFactory = controlFlowCustomNodeFactory;
        this.arrayUtils = arrayUtils;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    private static isProhibitedStatementNode(node: ESTree.Node): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {BlockStatement} blockStatementNode
     * @returns {boolean}
     */
    private static canTransformBlockStatementNode(blockStatementNode: ESTree.BlockStatement): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        if (!this.options.controlFlowFlattening) {
            return null;
        }

        switch (nodeTransformationStage) {
            case NodeTransformationStage.ControlFlowFlattening:
                return {
                    leave: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    }
                };

            default:
                return null;
        }
    }

    /**
     * @param {BlockStatement} blockStatementNode
     * @param {NodeGuards} parentNode
     * @returns {NodeGuards}
     */
    public transformNode(blockStatementNode: ESTree.BlockStatement, parentNode: ESTree.Node): ESTree.Node {
        if (
            this.randomGenerator.getMathRandom() > this.options.controlFlowFlatteningThreshold ||
            !BlockStatementControlFlowTransformer.canTransformBlockStatementNode(blockStatementNode)
        ) {
            return blockStatementNode;
        }

        const blockStatementBody: ESTree.Statement[] = blockStatementNode.body;
        const originalKeys: number[] = this.arrayUtils.createWithRange(blockStatementBody.length);
        const shuffledKeys: number[] = this.arrayUtils.shuffle(originalKeys);
        const shuffledKeyToIndex: Map<number, number> = new Map(
            shuffledKeys.map((key: number, index: number) => { throw new Error("STUB"); })
        );
        const originalKeysIndexesInShuffledArray: number[] = originalKeys.map(
            (key: number) => { throw new Error("STUB"); }
        );
        const blockStatementControlFlowFlatteningCustomNode: ICustomNode<
            TInitialData<BlockStatementControlFlowFlatteningNode>
        > = this.controlFlowCustomNodeFactory(ControlFlowCustomNode.BlockStatementControlFlowFlatteningNode);

        blockStatementControlFlowFlatteningCustomNode.initialize(
            blockStatementBody,
            shuffledKeys,
            originalKeysIndexesInShuffledArray
        );

        const newBlockStatementNode: TStatement = blockStatementControlFlowFlatteningCustomNode.getNode()[0];

        NodeUtils.parentizeNode(newBlockStatementNode, parentNode);

        return newBlockStatementNode;
    }
}
