import { Component } from "../interfaces/component";
import { ViewHandler } from "../interfaces/viewHandler";

export class InterpolationHandler extends ViewHandler {

  public handle(instance: InstanceType<Component>, view: string): string {
    // view = view.replace(/{{(.*?)}}/g, (match, key) => {
    //   const keys = key.split(".");
    //   let value = instance;

    //   for (const k of keys) {
    //     value = value[k];
    //     if (value === undefined) return match; // Return the placeholder if the value is undefined
    //   }
    //   return value;
    // });

    view = view.replace(/{{(.*?)}}/g, (match, key) => {
      return eval(`instance.${key}`);
    });

    return super.handle(instance, view);
  }
}
