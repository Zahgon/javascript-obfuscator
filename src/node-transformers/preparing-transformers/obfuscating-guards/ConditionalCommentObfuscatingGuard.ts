import { injectable } from 'inversify';

import * as ESTree from 'estree';

import { IObfuscatingGuard } from '../../../interfaces/node-transformers/preparing-transformers/obfuscating-guards/IObfuscatingGuard';

import { ObfuscatingGuardResult } from '../../../enums/node/ObfuscatingGuardResult';

import { NodeGuards } from '../../../node/NodeGuards';

@injectable()
export class ConditionalCommentObfuscatingGuard implements IObfuscatingGuard {
    /**
     * @type {RegExp}
     */
    private static readonly obfuscationEnableCommentRegExp: RegExp = new RegExp('javascript-obfuscator *: *enable');

    /**
     * @type {RegExp}
     */
    private static readonly obfuscationDisableCommentRegExp: RegExp = new RegExp('javascript-obfuscator *: *disable');

    /**
     * @type {boolean}
     */
    private obfuscationAllowed: boolean = true;

    /**
     * @param {Comment} comment
     * @returns {boolean}
     */
    public static isConditionalComment(comment: ESTree.Comment): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {ObfuscatingGuardResult}
     */
    public check(node: ESTree.Node): ObfuscatingGuardResult {
        throw new Error("STUB");
    }

    /**
     * @param {Comment[]} comments
     * @returns {boolean}
     */
    private checkComments(comments: ESTree.Comment[]): boolean {
        throw new Error("STUB");
    }
}
