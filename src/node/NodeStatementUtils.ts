import * as ESTree from 'estree';

import { TNodeWithStatements } from '../types/node/TNodeWithStatements';
import { TStatement } from '../types/node/TStatement';

import { NodeGuards } from './NodeGuards';

export class NodeStatementUtils {
    /**
     * @param {Node} node
     * @returns {TNodeWithStatements}
     */
    public static getParentNodeWithStatements(node: ESTree.Node): TNodeWithStatements {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {TNodeWithStatements[]}
     */
    public static getParentNodesWithStatements(node: ESTree.Node): TNodeWithStatements[] {
        throw new Error("STUB");
    }

    /**
     * @param {Statement} statement
     * @returns {TStatement | null}
     */
    public static getNextSiblingStatement(statement: ESTree.Statement): TStatement | null {
        throw new Error("STUB");
    }

    /**
     * @param {Statement} statement
     * @returns {TStatement | null}
     */
    public static getPreviousSiblingStatement(statement: ESTree.Statement): TStatement | null {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {Statement}
     */
    public static getRootStatementOfNode(node: ESTree.Node): ESTree.Statement {
        throw new Error("STUB");
    }

    /**
     * @param {NodeGuards} node
     * @returns {TNodeWithStatements}
     */
    public static getScopeOfNode(node: ESTree.Node): TNodeWithStatements {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @param {number} maxSize
     * @param {TNodeWithStatements[]} nodesWithStatements
     * @param {number} depth
     * @returns {TNodeWithStatements[]}
     */
    private static getParentNodesWithStatementsRecursive(
        node: ESTree.Node,
        maxSize: number = Infinity,
        nodesWithStatements: TNodeWithStatements[] = [],
        depth: number = 0
    ): TNodeWithStatements[] {
        throw new Error("STUB");
    }

    /**
     * @param {Statement} statement
     * @param {number} offset
     * @returns {TStatement | null}
     */
    private static getSiblingStatementByOffset(statement: ESTree.Statement, offset: number): TStatement | null {
        throw new Error("STUB");
    }
}
