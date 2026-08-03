/* eslint-disable max-lines */
import * as ESTree from 'estree';

import { TNodeWithLexicalScope } from '../types/node/TNodeWithLexicalScope';
import { TNodeWithLexicalScopeStatements } from '../types/node/TNodeWithLexicalScopeStatements';
import { TNodeWithSingleStatementBody } from '../types/node/TNodeWithSingleStatementBody';
import { TNodeWithStatements } from '../types/node/TNodeWithStatements';

import { NodeType } from '../enums/node/NodeType';

export class NodeGuards {
    /**
     * @type {string[]}
     */
    private static readonly nodesWithLexicalStatements: string[] = [
        NodeType.ArrowFunctionExpression,
        NodeType.FunctionDeclaration,
        NodeType.FunctionExpression,
        NodeType.MethodDefinition
    ];

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isArrayPatternNode(node: ESTree.Node): node is ESTree.ArrayPattern {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isArrowFunctionExpressionNode(node: ESTree.Node): node is ESTree.ArrowFunctionExpression {
        return node.type === NodeType.ArrowFunctionExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isAssignmentExpressionNode(node: ESTree.Node): node is ESTree.AssignmentExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isAssignmentPatternNode(node: ESTree.Node): node is ESTree.AssignmentPattern {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isAwaitExpressionNode(node: ESTree.Node): node is ESTree.AwaitExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isBigIntLiteralNode(node: ESTree.Node): node is ESTree.BigIntLiteral {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isBlockStatementNode(node: ESTree.Node): node is ESTree.BlockStatement {
        return node.type === NodeType.BlockStatement;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isBreakStatementNode(node: ESTree.Node): node is ESTree.BreakStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isCallExpressionNode(node: ESTree.Node): node is ESTree.CallExpression {
        return node.type === NodeType.CallExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isChainExpressionNode(node: ESTree.Node): node is ESTree.ChainExpression {
        return node.type === NodeType.ChainExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isClassBodyNode(node: ESTree.Node): node is ESTree.ClassBody {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isClassDeclarationNode(
        node: ESTree.Node
    ): node is ESTree.ClassDeclaration & { id: ESTree.Identifier } {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isConditionalExpressionNode(node: ESTree.Node): node is ESTree.ConditionalExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isContinueStatementNode(node: ESTree.Node): node is ESTree.ContinueStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isDirectiveNode(node: ESTree.Node): node is ESTree.Directive {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isDoWhileStatementNode(node: ESTree.Node): node is ESTree.DoWhileStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isExportAllDeclarationNode(node: ESTree.Node): node is ESTree.ExportAllDeclaration {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isExportNamedDeclarationNode(node: ESTree.Node): node is ESTree.ExportNamedDeclaration {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isExportSpecifierNode(node: ESTree.Node): node is ESTree.ExportSpecifier {
        return node.type === NodeType.ExportSpecifier;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isExpressionStatementNode(node: ESTree.Node): node is ESTree.ExpressionStatement {
        return node.type === NodeType.ExpressionStatement && !('directive' in node);
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isForStatementNode(node: ESTree.Node): node is ESTree.ForStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isForInStatementNode(node: ESTree.Node): node is ESTree.ForInStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isForOfStatementNode(node: ESTree.Node): node is ESTree.ForOfStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isFunctionNode(node: ESTree.Node): node is ESTree.Function {
        return (
            NodeGuards.isFunctionDeclarationNode(node) ||
            NodeGuards.isFunctionExpressionNode(node) ||
            NodeGuards.isArrowFunctionExpressionNode(node)
        );
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isFunctionDeclarationNode(
        node: ESTree.Node
    ): node is ESTree.FunctionDeclaration & { id: ESTree.Identifier } {
        return node.type === NodeType.FunctionDeclaration && node.id !== null;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isFunctionExpressionNode(node: ESTree.Node): node is ESTree.FunctionExpression {
        return node.type === NodeType.FunctionExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isIdentifierNode(node: ESTree.Node): node is ESTree.Identifier {
        return node.type === NodeType.Identifier;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isIfStatementNode(node: ESTree.Node): node is ESTree.IfStatement {
        return node.type === NodeType.IfStatement;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isIfStatementNodeWithSingleStatementBody(node: ESTree.Node): node is ESTree.IfStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isImportDeclarationNode(node: ESTree.Node): node is ESTree.ImportDeclaration {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isImportExpressionNode(node: ESTree.Node): node is ESTree.ImportExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isImportSpecifierNode(node: ESTree.Node): node is ESTree.ImportSpecifier {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @param {Node} parentNode
     * @returns {boolean}
     */
    public static isLabelIdentifierNode(node: ESTree.Node, parentNode: ESTree.Node): node is ESTree.Identifier {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isLabeledStatementNode(node: ESTree.Node): node is ESTree.LabeledStatement {
        return node.type === NodeType.LabeledStatement;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isLiteralNode(node: ESTree.Node): node is ESTree.Literal {
        return node.type === NodeType.Literal;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isLogicalExpressionNode(node: ESTree.Node): node is ESTree.LogicalExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isLoopStatementNode(
        node: ESTree.Node
    ): node is
        | ESTree.ForStatement
        | ESTree.ForInStatement
        | ESTree.ForOfStatement
        | ESTree.WhileStatement
        | ESTree.DoWhileStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isMemberExpressionNode(node: ESTree.Node): node is ESTree.MemberExpression {
        return node.type === NodeType.MemberExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isMetaPropertyNode(node: ESTree.Node): node is ESTree.MetaProperty {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isMethodDefinitionNode(node: ESTree.Node): node is ESTree.MethodDefinition {
        return node.type === NodeType.MethodDefinition;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isNewExpressionNode(node: ESTree.Node): node is ESTree.NewExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Object} object
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    public static isNode(object: Object & { type?: string }): object is ESTree.Node {
        return object && !object.type !== undefined;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isNodeWithLexicalScope(node: ESTree.Node): node is TNodeWithLexicalScope {
        return NodeGuards.isProgramNode(node) || NodeGuards.isFunctionNode(node);
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isNodeWithBlockLexicalScope(node: ESTree.Node): node is TNodeWithLexicalScope {
        throw new Error("STUB");
    }

    /**
     * Checks if a node is the node with single statement body, like:
     * while (true)
     *     console.log(1);
     *
     * or:
     *
     *
     * @param {Node} node
     * @returns {boolean}
     */
    public static isNodeWithSingleStatementBody(node: ESTree.Node): node is TNodeWithSingleStatementBody {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @param {Node} parentNode
     * @returns {boolean}
     */
    public static isNodeWithLexicalScopeStatements(
        node: ESTree.Node,
        parentNode: ESTree.Node
    ): node is TNodeWithLexicalScopeStatements {
        return (
            NodeGuards.isProgramNode(node) ||
            (NodeGuards.isBlockStatementNode(node) && NodeGuards.nodesWithLexicalStatements.includes(parentNode.type))
        );
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isNodeWithStatements(node: ESTree.Node): node is TNodeWithStatements {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isNodeWithComments(node: ESTree.Node): node is ESTree.Node {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isObjectPatternNode(node: ESTree.Node): node is ESTree.ObjectPattern {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isObjectExpressionNode(node: ESTree.Node): node is ESTree.ObjectExpression {
        return node.type === NodeType.ObjectExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isPrivateIdentifierNode(node: ESTree.Node): node is ESTree.PrivateIdentifier {
        return node.type === NodeType.PrivateIdentifier;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isProgramNode(node: ESTree.Node): node is ESTree.Program {
        return node.type === NodeType.Program;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isPropertyNode(node: ESTree.Node): node is ESTree.Property {
        return node.type === NodeType.Property;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isPropertyDefinitionNode(node: ESTree.Node): node is ESTree.PropertyDefinition {
        return node.type === NodeType.PropertyDefinition;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isRestElementNode(node: ESTree.Node): node is ESTree.RestElement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isReturnStatementNode(node: ESTree.Node): node is ESTree.ReturnStatement {
        return node.type === NodeType.ReturnStatement;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isSequenceExpressionNode(node: ESTree.Node): node is ESTree.SequenceExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isSpreadElementNode(node: ESTree.Node): node is ESTree.SpreadElement {
        return node.type === NodeType.SpreadElement;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isStaticBlockNode(node: ESTree.Node): node is ESTree.StaticBlock {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isSuperNode(node: ESTree.Node): node is ESTree.Super {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isSwitchCaseNode(node: ESTree.Node): node is ESTree.SwitchCase {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isTaggedTemplateExpressionNode(node: ESTree.Node): node is ESTree.TaggedTemplateExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isTemplateLiteralNode(node: ESTree.Node): node is ESTree.TemplateLiteral {
        return node.type === NodeType.TemplateLiteral;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isThisExpressionNode(node: ESTree.Node): node is ESTree.ThisExpression {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isUnaryExpressionNode(node: ESTree.Node): node is ESTree.UnaryExpression {
        return node.type === NodeType.UnaryExpression;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isVariableDeclarationNode(node: ESTree.Node): node is ESTree.VariableDeclaration {
        return node.type === NodeType.VariableDeclaration;
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isVariableDeclaratorNode(node: ESTree.Node): node is ESTree.VariableDeclarator {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isWithStatementNode(node: ESTree.Node): node is ESTree.WithStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isWhileStatementNode(node: ESTree.Node): node is ESTree.WhileStatement {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isYieldExpressionNode(node: ESTree.Node): node is ESTree.YieldExpression {
        throw new Error("STUB");
    }
}
