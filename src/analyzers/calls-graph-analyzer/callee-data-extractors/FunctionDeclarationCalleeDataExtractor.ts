import { injectable, injectFromBase } from 'inversify';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { ICalleeData } from '../../../interfaces/analyzers/calls-graph-analyzer/ICalleeData';

import { AbstractCalleeDataExtractor } from './AbstractCalleeDataExtractor';
import { NodeGuards } from '../../../node/NodeGuards';
import { NodeStatementUtils } from '../../../node/NodeStatementUtils';

@injectFromBase()
@injectable()
export class FunctionDeclarationCalleeDataExtractor extends AbstractCalleeDataExtractor {
    /**
     * @param {NodeGuards[]} blockScopeBody
     * @param {Identifier} callee
     * @returns {ICalleeData}
     */
    public extract(blockScopeBody: ESTree.Node[], callee: ESTree.Identifier): ICalleeData | null {
        throw new Error("STUB");
    }

    /**
     * @param {NodeGuards} targetNode
     * @param {string} name
     * @returns {BlockStatement}
     */
    private getCalleeBlockStatement(targetNode: ESTree.Node, name: string): ESTree.BlockStatement | null {
        throw new Error("STUB");
    }
}
