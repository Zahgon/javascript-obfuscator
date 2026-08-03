import { ContainerModule, ContainerModuleLoadOptions } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { IRenamePropertiesReplacer } from '../../../interfaces/node-transformers/rename-properties-transformers/replacer/IRenamePropertiesReplacer';
import { INodeTransformer } from '../../../interfaces/node-transformers/INodeTransformer';

import { NodeTransformer } from '../../../enums/node-transformers/NodeTransformer';

import { RenamePropertiesReplacer } from '../../../node-transformers/rename-properties-transformers/replacer/RenamePropertiesReplacer';
import { RenamePropertiesTransformer } from '../../../node-transformers/rename-properties-transformers/RenamePropertiesTransformer';

export const renamePropertiesTransformersModule: ContainerModule = new ContainerModule(
    (options: ContainerModuleLoadOptions) => {
        throw new Error("STUB");
    }
);
