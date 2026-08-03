import { InversifyContainerFacade } from '../../InversifyContainerFacade';
import { ContainerModule, ContainerModuleLoadOptions, Factory } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { IControlFlowReplacer } from '../../../interfaces/node-transformers/control-flow-transformers/IControlFlowReplacer';
import { INodeTransformer } from '../../../interfaces/node-transformers/INodeTransformer';

import { ControlFlowReplacer } from '../../../enums/node-transformers/control-flow-transformers/control-flow-replacers/ControlFlowReplacer';
import { NodeTransformer } from '../../../enums/node-transformers/NodeTransformer';

import { BinaryExpressionControlFlowReplacer } from '../../../node-transformers/control-flow-transformers/control-flow-replacers/BinaryExpressionControlFlowReplacer';
import { BlockStatementControlFlowTransformer } from '../../../node-transformers/control-flow-transformers/BlockStatementControlFlowTransformer';
import { CallExpressionControlFlowReplacer } from '../../../node-transformers/control-flow-transformers/control-flow-replacers/CallExpressionControlFlowReplacer';
import { FunctionControlFlowTransformer } from '../../../node-transformers/control-flow-transformers/FunctionControlFlowTransformer';
import { LogicalExpressionControlFlowReplacer } from '../../../node-transformers/control-flow-transformers/control-flow-replacers/LogicalExpressionControlFlowReplacer';
import { StringArrayCallControlFlowReplacer } from '../../../node-transformers/control-flow-transformers/control-flow-replacers/StringArrayCallControlFlowReplacer';
import { StringArrayControlFlowTransformer } from '../../../node-transformers/control-flow-transformers/StringArrayControlFlowTransformer';
import { StringLiteralControlFlowReplacer } from '../../../node-transformers/control-flow-transformers/control-flow-replacers/StringLiteralControlFlowReplacer';

export const controlFlowTransformersModule: ContainerModule = new ContainerModule(
    (options: ContainerModuleLoadOptions) => {
        throw new Error("STUB");
    }
);
