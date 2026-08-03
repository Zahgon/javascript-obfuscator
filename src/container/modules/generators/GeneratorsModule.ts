import { ContainerModule, ContainerModuleLoadOptions, ResolutionContext, Factory } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { IIdentifierNamesGenerator } from '../../../interfaces/generators/identifier-names-generators/IIdentifierNamesGenerator';
import { IOptions } from '../../../interfaces/options/IOptions';

import { IdentifierNamesGenerator } from '../../../enums/generators/identifier-names-generators/IdentifierNamesGenerator';

import { DictionaryIdentifierNamesGenerator } from '../../../generators/identifier-names-generators/DictionaryIdentifierNamesGenerator';
import { HexadecimalIdentifierNamesGenerator } from '../../../generators/identifier-names-generators/HexadecimalIdentifierNamesGenerator';
import { MangledIdentifierNamesGenerator } from '../../../generators/identifier-names-generators/MangledIdentifierNamesGenerator';
import { MangledShuffledIdentifierNamesGenerator } from '../../../generators/identifier-names-generators/MangledShuffledIdentifierNamesGenerator';

export const generatorsModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
