import { TOptionsNormalizerRule } from '../../types/options/TOptionsNormalizerRule';

import { IOptions } from '../../interfaces/options/IOptions';

import { DEFAULT_PRESET } from '../presets/Default';

/**
 * @param {IOptions} options
 * @returns {IOptions}
 */
export const DeadCodeInjectionRule: TOptionsNormalizerRule = (options: IOptions): IOptions => {
    throw new Error("STUB");
};
