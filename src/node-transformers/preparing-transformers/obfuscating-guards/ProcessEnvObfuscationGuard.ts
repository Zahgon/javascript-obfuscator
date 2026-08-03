import { injectable } from 'inversify';

import * as ESTree from 'estree';

import { IObfuscatingGuard } from '../../../interfaces/node-transformers/preparing-transformers/obfuscating-guards/IObfuscatingGuard';

import { ObfuscatingGuardResult } from '../../../enums/node/ObfuscatingGuardResult';

import { NodeGuards } from '../../../node/NodeGuards';

@injectable()
export class ProcessEnvObfuscationGuard implements IObfuscatingGuard {
    /**
     * @param {Node} node
     * @return {boolean}
     * @private
     */
    private static isProcessEnvMemberExpression(node: ESTree.Node): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @return {boolean}
     * @private
     */
    private static isPartOfProcessEnvChain(node: ESTree.Node): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {Node} node
     * @returns {ObfuscatingGuardResult}
     */
    public check(node: ESTree.Node): ObfuscatingGuardResult {
        throw new Error("STUB");
    }
}
