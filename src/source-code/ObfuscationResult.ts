import { inject, injectable } from 'inversify';
import { ServiceIdentifiers } from '../container/ServiceIdentifiers';

import { TIdentifierNamesCache } from '../types/TIdentifierNamesCache';

import { ICryptUtils } from '../interfaces/utils/ICryptUtils';
import { IGlobalIdentifierNamesCacheStorage } from '../interfaces/storages/identifier-names-cache/IGlobalIdentifierNamesCacheStorage';
import { IObfuscationResult } from '../interfaces/source-code/IObfuscationResult';
import { IPropertyIdentifierNamesCacheStorage } from '../interfaces/storages/identifier-names-cache/IPropertyIdentifierNamesCacheStorage';
import { IOptions } from '../interfaces/options/IOptions';

import { initializable } from '../decorators/Initializable';
import { SourceMapMode } from '../enums/source-map/SourceMapMode';

@injectable()
export class ObfuscationResult implements IObfuscationResult {
    /**
     * @type {string}
     */
    @initializable()
    private obfuscatedCode!: string;

    /**
     * @type {string}
     */
    @initializable()
    private sourceMap!: string;

    /**
     * @type {ICryptUtils}
     */
    private readonly cryptUtils: ICryptUtils;

    /**
     * @type {IGlobalIdentifierNamesCacheStorage}
     */
    private readonly globalIdentifierNamesCacheStorage: IGlobalIdentifierNamesCacheStorage;

    /**
     * @type {IPropertyIdentifierNamesCacheStorage}
     */
    private readonly propertyIdentifierNamesCacheStorage: IPropertyIdentifierNamesCacheStorage;

    /**
     * @type {IOptions}
     */
    private readonly options: IOptions;

    /**
     * @param {ICryptUtils} cryptUtils
     * @param {IGlobalIdentifierNamesCacheStorage} globalIdentifierNamesCacheStorage
     * @param {IPropertyIdentifierNamesCacheStorage} propertyIdentifierNamesCacheStorage
     * @param {IOptions} options
     */
    public constructor(
        @inject(ServiceIdentifiers.ICryptUtils) cryptUtils: ICryptUtils,
        @inject(ServiceIdentifiers.IGlobalIdentifierNamesCacheStorage)
        globalIdentifierNamesCacheStorage: IGlobalIdentifierNamesCacheStorage,
        @inject(ServiceIdentifiers.IPropertyIdentifierNamesCacheStorage)
        propertyIdentifierNamesCacheStorage: IPropertyIdentifierNamesCacheStorage,
        @inject(ServiceIdentifiers.IOptions) options: IOptions
    ) {
        this.cryptUtils = cryptUtils;
        this.globalIdentifierNamesCacheStorage = globalIdentifierNamesCacheStorage;
        this.propertyIdentifierNamesCacheStorage = propertyIdentifierNamesCacheStorage;
        this.options = options;
    }

    /**
     * @param {string} obfuscatedCode
     * @param {string} sourceMap
     */
    public initialize(obfuscatedCode: string, sourceMap: string): void {
        this.obfuscatedCode = obfuscatedCode;
        this.sourceMap = sourceMap;
    }

    /**
     * @returns {string}
     */
    public getIdentifierNamesCache(): TIdentifierNamesCache {
        if (!this.options.identifierNamesCache) {
            return null;
        }

        return {
            globalIdentifiers: this.globalIdentifierNamesCacheStorage.getStorageAsDictionary(),
            propertyIdentifiers: this.propertyIdentifierNamesCacheStorage.getStorageAsDictionary()
        };
    }

    /**
     * @returns {string}
     */
    public getObfuscatedCode(): string {
        return this.correctObfuscatedCode();
    }

    /**
     * @returns {IOptions}
     */
    public getOptions(): IOptions {
        throw new Error("STUB");
    }

    /**
     * @returns {string}
     */
    public getSourceMap(): string {
        return this.sourceMap;
    }

    /**
     * @returns {string}
     */
    public toString(): string {
        return this.obfuscatedCode;
    }

    /**
     * @returns {string}
     */
    private correctObfuscatedCode(): string {
        throw new Error("STUB");
    }
}
