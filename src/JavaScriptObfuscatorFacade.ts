import 'reflect-metadata';

import { ServiceIdentifiers } from './container/ServiceIdentifiers';

import { TDictionary } from './types/TDictionary';
import { TInputOptions } from './types/options/TInputOptions';
import { TObfuscationResultsObject } from './types/TObfuscationResultsObject';
import { TOptionsPreset } from './types/options/TOptionsPreset';

import { IInversifyContainerFacade } from './interfaces/container/IInversifyContainerFacade';
import { IJavaScriptObfuscator } from './interfaces/IJavaScriptObfsucator';
import { IObfuscationResult } from './interfaces/source-code/IObfuscationResult';
import { IProApiConfig, IProObfuscationResult, TProApiProgressCallback } from './interfaces/pro-api/IProApiClient';

import { InversifyContainerFacade } from './container/InversifyContainerFacade';
import { Options } from './options/Options';
import { Utils } from './utils/Utils';

class JavaScriptObfuscatorFacade {
    /**
     * @type {string | undefined}
     */
    public static version: string = process.env.VERSION ?? 'unknown';

    /**
     * @param {string} sourceCode
     * @param {TInputOptions} inputOptions
     * @returns {IObfuscationResult}
     */
    public static obfuscate(sourceCode: string, inputOptions: TInputOptions = {}): IObfuscationResult {
        const inversifyContainerFacade: IInversifyContainerFacade = new InversifyContainerFacade();

        inversifyContainerFacade.load(sourceCode, '', inputOptions);

        const javaScriptObfuscator: IJavaScriptObfuscator = inversifyContainerFacade.get<IJavaScriptObfuscator>(
            ServiceIdentifiers.IJavaScriptObfuscator
        );
        const obfuscationResult: IObfuscationResult = javaScriptObfuscator.obfuscate(sourceCode);

        inversifyContainerFacade.unload();

        return obfuscationResult;
    }

    /**
     * @param {TSourceCodesObject} sourceCodesObject
     * @param {TInputOptions} inputOptions
     * @returns {TObfuscationResultsObject<TSourceCodesObject>}
     */
    public static obfuscateMultiple<TSourceCodesObject extends TDictionary<string>>(
        sourceCodesObject: TSourceCodesObject,
        inputOptions: TInputOptions = {}
    ): TObfuscationResultsObject<TSourceCodesObject> {
        throw new Error("STUB");
    }

    /**
     * @param {TOptionsPreset} optionsPreset
     * @returns {TInputOptions}
     */
    public static getOptionsByPreset(optionsPreset: TOptionsPreset): TInputOptions {
        return Options.getOptionsByPreset(optionsPreset);
    }

    /**
     * Obfuscate code using the Pro API (obfuscator.io)
     * This method requires a valid API token from obfuscator.io and only works with VM obfuscation.
     * Only available in Node.js environment.
     *
     * @param {string} sourceCode - Source code to obfuscate
     * @param {TInputOptions} inputOptions - Obfuscation options (must include vmObfuscation: true)
     * @param {IProApiConfig} proApiConfig - Pro API configuration including API token
     * @param {TProApiProgressCallback} onProgress - Optional callback for progress updates (streaming mode only)
     * @returns {Promise<IProObfuscationResult>} - Promise resolving to obfuscation result
     * @throws {ApiError} - If API returns an error or vmObfuscation is not enabled
     */
    public static async obfuscatePro(
        sourceCode: string,
        inputOptions: TInputOptions,
        proApiConfig: IProApiConfig,
        onProgress?: TProApiProgressCallback
    ): Promise<IProObfuscationResult> {
        throw new Error("STUB");
    }
}

export { JavaScriptObfuscatorFacade as JavaScriptObfuscator };
export { ApiError } from './pro-api/ApiError';
export type { IProApiConfig, IProObfuscationResult, TProApiProgressCallback } from './interfaces/pro-api/IProApiClient';
