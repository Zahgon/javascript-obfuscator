import { inject, injectable, injectFromBase } from 'inversify';
import * as ESTree from 'estree';
import * as eslintScope from 'eslint-scope';

import { TNodeWithLexicalScope } from '../../types/node/TNodeWithLexicalScope';

import { IIdentifierReplacer } from '../../interfaces/node-transformers/rename-identifiers-transformers/replacer/IIdentifierReplacer';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IScopeIdentifiersTraverser } from '../../interfaces/node/IScopeIdentifiersTraverser';
import { IScopeIdentifiersTraverserCallbackData } from '../../interfaces/node/IScopeIdentifiersTraverserCallbackData';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';
import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeGuards } from '../../node/NodeGuards';

/**
 * Preserve non-replaceable variables
 */
@injectFromBase()
@injectable()
export class VariablePreserveTransformer extends AbstractNodeTransformer {
    /**
     * @type {NodeTransformer.ParentificationTransformer[]}
     */
    public override readonly runAfter: NodeTransformer[] = [NodeTransformer.ParentificationTransformer];

    /**
     * @type {boolean}
     */
    public override readonly runOnProgramNodeOnly: boolean = true;

    /**
     * @type {IIdentifierReplacer}
     */
    private readonly identifierReplacer: IIdentifierReplacer;

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

        this.preserveScopeVariableIdentifiers = this.preserveScopeVariableIdentifiers.bind(this);
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        const visitor: IVisitor = {
            enter: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node | undefined => {
                throw new Error("STUB");
            }
        };

        switch (nodeTransformationStage) {
            case NodeTransformationStage.Preparing:
            case NodeTransformationStage.RenameIdentifiers:
                return visitor;

            case NodeTransformationStage.Converting:
                return this.shouldPreserveConvertingStageIdentifiers() ? visitor : null;

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
            this.preserveScopeVariableIdentifiers
        );

        return programNode;
    }

    /**
     * @param {IScopeIdentifiersTraverserCallbackData} data
     */
    private preserveScopeVariableIdentifiers(data: IScopeIdentifiersTraverserCallbackData): void {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     */
    private preserveIdentifierNameForRootLexicalScope(identifierNode: ESTree.Identifier): void {
        throw new Error("STUB");
    }

    /**
     * @param {Identifier} identifierNode
     * @param {Scope} variableScope
     */
    private preserveIdentifierNameForLexicalScope(
        identifierNode: ESTree.Identifier,
        variableScope: eslintScope.Scope
    ): void {
        throw new Error("STUB");
    }

    /**
     * @returns {boolean}
     */
    private shouldPreserveConvertingStageIdentifiers(): boolean {
        return (
            this.options.controlFlowFlattening ||
            this.options.deadCodeInjection ||
            this.options.stringArray ||
            this.options.transformObjectKeys
        );
    }
}
