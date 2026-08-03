import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';
import * as estraverse from '@javascript-obfuscator/estraverse';

import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IVisitor } from '../../interfaces/node-transformers/IVisitor';

import { NodeTransformationStage } from '../../enums/node-transformers/NodeTransformationStage';

import { AbstractNodeTransformer } from '../AbstractNodeTransformer';
import { ConditionalCommentObfuscatingGuard } from '../preparing-transformers/obfuscating-guards/ConditionalCommentObfuscatingGuard';
import { NodeGuards } from '../../node/NodeGuards';

@injectFromBase()
@injectable()
export class CommentsTransformer extends AbstractNodeTransformer {
    /**
     * @type {string[]}
     */
    private static readonly preservedWords: string[] = ['@license', '@preserve'];

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
     * @param {NodeTransformationStage} nodeTransformationStage
     * @returns {IVisitor | null}
     */
    public getVisitor(nodeTransformationStage: NodeTransformationStage): IVisitor | null {
        switch (nodeTransformationStage) {
            case NodeTransformationStage.Initializing:
                return {
                    leave: (node: ESTree.Node): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    }
                };

            case NodeTransformationStage.Finalizing:
                return {
                    leave: (node: ESTree.Node): ESTree.Node | undefined => {
                        throw new Error("STUB");
                    }
                };

            default:
                return null;
        }
    }

    /**
     * Moves comments to their nodes
     */
    public transformNode(rootNode: ESTree.Program): ESTree.Node {
        rootNode = this.filterCommentsOnPrimaryTraverse(rootNode);

        if (!rootNode.comments?.length) {
            return rootNode;
        }

        const comments: ESTree.Comment[] = rootNode.comments.reverse();

        if (comments.length === 0) {
            return rootNode;
        }

        if (!rootNode.body.length) {
            rootNode.leadingComments = comments;

            return rootNode;
        }

        let isFirstNode: boolean = true;

        estraverse.traverse(rootNode, {
            enter: (node: ESTree.Node): void => {
                throw new Error("STUB");
            }
        });

        if (comments.length > 0) {
            rootNode.trailingComments = comments.reverse();
        }

        return rootNode;
    }

    /**
     * Removes all comments from node except comments that contain
     * preserved words or `javascript-obfuscator` words
     *
     * @param {ESTree.Program} rootNode
     * @returns {ESTree.Program}
     */
    private filterCommentsOnPrimaryTraverse(rootNode: ESTree.Program): ESTree.Program {
        throw new Error("STUB");
    }

    /**
     * Removes all comments from node except comments that contain preserved words
     *
     * @param {ESTree.Program} rootNode
     * @returns {ESTree.Program}
     */
    private filterCommentsOnFinalizingTraverse(rootNode: ESTree.Program): ESTree.Program {
        estraverse.replace(rootNode, {
            enter: (node: ESTree.Node): ESTree.Node => {
                throw new Error("STUB");
            }
        });

        return rootNode;
    }

    /**
     * @param {ESTree.Comment} comment
     * @param {boolean} keepConditionalComment
     * @returns {boolean}
     */
    private filterComment(comment: ESTree.Comment, keepConditionalComment: boolean): boolean {
        throw new Error("STUB");
    }
}
