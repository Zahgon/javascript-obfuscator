import { ContainerModule, ContainerModuleLoadOptions } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { IOptions } from '../../../interfaces/options/IOptions';
import { IOptionsNormalizer } from '../../../interfaces/options/IOptionsNormalizer';

import { Options } from '../../../options/Options';
import { OptionsNormalizer } from '../../../options/OptionsNormalizer';

export const optionsModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
