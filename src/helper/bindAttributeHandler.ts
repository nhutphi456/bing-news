import { Component } from "../interfaces/component";
import { ViewHandler } from "../interfaces/viewHandler";
import { parseToHtmlElement } from "../utils/parsetoHtmlElement";

export class BindAttributeHandler extends ViewHandler {
  public handle(instance: InstanceType<Component>, view: string): string {
    const dataElements = parseToHtmlElement(view).querySelectorAll("[data]");

    dataElements.forEach((element) => {
      const dataAttrValue = element.getAttribute("data");
      const value = this.getNestedPropertyValue(instance, dataAttrValue);
      
      element.setAttribute("data", JSON.stringify(value));
    });

    return super.handle(instance, view);
  }
}
