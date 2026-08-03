import { InversifyContainerFacade } from '../../InversifyContainerFacade';
import { ContainerModule, ContainerModuleLoadOptions, Factory } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { ICodeTransformer } from '../../../interfaces/code-transformers/ICodeTransformer';
import { ITransformerNamesGroupsBuilder } from '../../../interfaces/utils/ITransformerNamesGroupsBuilder';

import { CodeTransformer } from '../../../enums/code-transformers/CodeTransformer';

import { CodeTransformerNamesGroupsBuilder } from '../../../code-transformers/CodeTransformerNamesGroupsBuilder';
import { HashbangOperatorTransformer } from '../../../code-transformers/preparing-transformers/HashbangOperatorTransformer';

export const codeTransformersModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
