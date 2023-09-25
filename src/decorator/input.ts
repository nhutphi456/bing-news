export function Input(): PropertyDecorator {
  return function (target: string, key: string) {
    const internalKey = `__${key}`;

    // Getter function to access the decorated property
    const getter = function () {
      return this[internalKey];
    };

    // Setter function to update the decorated property
    const setter = function (newValue: string) {
      this[internalKey] = newValue;
    };

    // Define the property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
