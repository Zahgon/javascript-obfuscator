import { injectable, inject } from 'inversify';

import { TNumberNumericalExpressionData } from '../../types/analyzers/number-numerical-expression-analyzer/TNumberNumericalExpressionData';

import { INumberNumericalExpressionAnalyzer } from '../../interfaces/analyzers/number-numerical-expression-analyzer/INumberNumericalExpressionAnalyzer';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';

import { ServiceIdentifiers } from '../../container/ServiceIdentifiers';

import { NumberUtils } from '../../utils/NumberUtils';

/**
 * Based on https://gist.github.com/da411d/0e59f79dcf4603cdabf0024a10eeb6fe
 */
@injectable()
export class NumberNumericalExpressionAnalyzer implements INumberNumericalExpressionAnalyzer {
    /**
     * @type {number}
     */
    public static readonly defaultAdditionalPartsCount: number = 3;

    /**
     * @type {number}
     */
    private static readonly delta: number = 10000;

    /**
     * @type {Map<number, number[]>}
     */
    private readonly numberFactorsMap: Map<number, number[]> = new Map();

    /**
     * @type {IRandomGenerator}
     */
    private readonly randomGenerator: IRandomGenerator;

    /**
     * @param {IRandomGenerator} randomGenerator
     */
    public constructor(@inject(ServiceIdentifiers.IRandomGenerator) randomGenerator: IRandomGenerator) {
        this.randomGenerator = randomGenerator;
    }

    /**
     * @param {number} number
     * @param {number} additionalPartsCount
     * @returns {TNumberNumericalExpressionData}
     */
    public analyze(number: number, additionalPartsCount: number): TNumberNumericalExpressionData {
        throw new Error("STUB");
    }

    /**
     * @param {number} number
     * @param {number} additionalPartsCount
     * @returns {number[]}
     */
    private generateAdditionParts(number: number, additionalPartsCount: number): number[] {
        throw new Error("STUB");
    }

    /**
     * @param {number} number
     * @returns {number | number[]}
     */
    private mixWithMultiplyParts(number: number): number | number[] {
        throw new Error("STUB");
    }
}
