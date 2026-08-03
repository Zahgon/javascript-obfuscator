import { inject, injectable } from 'inversify';
import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import * as estraverse from '@javascript-obfuscator/estraverse';
import * as ESTree from 'estree';

import { TStringArrayEncoding } from '../../types/options/TStringArrayEncoding';
import { TStringLiteralNode } from '../../types/node/TStringLiteralNode';

import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStringArrayStorage } from '../../interfaces/storages/string-array-transformers/IStringArrayStorage';
import { IStringArrayStorageAnalyzer } from '../../interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer';
import { IStringArrayStorageItemData } from '../../interfaces/storages/string-array-transformers/IStringArrayStorageItem';

import { StringArrayEncoding } from '../../enums/node-transformers/string-array-transformers/StringArrayEncoding';

import { NodeGuards } from '../../node/NodeGuards';
import { NodeLiteralUtils } from '../../node/NodeLiteralUtils';
import { NodeMetadata } from '../../node/NodeMetadata';

/**
 * Adds values of literal nodes to the string array storage
 */
@injectable()
export class StringArrayStorageAnalyzer implements IStringArrayStorageAnalyzer {
    /**
     * @type {number}
     */
    private static readonly minimumLengthForStringArray: number = 3;

    /**
     * Matches a lone (unpaired) surrogate code unit. Because of the `u` flag, valid surrogate pairs are
     * iterated as a single code point outside the `\uD800-\uDFFF` range, so only unpaired surrogates match.
     *
     * @type {RegExp}
     */
    private static readonly loneSurrogateRegExp: RegExp = /[\uD800-\uDFFF]/u;

    /**
     * @type {IOptions}
     */
    private readonly options: IOptions;

    /**
     * @type {randomGenerator}
     */
    private readonly randomGenerator: IRandomGenerator;

    /**
     * @type {IStringArrayStorage}
     */
    private readonly stringArrayStorage: IStringArrayStorage;

    /**
     * @type {WeakMap<ESTree.Literal, IStringArrayStorageItemData>}
     */
    private readonly stringArrayStorageData: WeakMap<ESTree.Literal, IStringArrayStorageItemData> = new WeakMap();

    /**
     * @param {IStringArrayStorage} stringArrayStorage
     * @param {IRandomGenerator} randomGenerator
     * @param {IOptions} options
     */
    public constructor(
        @inject(ServiceIdentifiers.IStringArrayStorage) stringArrayStorage: IStringArrayStorage,
        @inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        this.stringArrayStorage = stringArrayStorage;
        this.randomGenerator = randomGenerator;
        this.options = options;
    }

    /**
     * @param {Program} astTree
     */
    public analyze(astTree: ESTree.Program): void {
        throw new Error("STUB");
    }

    /**
     * @param {Literal} literalNode
     * @param {Node} parentNode
     */
    public analyzeLiteralNode(literalNode: ESTree.Literal, parentNode: ESTree.Node): void {
        throw new Error("STUB");
    }

    /**
     * @param {TStringLiteralNode} literalNode
     */
    public addItemDataForLiteralNode(literalNode: TStringLiteralNode): void {
        throw new Error("STUB");
    }

    /**
     * @param {Literal} literalNode
     * @returns {IStringArrayStorageItemData | undefined}
     */
    public getItemDataForLiteralNode(literalNode: ESTree.Literal): IStringArrayStorageItemData | undefined {
        throw new Error("STUB");
    }

    /**
     * @param {TStringLiteralNode} literalNode
     * @returns {boolean}
     */
    private shouldAddValueToStringArray(literalNode: TStringLiteralNode): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {string} value
     * @returns {boolean}
     */
    private isProhibitedStringArrayValue(value: string): boolean {
        throw new Error("STUB");
    }
}
