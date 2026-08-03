import { inject, injectable } from 'inversify';

import * as ESTree from 'estree';

import { IObfuscatingGuard } from '../../../interfaces/node-transformers/preparing-transformers/obfuscating-guards/IObfuscatingGuard';
import { IOptions } from '../../../interfaces/options/IOptions';

import { ObfuscatingGuardResult } from '../../../enums/node/ObfuscatingGuardResult';

import { ServiceIdentifiers } from '../../../container/ServiceIdentifiers';

import { NodeGuards } from '../../../node/NodeGuards';

@injectable()
export class ForceTransformStringObfuscatingGuard implements IObfuscatingGuard {
    /**
     * @type {IOptions}
     */
    private readonly options: IOptions;

    /**
     * @param {IOptions} options
     */
    public constructor(@inject(ServiceIdentifiers.IOptions) options: IOptions) {
        this.options = options;
    }

    /**
     * @param {Node} node
     * @returns {ObfuscatingGuardResult}
     */
    public check(node: ESTree.Node): ObfuscatingGuardResult {
        throw new Error("STUB");
    }

    /**
     * @param {string} value
     * @returns {boolean}
     */
    private isForceTransformString(value: string): boolean {
        throw new Error("STUB");
    }
}
