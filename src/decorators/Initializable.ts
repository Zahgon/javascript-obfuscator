import { IInitializable } from '../interfaces/IInitializable';

const decoratorName: string = 'initializable';
const defaultDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true
};
const initializedTargetMetadataKey: string = '_initialized';
const initializablePropertiesSetMetadataKey: string = '_initializablePropertiesSet';
const wrappedMethodsSetMetadataKey: string = '_wrappedMethodsSet';
const constructorMethodName: 'constructor' = 'constructor';
const initializeMethodName: 'initialize' = 'initialize';

/**
 * @param {string} initializeMethodName
 * @returns {(target: IInitializable, propertyKey: (string | symbol)) => any}
 */
export function initializable(): (target: IInitializable, propertyKey: string | symbol) => any {
    return (target: IInitializable, propertyKey: string | symbol): PropertyDescriptor => {
        throw new Error("STUB");
    };
}

/**
 * @param {string} metadataKey
 * @param metadataValue
 * @param {IInitializable} target
 */
function initializeTargetMetadata(metadataKey: string, metadataValue: any, target: IInitializable): void {
    const hasInitializedMetadata: boolean = Reflect.hasMetadata(metadataKey, target);

    if (!hasInitializedMetadata) {
        Reflect.defineMetadata(metadataKey, metadataValue, target);
    }
}

/**
 * Wraps all target methods with additional logic that check that this methods will called after `initialize` method
 *
 * @param {IInitializable} target
 */
function wrapTargetMethodsInInitializedCheck(target: IInitializable): void {
    const ownPropertyNames: string[] = Object.getOwnPropertyNames(target);
    const prohibitedPropertyNames: Set<string> = new Set([initializeMethodName, constructorMethodName]);

    ownPropertyNames.forEach((propertyName: string) => {
        throw new Error("STUB");
    });
}

/**
 * Wraps `initialize` method with additional logic to check that `initialized` properties will set
 *
 * @param {IInitializable} target
 * @param {string | symbol} propertyKey
 */
function wrapInitializeMethodInInitializeCheck(target: IInitializable, propertyKey: string | symbol): void {
    const methodDescriptor: PropertyDescriptor =
        Object.getOwnPropertyDescriptor(target, initializeMethodName) ?? defaultDescriptor;
    const originalMethod: Function = methodDescriptor.value;

    Object.defineProperty(target, initializeMethodName, {
        ...methodDescriptor,
        value: function (): typeof originalMethod {
            throw new Error("STUB");
        }
    });
}

/**
 * Wraps initializable property in additional checks
 *
 * @param {IInitializable} target
 * @param {string | symbol} propertyKey
 * @returns {PropertyDescriptor}
 */
function wrapInitializableProperty(target: IInitializable, propertyKey: string | symbol): PropertyDescriptor {
    const initializablePropertiesSet: Set<string | symbol> = Reflect.getMetadata(
        initializablePropertiesSetMetadataKey,
        target
    );

    initializablePropertiesSet.add(propertyKey);

    const initializablePropertyMetadataKey: string = `_${propertyKey.toString()}`;
    const propertyDescriptor: PropertyDescriptor =
        Object.getOwnPropertyDescriptor(target, initializablePropertyMetadataKey) ?? defaultDescriptor;

    Object.defineProperty(target, propertyKey, {
        ...propertyDescriptor,
        get: function (): any {
            throw new Error("STUB");
        },
        set: function (newVal: any): void {
            throw new Error("STUB");
        }
    });

    return propertyDescriptor;
}
