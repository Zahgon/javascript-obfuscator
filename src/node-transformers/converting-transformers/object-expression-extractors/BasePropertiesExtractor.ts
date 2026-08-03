import { injectable } from 'inversify';

import * as ESTree from 'estree';

import { TNodeWithStatements } from '../../../types/node/TNodeWithStatements';
import { IObjectExpressionExtractorResult } from '../../../interfaces/node-transformers/converting-transformers/object-expression-extractors/IObjectExpressionExtractorResult';

import { IObjectExpressionExtractor } from '../../../interfaces/node-transformers/converting-transformers/object-expression-extractors/IObjectExpressionExtractor';

import { NodeAppender } from '../../../node/NodeAppender';
import { NodeFactory } from '../../../node/NodeFactory';
import { NodeGuards } from '../../../node/NodeGuards';
import { NodeStatementUtils } from '../../../node/NodeStatementUtils';
import { NodeUtils } from '../../../node/NodeUtils';

@injectable()
export class BasePropertiesExtractor implements IObjectExpressionExtractor {
    /**
     * @param {Property} propertyNode
     * @returns {string | null}
     */
    private static getPropertyNodeKeyName(propertyNode: ESTree.Property): string | null {
        throw new Error("STUB");
    }

    /**
     * @param {Property} node
     * @returns {boolean}
     */
    private static isProhibitedPropertyNode(node: ESTree.Property): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {propertyValueNode is Pattern}
     */
    private static isProhibitedPattern(node: ESTree.Node): node is ESTree.Pattern {
        throw new Error("STUB");
    }

    /**
     * @param {Property} property
     * @returns {boolean}
     */
    private static shouldCreateLiteralNode(property: ESTree.Property): boolean {
        throw new Error("STUB");
    }

    /**
     * extracts object expression properties:
     *     var _0xabc123 = {
     *          foo: 1,
     *          bar: 2
     *     };
     *
     * to:
     *     var _0xabc123 = {};
     *     _0xabc123['foo'] = 1;
     *     _0xabc123['bar'] = 2;
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
     * @param {Expression} memberExpressionHostNode
     * @returns {IObjectExpressionExtractorResult}
     */
    private transformObjectExpressionNode(
        objectExpressionNode: ESTree.ObjectExpression,
        hostStatement: ESTree.Statement,
        memberExpressionHostNode: ESTree.Expression
    ): IObjectExpressionExtractorResult {
        throw new Error("STUB");
    }

    /**
     * @param {(Property | SpreadElement)[]} properties
     * @param {Statement} hostStatement
     * @param {Expression} memberExpressionHostNode
     * @returns {[ExpressionStatement[], number[]]}
     */
    private extractPropertiesToExpressionStatements(
        properties: (ESTree.Property | ESTree.SpreadElement)[],
        hostStatement: ESTree.Statement,
        memberExpressionHostNode: ESTree.Expression
    ): [ESTree.ExpressionStatement[], number[]] {
        throw new Error("STUB");
    }

    /**
     * @param {ObjectExpression} objectExpressionNode
     * @param {number[]} removablePropertyIds
     */
    private filterExtractedObjectExpressionProperties(
        objectExpressionNode: ESTree.ObjectExpression,
        removablePropertyIds: number[]
    ): void {
        throw new Error("STUB");
    }
}
