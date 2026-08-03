import { InversifyContainerFacade } from '../../InversifyContainerFacade';
import { ContainerModule, ContainerModuleLoadOptions, Factory } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { ICalleeDataExtractor } from '../../../interfaces/analyzers/calls-graph-analyzer/ICalleeDataExtractor';
import { ICallsGraphAnalyzer } from '../../../interfaces/analyzers/calls-graph-analyzer/ICallsGraphAnalyzer';
import { INumberNumericalExpressionAnalyzer } from '../../../interfaces/analyzers/number-numerical-expression-analyzer/INumberNumericalExpressionAnalyzer';
import { IPrevailingKindOfVariablesAnalyzer } from '../../../interfaces/analyzers/calls-graph-analyzer/IPrevailingKindOfVariablesAnalyzer';
import { IScopeAnalyzer } from '../../../interfaces/analyzers/scope-analyzer/IScopeAnalyzer';
import { IStringArrayStorageAnalyzer } from '../../../interfaces/analyzers/string-array-storage-analyzer/IStringArrayStorageAnalyzer';

import { CalleeDataExtractor } from '../../../enums/analyzers/calls-graph-analyzer/CalleeDataExtractor';
import { CallsGraphAnalyzer } from '../../../analyzers/calls-graph-analyzer/CallsGraphAnalyzer';
import { FunctionDeclarationCalleeDataExtractor } from '../../../analyzers/calls-graph-analyzer/callee-data-extractors/FunctionDeclarationCalleeDataExtractor';
import { FunctionExpressionCalleeDataExtractor } from '../../../analyzers/calls-graph-analyzer/callee-data-extractors/FunctionExpressionCalleeDataExtractor';
import { NumberNumericalExpressionAnalyzer } from '../../../analyzers/number-numerical-expression-analyzer/NumberNumericalExpressionAnalyzer';
import { ObjectExpressionCalleeDataExtractor } from '../../../analyzers/calls-graph-analyzer/callee-data-extractors/ObjectExpressionCalleeDataExtractor';
import { PrevailingKindOfVariablesAnalyzer } from '../../../analyzers/prevailing-kind-of-variables-analyzer/PrevailingKindOfVariablesAnalyzer';
import { ScopeAnalyzer } from '../../../analyzers/scope-analyzer/ScopeAnalyzer';
import { StringArrayStorageAnalyzer } from '../../../analyzers/string-array-storage-analyzer/StringArrayStorageAnalyzer';

export const analyzersModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
