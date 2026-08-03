import { ContainerModule, ContainerModuleLoadOptions } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { IScopeIdentifiersTraverser } from '../../../interfaces/node/IScopeIdentifiersTraverser';

import { ScopeIdentifiersTraverser } from '../../../node/ScopeIdentifiersTraverser';

export const nodeModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
