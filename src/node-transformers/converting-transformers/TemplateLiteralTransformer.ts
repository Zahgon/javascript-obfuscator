import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeFactory } from '../../node/NodeFactory';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeUtils } from '../../node/NodeUtils';

/**
 * Transform ES2015 template literals to ES5
 * Thanks to Babel for algorithm
 */
@injectFromBase()
@injectable()
export class TemplateLiteralTransformer extends AbstractNodeTransformer {
    /**
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     */
    public constructor(
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        super(randomGenerator, options);
    }

    /**
     * @param {NodeGuards} node
     * @returns {boolean}
     */
    private static isLiteralNodeWithStringValue(node: ESTree.Node | undefined): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        switch (nodeTransformationStage) {
            case NodeTransformationStage.Converting:
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
     * @param {ESTree.TemplateLiteral} templateLiteralNode
     * @param {ESTree.Node} parentNode
     * @returns {ESTree.Node}
     */
    public transformNode(templateLiteralNode: ESTree.TemplateLiteral, parentNode: ESTree.Node): ESTree.Node {
        if (NodeGuards.isTaggedTemplateExpressionNode(parentNode)) {
            return templateLiteralNode;
        }

        return this.transformTemplateLiteralNode(templateLiteralNode, parentNode);
    }

    /**
     * @param {ESTree.TemplateLiteral} templateLiteralNode
     * @param {ESTree.Node} parentNode
     * @returns {ESTree.Expression}
     */
    private transformTemplateLiteralNode(
        templateLiteralNode: ESTree.TemplateLiteral,
        parentNode: ESTree.Node
    ): ESTree.Expression {
        throw new Error("STUB");
    }
}
