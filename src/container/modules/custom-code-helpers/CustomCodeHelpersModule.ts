import { InversifyContainerFacade } from '../../InversifyContainerFacade';
import { ContainerModule, ContainerModuleLoadOptions, Factory } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { ICustomCodeHelper } from '../../../interfaces/custom-code-helpers/ICustomCodeHelper';
import { ICustomCodeHelperFormatter } from '../../../interfaces/custom-code-helpers/ICustomCodeHelperFormatter';
import { ICustomCodeHelperGroup } from '../../../interfaces/custom-code-helpers/ICustomCodeHelperGroup';
import { ICustomCodeHelperObfuscator } from '../../../interfaces/custom-code-helpers/ICustomCodeHelperObfuscator';

import { CustomCodeHelper } from '../../../enums/custom-code-helpers/CustomCodeHelper';
import { CustomCodeHelperGroup } from '../../../enums/custom-code-helpers/CustomCodeHelperGroup';

import { ConsoleOutputCodeHelperGroup } from '../../../custom-code-helpers/console-output/group/ConsoleOutputCodeHelperGroup';
import { DebugProtectionCodeHelperGroup } from '../../../custom-code-helpers/debug-protection/group/DebugProtectionCodeHelperGroup';
import { DomainLockCustomCodeHelperGroup } from '../../../custom-code-helpers/domain-lock/group/DomainLockCustomCodeHelperGroup';
import { SelfDefendingCodeHelperGroup } from '../../../custom-code-helpers/self-defending/group/SelfDefendingCodeHelperGroup';
import { StringArrayCodeHelperGroup } from '../../../custom-code-helpers/string-array/group/StringArrayCodeHelperGroup';

import { ConsoleOutputDisableCodeHelper } from '../../../custom-code-helpers/console-output/ConsoleOutputDisableCodeHelper';
import { CustomCodeHelperFormatter } from '../../../custom-code-helpers/CustomCodeHelperFormatter';
import { CustomCodeHelperObfuscator } from '../../../custom-code-helpers/CustomCodeHelperObfuscator';
import { DebugProtectionFunctionCallCodeHelper } from '../../../custom-code-helpers/debug-protection/DebugProtectionFunctionCallCodeHelper';
import { DebugProtectionFunctionIntervalCodeHelper } from '../../../custom-code-helpers/debug-protection/DebugProtectionFunctionIntervalCodeHelper';
import { DebugProtectionFunctionCodeHelper } from '../../../custom-code-helpers/debug-protection/DebugProtectionFunctionCodeHelper';
import { DomainLockCodeHelper } from '../../../custom-code-helpers/domain-lock/DomainLockCodeHelper';
import { CallsControllerFunctionCodeHelper } from '../../../custom-code-helpers/calls-controller/CallsControllerFunctionCodeHelper';
import { SelfDefendingCodeHelper } from '../../../custom-code-helpers/self-defending/SelfDefendingCodeHelper';
import { StringArrayCallsWrapperCodeHelper } from '../../../custom-code-helpers/string-array/StringArrayCallsWrapperCodeHelper';
import { StringArrayCallsWrapperBase64CodeHelper } from '../../../custom-code-helpers/string-array/StringArrayCallsWrapperBase64CodeHelper';
import { StringArrayCallsWrapperRc4CodeHelper } from '../../../custom-code-helpers/string-array/StringArrayCallsWrapperRc4CodeHelper';
import { StringArrayCodeHelper } from '../../../custom-code-helpers/string-array/StringArrayCodeHelper';
import { StringArrayRotateFunctionCodeHelper } from '../../../custom-code-helpers/string-array/StringArrayRotateFunctionCodeHelper';

export const customCodeHelpersModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
    throw new Error("STUB");
});
