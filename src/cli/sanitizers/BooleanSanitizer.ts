import { TCLISanitizer } from '../../types/cli/TCLISanitizer';

/**
 * @param {string} value
 * @returns {boolean}
 */
export const BooleanSanitizer: TCLISanitizer<boolean> = (value: string): boolean => {
    throw new Error("STUB");
};
