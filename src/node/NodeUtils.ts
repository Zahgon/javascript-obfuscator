import * as escodegen from '@javascript-obfuscator/escodegen';
import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { ecmaVersion } from '../constants/EcmaVersion';

import { ASTParserFacade } from '../ASTParserFacade';
import { NodeGuards } from './NodeGuards';
import { NodeMetadata } from './NodeMetadata';

export class NodeUtils {
    /**
     * @param {ESTree.Literal} literalNode
     * @returns {ESTree.Literal}
     */
    public static addXVerbatimPropertyTo(literalNode: ESTree.Literal): ESTree.Literal {
        literalNode['x-verbatim-property'] = {
            content: literalNode.raw,
            precedence: escodegen.Precedence.Primary
        };

        return literalNode;
    }

    /**
     * @param {T} astTree
     * @returns {T}
     */
    public static clone<T extends ESTree.Node = ESTree.Node>(astTree: T): T {
        throw new Error("STUB");
    }

    /**
     * @param {string} code
     * @returns {ESTree.Statement[]}
     */
    public static convertCodeToStructure(code: string): ESTree.Statement[] {
        const structure: ESTree.Program = ASTParserFacade.parse(code, {
            ecmaVersion,
            sourceType: 'script'
        });

        estraverse.replace(structure, {
            enter: (node: ESTree.Node, parentNode: ESTree.Node | null): ESTree.Node => {
                throw new Error("STUB");
            }
        });

        return <ESTree.Statement[]>structure.body;
    }

    /**
     * @param {NodeGuards[]} structure
     * @returns {string}
     */
    public static convertStructureToCode(structure: ESTree.Node[]): string {
        return structure.reduce((code: string, node: ESTree.Node) => {
            throw new Error("STUB");
        }, '');
    }

    /**
     * @param {UnaryExpression} unaryExpressionNode
     * @returns {NodeGuards}
     */
    public static getUnaryExpressionArgumentNode(unaryExpressionNode: ESTree.UnaryExpression): ESTree.Node {
        if (NodeGuards.isUnaryExpressionNode(unaryExpressionNode.argument)) {
            return NodeUtils.getUnaryExpressionArgumentNode(unaryExpressionNode.argument);
        }

        return unaryExpressionNode.argument;
    }

    /**
     * @param {T} astTree
     * @returns {T}
     */
    public static parentizeAst<T extends ESTree.Node = ESTree.Node>(astTree: T): T {
        const parentNode: ESTree.Node | null = astTree.parentNode ?? null;

        estraverse.replace(astTree, {
            enter: NodeUtils.parentizeNode
        });

        if (parentNode) {
            astTree.parentNode = parentNode;
        }

        return astTree;
    }

    /**
     * @param {T} node
     * @param {Node} parentNode
     * @returns {T}
     */
    public static parentizeNode<T extends ESTree.Node = ESTree.Node>(node: T, parentNode: ESTree.Node | null): T {
        node.parentNode = parentNode ?? node;

        return node;
    }

    /**
     * @param {T} node
     * @returns {T}
     */
    private static cloneRecursive<T>(node: NonNullable<T>): T {
        throw new Error("STUB");
    }
}
