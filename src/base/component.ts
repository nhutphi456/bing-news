import { COMPONENT_META_DATA } from "../constant";
import { AppState } from "../controller/appState";
import { IComponentMetadata } from "../decorator/component";
import { BindAttributeHandler } from "../helper/bindAttributeHandler";
import { InterpolationHandler } from "../helper/interpolationHandler";
import { NgForHandler } from "../helper/ngForHandler";
import { NgIfHandler } from "../helper/ngIfHandler";
import { IViewHandler } from "../interfaces/viewHandler";
import { loadTemplate } from "../utils/fetchTemplate";

export abstract class BaseComponent {
  private viewHandler: IViewHandler;
  appState = AppState.getInstance();

  constructor() {
    const interpolationHandler = new InterpolationHandler();
    const bindAttributeHandler = new BindAttributeHandler();
    const ngForHandler = new NgForHandler();
    const ngIfHandler = new NgIfHandler();

    interpolationHandler
      .setNext(ngForHandler)
      .setNext(bindAttributeHandler)
      .setNext(ngIfHandler);
      
    this.viewHandler = interpolationHandler;
  }

  getMetadata(): IComponentMetadata | undefined {
    return Reflect.getMetadata(COMPONENT_META_DATA, this.constructor);
  }

  async render(): Promise<string> {
    const url = this.getMetadata().templateUrl;
    const view = await loadTemplate(url);

    return this.viewHandler.handle(this, view);
  }
}
