import { Utils } from './Utils';

export class NumberUtils {
    /**
     * @param {number} number
     * @returns {string}
     */
    public static toHex(number: number | bigint): string {
        const radix: number = 16;

        const basePart: string = typeof number === 'number' ? number.toString(radix) : `${number.toString(radix)}n`;

        return `${Utils.hexadecimalPrefix}${basePart}`;
    }

    /**
     * @param {number} number
     * @returns {[number, (number | null)]}
     */
    public static extractIntegerAndDecimalParts(number: number): [number, number | null] {
        throw new Error("STUB");
    }

    /**
     * @param {number} number
     * @returns {boolean}
     */
    public static isCeil(number: number | bigint): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {number} number
     * @returns {boolean}
     */
    public static isPositive(number: number): boolean {
        throw new Error("STUB");
    }

    /**
     * @param {number} number
     * @returns {boolean}
     */
    public static isUnsafeNumber(number: number): boolean {
        throw new Error("STUB");
    }

    /**
     * Returns all factors of a number
     * Based on https://stackoverflow.com/a/43204663
     *
     * @param {number} number
     * @returns {number[]}
     */
    public static getFactors(number: number): number[] {
        throw new Error("STUB");
    }
}
