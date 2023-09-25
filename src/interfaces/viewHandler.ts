import { Component } from "./component";

export interface IViewHandler {
  setNext(handler: IViewHandler): IViewHandler;
  handle(instance: InstanceType<Component>, view: string): string;
  getNestedPropertyValue(instance: InstanceType<Component>, propertyPath: string);
}

export abstract class ViewHandler implements IViewHandler {
  private nextHandler: IViewHandler;
  public setNext(handler: IViewHandler): IViewHandler {
    this.nextHandler = handler;
    return handler;
  }
  public handle(instance: InstanceType<Component>, view: string): string {
    return this.nextHandler ? this.nextHandler.handle(instance, view) : null;
  }

  getNestedPropertyValue(instance: InstanceType<Component>, propertyPath: string) {
    const keys = propertyPath.split(".");

    return keys.reduce((current, key) => {
      return current !== null && typeof current === "object" && key in current
        ? current[key]
        : undefined;
    }, instance);
  }
}
