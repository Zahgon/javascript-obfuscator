import * as ESTree from 'estree';

import { TNumericalExpressionDataToNodeConverterLiteralNodeGetter } from '../types/node/TNumericalExpressionDataToNodeConverterLiteralNodeGetter';
import { TNumberNumericalExpressionData } from '../types/analyzers/number-numerical-expression-analyzer/TNumberNumericalExpressionData';

import { NodeFactory } from './NodeFactory';
import { NumberUtils } from '../utils/NumberUtils';

/**
 * Converts NumberNumericalExpressionData to node
 */
export class NumericalExpressionDataToNodeConverter {
    /**
     * @param {TNumberNumericalExpressionData} numberNumericalExpressionData
     * @param {TNumericalExpressionDataToNodeConverterLiteralNodeGetter} literalNodeGetter
     * @returns {Expression}
     */
    public static convertIntegerNumberData(
        numberNumericalExpressionData: TNumberNumericalExpressionData,
        literalNodeGetter: TNumericalExpressionDataToNodeConverterLiteralNodeGetter
    ): ESTree.Expression {
        throw new Error("STUB");
    }

    /**
     * @param {TNumberNumericalExpressionData} integerNumberNumericalExpressionData
     * @param {number} decimalPart
     * @param {TNumericalExpressionDataToNodeConverterLiteralNodeGetter} literalNodeGetter
     * @returns {Expression}
     */
    public static convertFloatNumberData(
        integerNumberNumericalExpressionData: TNumberNumericalExpressionData,
        decimalPart: number,
        literalNodeGetter: TNumericalExpressionDataToNodeConverterLiteralNodeGetter
    ): ESTree.Expression {
        throw new Error("STUB");
    }

    /**
     * @param {TNumberNumericalExpressionData} numberNumericalExpressionData
     * @param {TNumericalExpressionDataToNodeConverterLiteralNodeGetter} literalNodeGetter
     * @param {BinaryOperator} operator
     * @returns {Expression}
     */
    private static convertNumericalExpressionDataToNode(
        numberNumericalExpressionData: TNumberNumericalExpressionData,
        literalNodeGetter: TNumericalExpressionDataToNodeConverterLiteralNodeGetter,
        operator: ESTree.BinaryOperator = '+'
    ): ESTree.Expression {
        throw new Error("STUB");
    }

    /**
     * @param {BinaryOperator} operator
     * @param {TNumberNumericalExpressionData} leftParts
     * @param {TNumberNumericalExpressionData} rightParts
     * @param {TNumericalExpressionDataToNodeConverterLiteralNodeGetter} literalNodeGetter
     * @returns {BinaryExpression}
     */
    private static convertPartsToBinaryExpression(
        operator: ESTree.BinaryOperator,
        leftParts: TNumberNumericalExpressionData,
        rightParts: TNumberNumericalExpressionData,
        literalNodeGetter: TNumericalExpressionDataToNodeConverterLiteralNodeGetter
    ): ESTree.BinaryExpression {
        throw new Error("STUB");
    }

    /**
     * @param {number | number[]} partOrNumber
     * @param {TNumericalExpressionDataToNodeConverterLiteralNodeGetter} literalNodeGetter
     * @returns {Expression}
     */
    private static convertPartOrNumberToLiteralNode(
        partOrNumber: number | number[],
        literalNodeGetter: TNumericalExpressionDataToNodeConverterLiteralNodeGetter
    ): ESTree.Expression {
        throw new Error("STUB");
    }
}
