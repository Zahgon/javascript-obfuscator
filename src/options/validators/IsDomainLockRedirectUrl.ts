import { IsUrl, ValidateIf } from 'class-validator';

import { TInputOptions } from '../../types/options/TInputOptions';

import { IOptions } from '../../interfaces/options/IOptions';

import { ObfuscationTarget } from '../../enums/ObfuscationTarget';

import { DEFAULT_PRESET } from '../presets/Default';

import { IsAllowedForObfuscationTargets } from './IsAllowedForObfuscationTargets';

/**
 * @returns {PropertyDecorator}
 */
export const IsDomainLockRedirectUrl = (): PropertyDecorator => {
    return (target: any, key: string | symbol): void => {
        throw new Error("STUB");
    };
};
