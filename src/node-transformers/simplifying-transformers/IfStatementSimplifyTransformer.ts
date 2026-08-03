import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStatementSimplifyData } from '../../interfaces/node-transformers/simplifying-transformers/IStatementSimplifyData';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractStatementSimplifyTransformer } from './AbstractStatementSimplifyTransformer';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeFactory } from '../../node/NodeFactory';
import { NodeUtils } from '../../node/NodeUtils';

/**
 * Simplifies `IfStatement` node
 */
@injectFromBase()
@injectable()
export class IfStatementSimplifyTransformer extends AbstractStatementSimplifyTransformer {
    /**
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     */
    public constructor(
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(randomGenerator, options);
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        switch (nodeTransformationStage) {
            case NodeTransformationStage.Simplifying:
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
     * @param {ESTree.IfStatement} ifStatementNode
     * @param {ESTree.Node} parentNode
     * @returns {ESTree.IfStatement}
     */
    public transformNode(ifStatementNode: ESTree.IfStatement, parentNode: ESTree.Node): ESTree.Node {
        const consequentSimplifyData: IStatementSimplifyData | null = this.getStatementSimplifyData(
            ifStatementNode.consequent
        );

        // Variant #1: no valid consequent expression data
        if (!consequentSimplifyData) {
            return ifStatementNode;
        }

        let transformedNode: ESTree.Node;

        if (!ifStatementNode.alternate) {
            // Variant #2: valid data for consequent expression only
            transformedNode = this.getConsequentNode(ifStatementNode, consequentSimplifyData);
        } else {
            const alternateSimplifyData: IStatementSimplifyData | null = this.getStatementSimplifyData(
                ifStatementNode.alternate
            );

            if (!alternateSimplifyData) {
                return ifStatementNode;
            }

            // Variant #3: valid data for consequent and alternate expressions
            transformedNode = this.getConsequentAndAlternateNode(
                ifStatementNode,
                consequentSimplifyData,
                alternateSimplifyData
            );
        }

        return NodeUtils.parentizeNode(transformedNode, parentNode);
    }

    /**
     * @param {ESTree.IfStatement} ifStatementNode
     * @param {IStatementSimplifyData} consequentSimplifyData
     * @returns {ESTree.Node}
     */
    protected getConsequentNode(
        ifStatementNode: ESTree.IfStatement,
        consequentSimplifyData: IStatementSimplifyData
    ): ESTree.Node {
        throw new Error("STUB");
    }

    /**
     * @param {ESTree.IfStatement} ifStatementNode
     * @param {IStatementSimplifyData} consequentSimplifyData
     * @param {IStatementSimplifyData} alternateSimplifyData
     * @returns {ESTree.Node}
     */
    protected getConsequentAndAlternateNode(
        ifStatementNode: ESTree.IfStatement,
        consequentSimplifyData: IStatementSimplifyData,
        alternateSimplifyData: IStatementSimplifyData
    ): ESTree.Node {
        throw new Error("STUB");
    }

    /**
     * @param {IStatementSimplifyData} statementSimplifyData
     * @returns {ESTree.Statement}
     */
    protected override getPartialStatement(statementSimplifyData: IStatementSimplifyData): ESTree.Statement {
        throw new Error("STUB");
    }

    /**
     * @param {ESTree.Statement} statement
     * @returns {boolean}
     */
    protected isProhibitedSingleStatementForIfStatementBranch(statement: ESTree.Statement): boolean {
        throw new Error("STUB");
    }
}
