import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { IIteratedStatementsSimplifyData } from '../../interfaces/node-transformers/simplifying-transformers/IIteratedStatementsSimplifyData';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStatementSimplifyData } from '../../interfaces/node-transformers/simplifying-transformers/IStatementSimplifyData';

import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeFactory } from '../../node/NodeFactory';

/**
 * Simplifies `Statement` node
 */
@injectFromBase()
@injectable()
export abstract class AbstractStatementSimplifyTransformer extends AbstractNodeTransformer {
    /**
     * @type {NodeTransformer[]}
     */
    public override readonly runAfter: NodeTransformer[] = [
        NodeTransformer.ExpressionStatementsMergeTransformer,
        NodeTransformer.VariableDeclarationsMergeTransformer
    ];

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
     * Returns IStatementSimplifyData based on `Statement` node
     *
     * @param {ESTree.Statement | null | undefined} statementNode
     * @returns {IStatementSimplifyData | null}
     */
    protected getStatementSimplifyData(
        statementNode: ESTree.Statement | null | undefined
    ): IStatementSimplifyData | null {
        throw new Error("STUB");
    }

    /**
     * Iterates over `BlockStatement` node body and collects data
     *
     * @param {ESTree.Statement | null | undefined} statementNode
     * @returns {IIteratedStatementsSimplifyData}
     */
    protected collectIteratedStatementsSimplifyData(
        statementNode: ESTree.BlockStatement
    ): IIteratedStatementsSimplifyData {
        throw new Error("STUB");
    }

    /**
     * Returns leading statements
     *
     * @param {ESTree.BlockStatement} statementNode
     * @param {number | null} startIndex
     * @returns {ESTree.Statement[]}
     */
    protected getLeadingStatements(
        statementNode: ESTree.BlockStatement,
        startIndex: number | null
    ): ESTree.Statement[] {
        throw new Error("STUB");
    }

    /**
     * @param {IStatementSimplifyData} statementSimplifyData
     * @returns {ESTree.Statement}
     */
    protected getPartialStatement(statementSimplifyData: IStatementSimplifyData): ESTree.Statement {
        throw new Error("STUB");
    }

    /**
     * @param {ESTree.Statement} statementNode
     * @param {ESTree.Node} parentNode
     * @returns {ESTree.Node}
     */
    public abstract override transformNode(statementNode: ESTree.Statement, parentNode: ESTree.Node): ESTree.Node;
}
