import { ContainerModule, ContainerModuleLoadOptions, Factory } from 'inversify';
import { InversifyContainerFacade } from '../../InversifyContainerFacade';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { INodeTransformer } from '../../../interfaces/node-transformers/INodeTransformer';
import { IObjectExpressionExtractor } from '../../../interfaces/node-transformers/converting-transformers/object-expression-extractors/IObjectExpressionExtractor';

import { NodeTransformer } from '../../../enums/node-transformers/NodeTransformer';
import { ObjectExpressionExtractor } from '../../../enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor';

import { BasePropertiesExtractor } from '../../../node-transformers/converting-transformers/object-expression-extractors/BasePropertiesExtractor';
import { BooleanLiteralTransformer } from '../../../node-transformers/converting-transformers/BooleanLiteralTransformer';
import { ExportSpecifierTransformer } from '../../../node-transformers/converting-transformers/ExportSpecifierTransformer';
import { MemberExpressionTransformer } from '../../../node-transformers/converting-transformers/MemberExpressionTransformer';
import { ClassFieldTransformer } from '../../../node-transformers/converting-transformers/ClassFieldTransformer';
import { NumberLiteralTransformer } from '../../../node-transformers/converting-transformers/NumberLiteralTransformer';
import { NumberToNumericalExpressionTransformer } from '../../../node-transformers/converting-transformers/NumberToNumericalExpressionTransformer';
import { ObjectExpressionKeysTransformer } from '../../../node-transformers/converting-transformers/ObjectExpressionKeysTransformer';
import { ObjectExpressionToVariableDeclarationExtractor } from '../../../node-transformers/converting-transformers/object-expression-extractors/ObjectExpressionToVariableDeclarationExtractor';
import { ObjectExpressionTransformer } from '../../../node-transformers/converting-transformers/ObjectExpressionTransformer';
import { ObjectPatternPropertiesTransformer } from '../../../node-transformers/converting-transformers/ObjectPatternPropertiesTransformer';
import { SplitStringTransformer } from '../../../node-transformers/converting-transformers/SplitStringTransformer';
import { TemplateLiteralTransformer } from '../../../node-transformers/converting-transformers/TemplateLiteralTransformer';

export const convertingTransformersModule: ContainerModule = new ContainerModule(
    (options: ContainerModuleLoadOptions) => {
        throw new Error("STUB");
    }
);
