import { inject, injectable, injectFromBase } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as ESTree from 'estree';

import { ILiteralNodesCacheStorage } from '../../interfaces/storages/string-array-transformers/ILiteralNodesCacheStorage';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStringArrayStorageItemData } from '../../interfaces/storages/string-array-transformers/IStringArrayStorageItem';

import { StringArrayEncoding } from '../../enums/node-transformers/string-array-transformers/StringArrayEncoding';

import { MapStorage } from '../MapStorage';

@injectFromBase()
@injectable()
export class LiteralNodesCacheStorage extends MapStorage<string, ESTree.Node> implements ILiteralNodesCacheStorage {
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
     * @param {Literal} literalNode
     * @param {IStringArrayStorageItemData | undefined} stringArrayStorageItemData
     * @returns {string}
     */
    public buildKey(
        literalNode: ESTree.Literal,
        stringArrayStorageItemData: IStringArrayStorageItemData | undefined
    ): string {
        throw new Error("STUB");
    }

    /**
     * @param {string} key
     * @param {IStringArrayStorageItemData | undefined} stringArrayStorageItemData
     * @returns {boolean}
     */
    public shouldUseCachedValue(
        key: string,
        stringArrayStorageItemData: IStringArrayStorageItemData | undefined
    ): boolean {
        throw new Error("STUB");
    }
}
