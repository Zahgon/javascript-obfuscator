import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as eslintScope from 'eslint-scope';
import * as ESTree from 'estree';
import * as estraverse from '@javascript-obfuscator/estraverse';

import { TNodeWithLexicalScope } from '../../types/node/TNodeWithLexicalScope';

import { IIdentifierReplacer } from '../../interfaces/node-transformers/rename-identifiers-transformers/replacer/IIdentifierReplacer';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IScopeIdentifiersTraverser } from '../../interfaces/node/IScopeIdentifiersTraverser';
import { IScopeIdentifiersTraverserCallbackData } from '../../interfaces/node/IScopeIdentifiersTraverserCallbackData';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';
import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeMetadata } from '../../node/NodeMetadata';

/**
 * Replaces all replaceable identifiers in scope
 */
@injectFromBase()
@injectable()
export class ScopeIdentifiersTransformer extends AbstractNodeTransformer {
    /**
     * @type {NodeTransformer[]}
     */
    public override readonly runAfter: NodeTransformer[] = [NodeTransformer.VariablePreserveTransformer];

    /**
     * @type {boolean}
     */
    public override readonly runOnProgramNodeOnly: boolean = true;

    /**
     * @type {IIdentifierReplacer}
     */
    private readonly identifierReplacer: IIdentifierReplacer;

    /**
     * @type {WeakMap<TNodeWithLexicalScope, Set<string> | false>}
     */
    private readonly lexicalScopesWithObjectPatternWithoutDeclarationMap: WeakMap<TNodeWithLexicalScope, Set<string> | false> =
        new WeakMap();

    /**
     * @type {IScopeIdentifiersTraverser}
     */
    private readonly scopeIdentifiersTraverser: IScopeIdentifiersTraverser;

    /**
     * @param {IIdentifierReplacer} identifierReplacer
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     * @param {IScopeIdentifiersTraverser} scopeIdentifiersTraverser
     */
    public constructor(
        @inject(ServiceIdentifiers.IIdentifierReplacer) identifierReplacer: IIdentifierReplacer,
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions,
        @inject(ServiceIdentifiers.IScopeIdentifiersTraverser) scopeIdentifiersTraverser: IScopeIdentifiersTraverser
    ) {
        super(randomGenerator, options);

        this.identifierReplacer = identifierReplacer;
        this.scopeIdentifiersTraverser = scopeIdentifiersTraverser;
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        switch (nodeTransformationStage) {
            case NodeTransformationStage.RenameIdentifiers:
                return {
                    enter: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    }
                };

            default:
                return null;
        }
    }

    /**
     * @param {VariableDeclaration} programNode
     * @returns {NodeGuards}
     */
    public transformNode(programNode: ESTree.Program): ESTree.Node {
        this.scopeIdentifiersTraverser.traverseScopeIdentifiers(
            programNode,
            (data: IScopeIdentifiersTraverserCallbackData) => {
                throw new Error("STUB");
            },
            false
        );

        return programNode;
    }

    /**
     * @param {Variable} variable
     * @param {TNodeWithLexicalScope} lexicalScopeNode
     * @param {boolean} isGlobalDeclaration
     */
    private transformScopeVariableIdentifiers(
        variable: eslintScope.Variable,
        lexicalScopeNode: TNodeWithLexicalScope,
        isGlobalDeclaration: boolean
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {TNodeWithLexicalScope} lexicalScopeNode
     * @param {boolean} isGlobalDeclaration
     */
    private storeIdentifierName(
        identifierNode: ESTree.Identifier,
        lexicalScopeNode: TNodeWithLexicalScope,
        isGlobalDeclaration: boolean
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {TNodeWithLexicalScope} lexicalScopeNode
     * @param {Variable} variable
     */
    private replaceIdentifierName(
        identifierNode: ESTree.Identifier,
        lexicalScopeNode: TNodeWithLexicalScope,
        variable: eslintScope.Variable
    ): void {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {TNodeWithLexicalScope} lexicalScopeNode
     * @param {Variable} variable
     * @returns {boolean}
     */
    // eslint-disable-next-line complexity
    private isReplaceableIdentifierNode(
        identifierNode: ESTree.Identifier,
        lexicalScopeNode: TNodeWithLexicalScope,
        variable: eslintScope.Variable
    ): identifierNode is ESTree.Identifier & { parentNode: ESTree.Node } {
        throw new Error("STUB");
    }

    /**
     * @param {Variable} variable
     * @param {Identifier} identifierNode
     * @param {Node} parentNode
     * @returns {identifierNode is Identifier}
     */
    private isProhibitedClassDeclarationNameIdentifierNode(
        variable: eslintScope.Variable,
        identifierNode: ESTree.Identifier,
        parentNode: ESTree.Node
    ): identifierNode is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {Node} parentNode
     * @returns {identifierNode is Identifier}
     */
    private isProhibitedExportNamedClassDeclarationIdentifierNode(
        identifierNode: ESTree.Identifier,
        parentNode: ESTree.Node
    ): identifierNode is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {Node} parentNode
     * @returns {identifierNode is Identifier}
     */
    private isProhibitedExportNamedFunctionDeclarationIdentifierNode(
        identifierNode: ESTree.Identifier,
        parentNode: ESTree.Node
    ): identifierNode is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {Node} parentNode
     * @returns {identifierNode is Identifier}
     */
    private isProhibitedExportNamedVariableDeclarationIdentifierNode(
        identifierNode: ESTree.Identifier,
        parentNode: ESTree.Node
    ): identifierNode is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {Node} parentNode
     * @returns {boolean}
     */
    private isProhibitedImportSpecifierNode(identifierNode: ESTree.Identifier, parentNode: ESTree.Node): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @param {Node} parentNode
     * @returns {boolean}
     */
    private isProhibitedPropertyIdentifierNode(node: ESTree.Node, parentNode: ESTree.Node): node is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @param {Node} parentNode
     * @returns {boolean}
     */
    private isProhibitedPropertyAssignmentPatternIdentifierNode(
        node: ESTree.Node,
        parentNode: ESTree.Node
    ): node is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * Should not rename identifiers that used inside destructing assignment without declaration
     *
     * var a, b; // should not be renamed
     * ({a, b} = {a: 1, b: 2});
     *
     * @param {Variable} variable
     * @param {Identifier} identifierNode
     * @param {TNodeWithLexicalScope} lexicalScopeNode
     * @returns {boolean}
     */
    private isProhibitedVariableNameUsedInObjectPatternNode(
        variable: eslintScope.Variable,
        identifierNode: ESTree.Identifier,
        lexicalScopeNode: TNodeWithLexicalScope
    ): boolean {
        throw new Error("STUB");
    }
}
