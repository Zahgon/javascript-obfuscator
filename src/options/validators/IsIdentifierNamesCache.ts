import equal from 'fast-deep-equal';
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

import { TIdentifierNamesCache } from '../../types/TIdentifierNamesCache';
import { TIdentifierNamesCacheDictionary } from '../../types/TIdentifierNamesCacheDictionary';

import { IOptions } from '../../interfaces/options/IOptions';

import { DEFAULT_PRESET } from '../presets/Default';

/**
 * @param value
 * @returns {boolean}
 */
const validateDictionary = (value: unknown | TIdentifierNamesCacheDictionary): boolean => {
    if (value === undefined) {
        return true;
    }

    if (typeof value !== 'object' || value === null) {
        return false;
    }

    const objectValues: unknown[] = Object.values(value);

    if (!objectValues.length) {
        return true;
    }

    for (const objectValue of objectValues) {
        if (typeof objectValue !== 'string') {
            return false;
        }
    }

    return true;
};

/**
 * @param {ValidationOptions} validationOptions
 * @returns {(options: IOptions, propertyName: keyof IOptions) => void}
 */
export function IsIdentifierNamesCache(
    validationOptions?: ValidationOptions
): (options: IOptions, propertyName: keyof IOptions) => void {
    return (optionsObject: IOptions, propertyName: keyof IOptions): void => {
        throw new Error("STUB");
    };
}
