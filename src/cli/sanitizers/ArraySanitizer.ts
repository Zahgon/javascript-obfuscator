import { TCLISanitizer } from '../../types/cli/TCLISanitizer';

/**
 * @param {string} value
 * @returns {string[]}
 */
export const ArraySanitizer: TCLISanitizer<string[]> = (value: string): string[] => {
    throw new Error("STUB");
};
