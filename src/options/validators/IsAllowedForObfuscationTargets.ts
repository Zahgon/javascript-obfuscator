import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import equal from 'fast-deep-equal';

import { TTypeFromEnum } from '../../types/utils/TTypeFromEnum';

import { IOptions } from '../../interfaces/options/IOptions';

import { ObfuscationTarget } from '../../enums/ObfuscationTarget';
import { StringSeparator } from '../../enums/StringSeparator';

import { DEFAULT_PRESET } from '../presets/Default';

/**
 * @param {TypeFromEnum<typeof ObfuscationTarget>[]} obfuscationTargets
 * @param {ValidationOptions} validationOptions
 * @returns {(options: IOptions, propertyName: keyof IOptions) => void}
 */
export function IsAllowedForObfuscationTargets(
    obfuscationTargets: TTypeFromEnum<typeof ObfuscationTarget>[],
    validationOptions?: ValidationOptions
): (options: IOptions, propertyName: keyof IOptions) => void {
    return (optionsObject: IOptions, propertyName: keyof IOptions): void => {
        throw new Error("STUB");
    };
}
