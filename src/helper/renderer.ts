import { from } from "rxjs";
import { bootstrap } from "../base/injector";
import { Declaration } from "../types/declaration";
import { parseToHtmlElement } from "../utils/parsetoHtmlElement";

export class Renderer {
  renderRoot(rootSelector: string, declaration: Declaration): string {
    const root = document.getElementById("root");

    root.innerHTML = `<${rootSelector}></${rootSelector}>`;
    this.traverse(root, declaration);

    return root.innerHTML;
  }

  private traverse(element: HTMLElement, declaration: Declaration): void {
    const elementObs = from([...element.children]);
    let elChildren: HTMLCollection;

    elementObs.subscribe(async (el: HTMLElement) => {
      if (el.tagName in declaration) {
        const { newEl, parent } = await this.buildView(declaration, el);

        this.replaceChildren(newEl, el);
        elChildren = parent.children;
      } else {
        elChildren = el.children;
      }

      from([...elChildren]).subscribe((e: HTMLElement) => {
        this.traverse(e, declaration);
      });
    });
  }

  private async buildView(
    declaration: Declaration,
    el: HTMLElement
  ): Promise<{ newEl: HTMLElement; parent: HTMLElement | null }> {
    const componentClass = declaration[el.tagName];
    const instance = bootstrap(componentClass);

    instance.data = JSON.parse(el.getAttribute("data") || "{}");
    instance.index = parseInt(el.getAttribute("ng-data-index") || "-1");

    const newEl = parseToHtmlElement(await instance.render());
    const parent = el.parentNode as HTMLElement | null;

    return { newEl, parent };
  }

  private replaceChildren(newElement: HTMLElement, element: HTMLElement): void {
    const parent = element.parentNode;

    if (!parent) return;
    let elementIdx = [...parent.children].indexOf(element);

    [...newElement.children].forEach((el: HTMLElement) => {
      parent.insertBefore(el, parent.children[elementIdx]);
      elementIdx++;
    });

    parent.removeChild(element);
  }
}
