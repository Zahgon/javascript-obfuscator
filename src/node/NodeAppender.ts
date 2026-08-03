import * as ESTree from 'estree';

import { TNodeWithStatements } from '../types/node/TNodeWithStatements';
import { TStatement } from '../types/node/TStatement';

import { ICallsGraphData } from '../interfaces/analyzers/calls-graph-analyzer/ICallsGraphData';

import { NodeGuards } from './NodeGuards';

export class NodeAppender {
    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     */
    public static append(nodeWithStatements: TNodeWithStatements, statements: TStatement[]): void {
        throw new Error("STUB");
    }

    /**
     * Appends node into a first deepest BlockStatement in order of function calls
     *
     * For example:
     *
     * function Foo () {
     *     var baz = function () {
     *
     *     }
     *
     *     baz();
     * }
     *
     * foo();
     *
     * Appends node into block statement of `baz` function expression
     *
     * @param {ICallsGraphData[]} callsGraphData
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} bodyStatements
     * @param {number} index
     */
    public static appendToOptimalBlockScope(
        callsGraphData: ICallsGraphData[],
        nodeWithStatements: TNodeWithStatements,
        bodyStatements: TStatement[],
        index: number = 0
    ): void {
        throw new Error("STUB");
    }

    /**
     * Returns deepest block scope node at given deep.
     *
     * @param {ICallsGraphData[]} callsGraphData
     * @param {number} index
     * @param {number} deep
     * @returns {BlockStatement}
     */
    public static getOptimalBlockScope(
        callsGraphData: ICallsGraphData[],
        index: number,
        deep: number = Infinity
    ): ESTree.BlockStatement {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @returns {TStatement[]}
     */
    public static getScopeStatements(nodeWithStatements: TNodeWithStatements): TStatement[] {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     * @param {Node} target
     */
    public static insertBefore(
        nodeWithStatements: TNodeWithStatements,
        statements: TStatement[],
        target: ESTree.Statement
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     * @param {Node} target
     */
    public static insertAfter(
        nodeWithStatements: TNodeWithStatements,
        statements: TStatement[],
        target: ESTree.Statement
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     * @param {number} index
     */
    public static insertAtIndex(
        nodeWithStatements: TNodeWithStatements,
        statements: TStatement[],
        index: number
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     */
    public static prepend(nodeWithStatements: TNodeWithStatements, statements: TStatement[]): void {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {Statement} statement
     */
    public static remove(nodeWithStatements: TNodeWithStatements, statement: ESTree.Statement): void {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     * @returns {TStatement[]}
     */
    private static parentizeScopeStatementsBeforeAppend(
        nodeWithStatements: TNodeWithStatements,
        statements: TStatement[]
    ): TStatement[] {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithStatements} nodeWithStatements
     * @param {TStatement[]} statements
     */
    private static setScopeStatements(nodeWithStatements: TNodeWithStatements, statements: TStatement[]): void {
        throw new Error("STUB");
    }
}
