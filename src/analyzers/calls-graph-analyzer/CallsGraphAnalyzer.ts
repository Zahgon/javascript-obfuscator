import { inject, injectable } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { TCalleeDataExtractorFactory } from '../../types/container/calls-graph-analyzer/TCalleeDataExtractorFactory';

import { ICalleeData } from '../../interfaces/analyzers/calls-graph-analyzer/ICalleeData';
import { ICallsGraphAnalyzer } from '../../interfaces/analyzers/calls-graph-analyzer/ICallsGraphAnalyzer';
import { ICallsGraphData } from '../../interfaces/analyzers/calls-graph-analyzer/ICallsGraphData';

import { CalleeDataExtractor } from '../../enums/analyzers/calls-graph-analyzer/CalleeDataExtractor';

import { NodeGuards } from '../../node/NodeGuards';
import { NodeStatementUtils } from '../../node/NodeStatementUtils';

/**
 * This class generates a data with a graph of functions calls
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
 * Will generate a structure like:
 *
 * [
 *      {
 *          callee: FOO_FUNCTION_NODE
 *          name: 'Foo',
 *          trace: [
 *              {
 *                  callee: BAZ_FUNCTION_NODE,
 *                  name: 'baz,
 *                  trace: []
 *              }
 *          ]
 *      }
 * ]
 */
@injectable()
export class CallsGraphAnalyzer implements ICallsGraphAnalyzer {
    /**
     * @type {CalleeDataExtractor[]}
     */
    private static readonly calleeDataExtractorsList: CalleeDataExtractor[] = [
        CalleeDataExtractor.FunctionDeclarationCalleeDataExtractor,
        CalleeDataExtractor.FunctionExpressionCalleeDataExtractor,
        CalleeDataExtractor.ObjectExpressionCalleeDataExtractor
    ];

    /**
     * @type {number}
     */
    private static readonly limitThresholdActivationLength: number = 25;

    /**
     * @type {number}
     */
    private static readonly limitThreshold: number = 0.002;

    /**
     * @type {TCalleeDataExtractorFactory}
     */
    private readonly calleeDataExtractorFactory: TCalleeDataExtractorFactory;

    public constructor(
        @inject(ServiceIdentifiers.Factory__ICalleeDataExtractor)
        calleeDataExtractorFactory: TCalleeDataExtractorFactory
    ) {
        this.calleeDataExtractorFactory = calleeDataExtractorFactory;
    }

    /**
     * @param {number} blockScopeBodyLength
     * @returns {number}
     */
    public static getLimitIndex(blockScopeBodyLength: number): number {
        throw new Error("STUB");
    }

    /**
     * @param {Program} astTree
     * @returns {ICallsGraphData[]}
     */
    public analyze(astTree: ESTree.Program): ICallsGraphData[] {
        throw new Error("STUB");
    }

    /**
     * @param {NodeGuards[]} blockScopeBody
     * @returns {ICallsGraphData[]}
     */
    private analyzeRecursive(blockScopeBody: ESTree.Node[]): ICallsGraphData[] {
        throw new Error("STUB");
    }

    /**
     * @param {ICallsGraphData[]} callsGraphData
     * @param {NodeGuards[]} blockScopeBody
     * @param {CallExpression} callExpressionNode
     */
    private analyzeCallExpressionNode(
        callsGraphData: ICallsGraphData[],
        blockScopeBody: ESTree.Node[],
        callExpressionNode: ESTree.CallExpression
    ): void {
        throw new Error("STUB");
    }
}
