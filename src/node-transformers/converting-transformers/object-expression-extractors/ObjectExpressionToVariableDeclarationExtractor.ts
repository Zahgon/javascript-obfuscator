import { inject, injectable } from 'inversify';
import { ServiceIdentifiers } from '../../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { TNodeWithStatements } from '../../../types/node/TNodeWithStatements';
import { TObjectExpressionKeysTransformerCustomNodeFactory } from '../../../types/container/custom-nodes/TObjectExpressionKeysTransformerCustomNodeFactory';
import { IObjectExpressionExtractorResult } from '../../../interfaces/node-transformers/converting-transformers/object-expression-extractors/IObjectExpressionExtractorResult';
import { TStatement } from '../../../types/node/TStatement';

import { ICustomNode } from '../../../interfaces/custom-nodes/ICustomNode';
import { TInitialData } from '../../../types/TInitialData';
import { IObjectExpressionExtractor } from '../../../interfaces/node-transformers/converting-transformers/object-expression-extractors/IObjectExpressionExtractor';

import { ObjectExpressionKeysTransformerCustomNode } from '../../../enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode';

import { ObjectExpressionVariableDeclarationHostNode } from '../../../custom-nodes/object-expression-keys-transformer-nodes/ObjectExpressionVariableDeclarationHostNode';
import { NodeAppender } from '../../../node/NodeAppender';
import { NodeGuards } from '../../../node/NodeGuards';
import { NodeStatementUtils } from '../../../node/NodeStatementUtils';
import { NodeUtils } from '../../../node/NodeUtils';
import { TNodeWithLexicalScope } from '../../../types/node/TNodeWithLexicalScope';
import { NodeLexicalScopeUtils } from '../../../node/NodeLexicalScopeUtils';

@injectable()
export class ObjectExpressionToVariableDeclarationExtractor implements IObjectExpressionExtractor {
    /**
     * @type {TObjectExpressionKeysTransformerCustomNodeFactory}
     */
    private readonly objectExpressionKeysTransformerCustomNodeFactory: TObjectExpressionKeysTransformerCustomNodeFactory;

    /**
     * @param {TObjectExpressionKeysTransformerCustomNodeFactory} objectExpressionKeysTransformerCustomNodeFactory
     */
    public constructor(
        @inject(ServiceIdentifiers.Factory__IObjectExpressionKeysTransformerCustomNode)
        objectExpressionKeysTransformerCustomNodeFactory: TObjectExpressionKeysTransformerCustomNodeFactory
    ) {
        this.objectExpressionKeysTransformerCustomNodeFactory = objectExpressionKeysTransformerCustomNodeFactory;
    }

    /**
     * extracts object expression:
     *     var object = {
     *          foo: 1,
     *          bar: 2
     *     };
     *
     * to:
     *     var _0xabc123 = {
     *          foo: 1,
     *          bar: 2
     *     };
     *     var object = _0xabc123;
     *
     * @param {ObjectExpression} objectExpressionNode
     * @param {Statement} hostStatement
     * @returns {IObjectExpressionExtractorResult}
     */
    public extract(
        objectExpressionNode: ESTree.ObjectExpression,
        hostStatement: ESTree.Statement
    ): IObjectExpressionExtractorResult {
        throw new Error("STUB");
    }

    /**
     * @param {ObjectExpression} objectExpressionNode
     * @param {Statement} hostStatement
     * @returns {Node}
     */
    private transformObjectExpressionToVariableDeclaration(
        objectExpressionNode: ESTree.ObjectExpression,
        hostStatement: ESTree.Statement
    ): IObjectExpressionExtractorResult {
        throw new Error("STUB");
    }

    /**
     * @param {TNodeWithLexicalScope} lexicalScopeNode
     * @param {(Property | SpreadElement)[]} properties
     * @returns {VariableDeclaration}
     */
    private getObjectExpressionHostNode(
        lexicalScopeNode: TNodeWithLexicalScope,
        properties: (ESTree.Property | ESTree.SpreadElement)[]
    ): ESTree.VariableDeclaration {
        throw new Error("STUB");
    }

    /**
     * @param {VariableDeclaration} objectExpressionHostNode
     * @returns {Identifier}
     */
    private getObjectExpressionIdentifierNode(objectExpressionHostNode: ESTree.VariableDeclaration): ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {VariableDeclaration} objectExpressionHostNode
     * @returns {Identifier}
     */
    private getObjectExpressionNode(objectExpressionHostNode: ESTree.VariableDeclaration): ESTree.ObjectExpression {
        throw new Error("STUB");
    }
}
