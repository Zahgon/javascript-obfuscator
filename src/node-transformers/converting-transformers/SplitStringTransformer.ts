import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';
import * as stringz from 'stringz';

import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformer } from '../../enums/node-transformers/NodeTransformer';
import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { NodeFactory } from '../../node/NodeFactory';
import { NodeGuards } from '../../node/NodeGuards';
import { NodeLiteralUtils } from '../../node/NodeLiteralUtils';
import { NodeUtils } from '../../node/NodeUtils';

/**
 * Splits strings into parts
 */
@injectFromBase()
@injectable()
export class SplitStringTransformer extends AbstractNodeTransformer {
    /**
     * @type {number}
     */
    private static readonly firstPassChunkLength: number = 1000;

    /**
     * @type {NodeTransformer[]}
     */
    public override runAfter: NodeTransformer[] = [
        NodeTransformer.ObjectExpressionKeysTransformer,
        NodeTransformer.TemplateLiteralTransformer
    ];

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
     * @param {string} string
     * @param {number} stringLength
     * @param {number} chunkSize
     * @returns {string[]}
     */
    private static chunkString(string: string, stringLength: number, chunkSize: number): string[] {
        throw new Error("STUB");
    }

    /**
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        if (!this.options.splitStrings) {
            return null;
        }

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
     * Needs to split string on chunks of length `splitStringsChunkLength` in two pass, because of
     * `Maximum call stack size exceeded` error in `esrecurse` package
     *
     * @param {Literal} literalNode
     * @param {Node} parentNode
     * @returns {Node}
     */
    public transformNode(literalNode: ESTree.Literal, parentNode: ESTree.Node): ESTree.Node {
        if (NodeLiteralUtils.isProhibitedLiteralNode(literalNode, parentNode)) {
            return literalNode;
        }

        // pass #1: split string on a large chunks with length of `firstPassChunkLength`
        const firstPassChunksNode: ESTree.Node = this.transformLiteralNodeByChunkLength(
            literalNode,
            SplitStringTransformer.firstPassChunkLength
        );

        // pass #2: split large chunks on a chunks with length of `splitStringsChunkLength`
        const secondPassChunksNode: ESTree.Node = estraverse.replace(firstPassChunksNode, {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            enter: (node: ESTree.Node, parentNode: ESTree.Node | null) => {
                throw new Error("STUB");
            }
        });

        NodeUtils.parentizeNode(secondPassChunksNode, parentNode);
        NodeUtils.parentizeAst(secondPassChunksNode);

        return secondPassChunksNode;
    }

    /**
     * @param {Literal} literalNode
     * @param {number} chunkLength
     * @returns {Node}
     */
    private transformLiteralNodeByChunkLength(literalNode: ESTree.Literal, chunkLength: number): ESTree.Node {
        throw new Error("STUB");
    }

    /**
     * @param {string[]} chunks
     * @returns {BinaryExpression}
     */
    private transformStringChunksToBinaryExpressionNode(chunks: string[]): ESTree.BinaryExpression {
        throw new Error("STUB");
    }
}
