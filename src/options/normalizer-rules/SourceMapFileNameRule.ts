import { TOptionsNormalizerRule } from '../../types/options/TOptionsNormalizerRule';

import { IOptions } from '../../interfaces/options/IOptions';

import { StringSeparator } from '../../enums/StringSeparator';

/**
 * @param {IOptions} options
 * @returns {IOptions}
 */
export const SourceMapFileNameRule: TOptionsNormalizerRule = (options: IOptions): IOptions => {
    throw new Error("STUB");
};
