import { InversifyContainerFacade } from '../../InversifyContainerFacade';
import { ContainerModule, ContainerModuleLoadOptions, Newable, Factory } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { ICustomNode } from '../../../interfaces/custom-nodes/ICustomNode';
import { IStringArrayIndexNode } from '../../../interfaces/custom-nodes/string-array-nodes/IStringArrayIndexNode';

import { ControlFlowCustomNode } from '../../../enums/custom-nodes/ControlFlowCustomNode';
import { DeadCodeInjectionCustomNode } from '../../../enums/custom-nodes/DeadCodeInjectionCustomNode';
import { ObjectExpressionKeysTransformerCustomNode } from '../../../enums/custom-nodes/ObjectExpressionKeysTransformerCustomNode';
import { StringArrayCustomNode } from '../../../enums/custom-nodes/StringArrayCustomNode';

import { BinaryExpressionFunctionNode } from '../../../custom-nodes/control-flow-flattening-nodes/BinaryExpressionFunctionNode';
import { BlockStatementControlFlowFlatteningNode } from '../../../custom-nodes/control-flow-flattening-nodes/BlockStatementControlFlowFlatteningNode';
import { BlockStatementDeadCodeInjectionNode } from '../../../custom-nodes/dead-code-injection-nodes/BlockStatementDeadCodeInjectionNode';
import { CallExpressionControlFlowStorageCallNode } from '../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/CallExpressionControlFlowStorageCallNode';
import { CallExpressionFunctionNode } from '../../../custom-nodes/control-flow-flattening-nodes/CallExpressionFunctionNode';
import { ControlFlowStorageNode } from '../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ControlFlowStorageNode';
import { ExpressionWithOperatorControlFlowStorageCallNode } from '../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/ExpressionWithOperatorControlFlowStorageCallNode';
import { LogicalExpressionFunctionNode } from '../../../custom-nodes/control-flow-flattening-nodes/LogicalExpressionFunctionNode';
import { ObjectExpressionVariableDeclarationHostNode } from '../../../custom-nodes/object-expression-keys-transformer-nodes/ObjectExpressionVariableDeclarationHostNode';
import { StringArrayCallNode } from '../../../custom-nodes/string-array-nodes/StringArrayCallNode';
import { StringArrayHexadecimalNumberIndexNode } from '../../../custom-nodes/string-array-nodes/string-array-index-nodes/StringArrayHexadecimalNumberIndexNode';
import { StringArrayHexadecimalNumericStringIndexNode } from '../../../custom-nodes/string-array-nodes/string-array-index-nodes/StringArrayHexadecimalNumericStringIndexNode';
import { StringArrayIndexNode } from '../../../enums/custom-nodes/string-array-index-nodes/StringArrayIndexNode';
import { StringArrayScopeCallsWrapperFunctionNode } from '../../../custom-nodes/string-array-nodes/StringArrayScopeCallsWrapperFunctionNode';
import { StringArrayScopeCallsWrapperVariableNode } from '../../../custom-nodes/string-array-nodes/StringArrayScopeCallsWrapperVariableNode';
import { StringLiteralControlFlowStorageCallNode } from '../../../custom-nodes/control-flow-flattening-nodes/control-flow-storage-nodes/StringLiteralControlFlowStorageCallNode';
import { LiteralNode } from '../../../custom-nodes/control-flow-flattening-nodes/LiteralNode';

export const customNodesModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
