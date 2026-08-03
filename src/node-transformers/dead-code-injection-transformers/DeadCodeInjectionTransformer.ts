import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { TDeadNodeInjectionCustomNodeFactory } from '../../types/container/custom-nodes/TDeadNodeInjectionCustomNodeFactory';
import { TInitialData } from '../../types/TInitialData';
import { TNodeWithStatements } from '../../types/node/TNodeWithStatements';

import { ICustomNode } from '../../interfaces/custom-nodes/ICustomNode';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { INodeTransformersRunner } from '../../interfaces/node-transformers/INodeTransformersRunner';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { DeadCodeInjectionCustomNode } from '../../enums/custom-nodes/DeadCodeInjectionCustomNode';
import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';
import { NodeType } from '../../enums/node/NodeType';
import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { BlockStatementDeadCodeInjectionNode } from '../../custom-nodes/dead-code-injection-nodes/BlockStatementDeadCodeInjectionNode';
import { NodeFactory } from '../../node/NodeFactory';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeMetadata } from '../../node/NodeMetadata';
import { NodeStatementUtils } from '../../node/NodeStatementUtils';
import { NodeUtils } from '../../node/NodeUtils';

@injectFromBase()
@injectable()
export class DeadCodeInjectionTransformer extends AbstractNodeTransformer {
    /**
     * @type {string}
     */
    private static readonly deadCodeInjectionRootAstHostNodeName: string = 'deadCodeInjectionRootAstHostNode';

    /**
     * @type {number}
     */
    private static readonly maxNestedBlockStatementsCount: number = 4;

    /**
     * @type {number}
     */
    private static readonly minCollectedBlockStatementsCount: number = 5;

    /**
     * @type {NodeTransformer[]}
     */
    private static readonly transformersToRenameBlockScopeIdentifiers: NodeTransformer[] = [
        NodeTransformer.DeadCodeInjectionIdentifiersTransformer,
        NodeTransformer.LabeledStatementTransformer,
        NodeTransformer.ScopeIdentifiersTransformer
    ];

    /**
     * @type {WeakSet <BlockStatement>}
     */
    private readonly deadCodeInjectionRootAstHostNodeSet: WeakSet<ESTree.BlockStatement> = new WeakSet();

    /**
     * @type {ESTree.BlockStatement[]}
     */
    private readonly collectedBlockStatements: ESTree.BlockStatement[] = [];

    /**
     * @type {number}
     */
    private collectedBlockStatementsTotalLength: number = 0;

    /**
     * @type {TDeadNodeInjectionCustomNodeFactory}
     */
    private readonly deadCodeInjectionCustomNodeFactory: TDeadNodeInjectionCustomNodeFactory;

    /**
     * @type {INodeTransformersRunner}
     */
    private readonly transformersRunner: INodeTransformersRunner;

    /**
     * @param {TDeadNodeInjectionCustomNodeFactory} deadCodeInjectionCustomNodeFactory
     * @param {INodeTransformersRunner} transformersRunner
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     */
    public constructor(
        @inject(ServiceIdentifiers.Factory__IDeadCodeInjectionCustomNode)
        deadCodeInjectionCustomNodeFactory: TDeadNodeInjectionCustomNodeFactory,
        @inject(ServiceIdentifiers.INodeTransformersRunner) transformersRunner: INodeTransformersRunner,
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(randomGenerator, options);

        this.deadCodeInjectionCustomNodeFactory = deadCodeInjectionCustomNodeFactory;
        this.transformersRunner = transformersRunner;
    }

    /**
     * @param {Node} targetNode
     * @returns {boolean}
     */
    // eslint-disable-next-line complexity
    private static isProhibitedNodeInsideCollectedBlockStatement(targetNode: ESTree.Node): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {Node} targetNode
     * @returns {boolean}
     */
    private static isScopeHoistingFunctionDeclaration(targetNode: ESTree.Node): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {BlockStatement} blockStatementNode
     * @returns {boolean}
     */
    private static isValidCollectedBlockStatementNode(blockStatementNode: ESTree.BlockStatement): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {BlockStatement} blockStatementNode
     * @param {Node} parentNode
     * @returns {boolean}
     */
    private static isValidWrappedBlockStatementNode(
        blockStatementNode: ESTree.BlockStatement,
        parentNode: ESTree.Node
    ): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        switch (nodeTransformationStage) {
            case NodeTransformationStage.DeadCodeInjection:
                return {
                    enter: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    },
                    leave: (
                        node: ESTree.Node,
                        parentNode: ESTree.Node | null
                    ): ESTree.Node | estraverse.VisitorOption | undefined => {
                        throw new Error("STUB");
                    }
                };

            case NodeTransformationStage.StringArray:
                return {
                    enter: (
                        node: ESTree.Node,
                        parentNode: ESTree.Node | null
                    ): ESTree.Node | estraverse.VisitorOption | undefined => {
                        throw new Error("STUB");
                    }
                };

            default:
                return null;
        }
    }

    /**
     * @param {NodeGuards} programNode
     * @param {NodeGuards} parentNode
     */
    public prepareNode(programNode: ESTree.Node, parentNode: ESTree.Node): void {
        estraverse.traverse(programNode, {
            enter: (node: ESTree.Node): void => {
                throw new Error("STUB");
            }
        });

        this.collectedBlockStatementsTotalLength = this.collectedBlockStatements.length;
    }

    /**
     * @param {BlockStatement} blockStatementNode
     * @param {NodeGuards} parentNode
     * @returns {NodeGuards | VisitorOption}
     */
    public transformNode(
        blockStatementNode: ESTree.BlockStatement,
        parentNode: ESTree.Node
    ): ESTree.Node | estraverse.VisitorOption {
        const canBreakTraverse: boolean =
            !this.collectedBlockStatements.length ||
            this.collectedBlockStatementsTotalLength < DeadCodeInjectionTransformer.minCollectedBlockStatementsCount;

        if (canBreakTraverse) {
            return estraverse.VisitorOption.Break;
        }

        if (
            this.randomGenerator.getMathRandom() > this.options.deadCodeInjectionThreshold ||
            !DeadCodeInjectionTransformer.isValidWrappedBlockStatementNode(blockStatementNode, parentNode)
        ) {
            return blockStatementNode;
        }

        const minInteger: number = 0;
        const maxInteger: number = this.collectedBlockStatements.length - 1;
        const randomIndex: number = this.randomGenerator.getRandomInteger(minInteger, maxInteger);
        const randomBlockStatementNode: ESTree.BlockStatement = this.collectedBlockStatements.splice(randomIndex, 1)[0];
        const isDuplicateBlockStatementNodes: boolean = randomBlockStatementNode === blockStatementNode;

        if (isDuplicateBlockStatementNodes) {
            return blockStatementNode;
        }

        return this.replaceBlockStatementNode(blockStatementNode, randomBlockStatementNode, parentNode);
    }

    /**
     * @param {FunctionExpression} deadCodeInjectionRootAstHostNode
     * @param {Node} parentNode
     * @returns {Node}
     */
    public restoreNode(deadCodeInjectionRootAstHostNode: ESTree.BlockStatement, parentNode: ESTree.Node): ESTree.Node {
        const hostNodeFirstStatement: ESTree.Statement = deadCodeInjectionRootAstHostNode.body[0];

        if (!NodeGuards.isFunctionDeclarationNode(hostNodeFirstStatement)) {
            throw new Error(
                'Wrong dead code injection root AST host node. Host node should contain `FunctionDeclaration` node'
            );
        }

        return hostNodeFirstStatement.body;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    private isDeadCodeInjectionRootAstHostNode(node: ESTree.Node): node is ESTree.BlockStatement {
        const isDeadCodeInjectionRootAstHostNode =
            NodeGuards.isBlockStatementNode(node) && this.deadCodeInjectionRootAstHostNodeSet.has(node);

        if (isDeadCodeInjectionRootAstHostNode) {
            this.deadCodeInjectionRootAstHostNodeSet.delete(node);
        }

        return isDeadCodeInjectionRootAstHostNode;
    }

    /**
     * Make all identifiers in cloned block statement unique
     *
     * @param {BlockStatement} clonedBlockStatementNode
     * @returns {BlockStatement}
     */
    private makeClonedBlockStatementNodeUnique(clonedBlockStatementNode: ESTree.BlockStatement): ESTree.BlockStatement {
        throw new Error("STUB");
    }

    /**
     * @param {BlockStatement} blockStatementNode
     * @param {BlockStatement} randomBlockStatementNode
     * @param {Node} parentNode
     * @returns {BlockStatement}
     */
    private replaceBlockStatementNode(
        blockStatementNode: ESTree.BlockStatement,
        randomBlockStatementNode: ESTree.BlockStatement,
        parentNode: ESTree.Node
    ): ESTree.BlockStatement {
        throw new Error("STUB");
    }
}
