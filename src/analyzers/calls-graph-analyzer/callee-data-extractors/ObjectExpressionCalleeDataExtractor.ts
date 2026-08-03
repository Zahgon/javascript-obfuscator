import { injectable, injectFromBase } from 'inversify';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { TObjectMembersCallsChain } from '../../../types/analyzers/calls-graph-analyzer/TObjectMembersCallsChain';

import { ICalleeData } from '../../../interfaces/analyzers/calls-graph-analyzer/ICalleeData';

import { AbstractCalleeDataExtractor } from './AbstractCalleeDataExtractor';
import { NodeGuards } from '../../../node/NodeGuards';
import { NodeStatementUtils } from '../../../node/NodeStatementUtils';

@injectFromBase()
@injectable()
export class ObjectExpressionCalleeDataExtractor extends AbstractCalleeDataExtractor {
    /**
     * @param {Property} propertyNode
     * @param {string | number} nextItemInCallsChain
     * @returns {boolean}
     */
    private static isValidTargetPropertyNode(
        propertyNode: ESTree.Property,
        nextItemInCallsChain: string | number
    ): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {NodeGuards[]} blockScopeBody
     * @param {MemberExpression} callee
     * @returns {ICalleeData}
     */
    public extract(blockScopeBody: ESTree.Node[], callee: ESTree.MemberExpression): ICalleeData | null {
        throw new Error("STUB");
    }

    /**
     * Creates array with MemberExpression calls chain.
     *
     * Example: object.foo.bar(); // ['object', 'foo', 'bar']
     *
     * @param {TObjectMembersCallsChain} currentChain
     * @param {MemberExpression} memberExpression
     * @returns {TObjectMembersCallsChain}
     */
    private createObjectMembersCallsChain(
        currentChain: TObjectMembersCallsChain,
        memberExpression: ESTree.MemberExpression
    ): TObjectMembersCallsChain {
        throw new Error("STUB");
    }

    /**
     * @param {NodeGuards} targetNode
     * @param {TObjectMembersCallsChain} objectMembersCallsChain
     * @returns {BlockStatement}
     */
    private getCalleeBlockStatement(
        targetNode: ESTree.Node,
        objectMembersCallsChain: TObjectMembersCallsChain
    ): ESTree.BlockStatement | null {
        throw new Error("STUB");
    }

    /**
     * @param {Property[]} objectExpressionProperties
     * @param {TObjectMembersCallsChain} objectMembersCallsChain
     * @returns {BlockStatement}
     */
    private findCalleeBlockStatement(
        objectExpressionProperties: (ESTree.Property | ESTree.SpreadElement)[],
        objectMembersCallsChain: TObjectMembersCallsChain
    ): ESTree.BlockStatement | null {
        throw new Error("STUB");
    }
}
