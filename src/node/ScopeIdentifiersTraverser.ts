import { inject, injectable } from 'inversify';
import { ServiceIdentifiers } from '../container/ServiceIdentifiers';

import * as eslintScope from 'eslint-scope';
import * as ESTree from 'estree';

import { TNodeWithLexicalScope } from '../types/node/TNodeWithLexicalScope';
import { TScopeIdentifiersTraverserCallback } from '../types/node/TScopeIdentifiersTraverserCallback';

import { IScopeAnalyzer } from '../interfaces/analyzers/scope-analyzer/IScopeAnalyzer';
import { IScopeIdentifiersTraverser } from '../interfaces/node/IScopeIdentifiersTraverser';
import { IScopeIdentifiersTraverserCallbackData } from '../interfaces/node/IScopeIdentifiersTraverserCallbackData';
import { IScopeThroughIdentifiersTraverserCallbackData } from '../interfaces/node/IScopeThroughIdentifiersTraverserCallbackData';

import { NodeGuards } from './NodeGuards';

/**
 * Scope traverser
 */
@injectable()
export class ScopeIdentifiersTraverser implements IScopeIdentifiersTraverser {
    /**
     * @type {string}
     */
    private static readonly argumentsVariableName: string = 'arguments';

    /**
     * @type {string[]}
     */
    private static readonly globalScopeNames: string[] = ['global', 'module'];

    /**
     * @type {IScopeAnalyzer}
     */
    private readonly scopeAnalyzer: IScopeAnalyzer;

    /**
     * @param {IScopeAnalyzer} scopeAnalyzer
     */
    public constructor(@inject(ServiceIdentifiers.IScopeAnalyzer) scopeAnalyzer: IScopeAnalyzer) {
        this.scopeAnalyzer = scopeAnalyzer;
    }

    /**
     * @param {Program} programNode
     * @param {TScopeIdentifiersTraverserCallback<IScopeIdentifiersTraverserCallbackData>} callback
     */
    public traverseScopeIdentifiers(
        programNode: ESTree.Program,
        callback: TScopeIdentifiersTraverserCallback<IScopeIdentifiersTraverserCallbackData>,
        analyzeScope: boolean = true
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Program} programNode
     * @param {TScopeIdentifiersTraverserCallback<IScopeThroughIdentifiersTraverserCallbackData>} callback
     */
    public traverseScopeThroughIdentifiers(
        programNode: ESTree.Program,
        callback: TScopeIdentifiersTraverserCallback<IScopeThroughIdentifiersTraverserCallbackData>,
        analyzeScope: boolean = true
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Scope} rootScope
     * @param {Scope} currentScope
     * @param {TScopeIdentifiersTraverserCallback<IScopeIdentifiersTraverserCallbackData>} callback
     */
    private traverseScopeIdentifiersRecursive(
        rootScope: eslintScope.Scope,
        currentScope: eslintScope.Scope,
        callback: TScopeIdentifiersTraverserCallback<IScopeIdentifiersTraverserCallbackData>
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Scope} rootScope
     * @param {Scope} currentScope
     * @param {TScopeIdentifiersTraverserCallback<IScopeThroughIdentifiersTraverserCallbackData>} callback
     */
    private traverseScopeThroughIdentifiersRecursive(
        rootScope: eslintScope.Scope,
        currentScope: eslintScope.Scope,
        callback: TScopeIdentifiersTraverserCallback<IScopeThroughIdentifiersTraverserCallbackData>
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Program} programNode
     * @param {boolean} analyzeScope
     * @returns {Scope}
     */
    private acquireGlobalScope(programNode: ESTree.Program, analyzeScope: boolean): eslintScope.Scope {
        throw new Error("STUB");
    }
}
