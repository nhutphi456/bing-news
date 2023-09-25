import { COMPONENT_META_DATA } from "../constant";
import { ReflectHelper } from "../helper/reflectHelper";
import { Renderer } from "../helper/renderer";
import { Component } from "../interfaces/component";
import { Service } from "../interfaces/service";
import { Declaration } from "../types/declaration";

export class AppModule {
  private declaration: Declaration;
  private rootComponent: Component;
  private renderer: Renderer;
  private reflectHelper: ReflectHelper;
  private providers: Service[];

  constructor() {
    this.providers = [];
    this.declaration = {};
    this.renderer = new Renderer();
    this.reflectHelper = new ReflectHelper();
  }

  getDeclaration(): Declaration {
    return this.declaration;
  }

  getProviders(): Service[] {
    return this.providers;
  }

  declareServices(...services: Service[]): void {
    this.providers = [...new Set([...this.providers, ...services])];

    for (const key in this.declaration) {
      const target = this.reflectHelper.getComponentMetadata(this.declaration[key]);
      let serviceList = target.provider || [];

      serviceList = [...new Set([...serviceList, ...this.providers])];
      Reflect.defineMetadata(
        COMPONENT_META_DATA,
        {
          ...target,
          provider: serviceList,
        },
        this.declaration[key]
      );
    }
  }

  declareComponents(...components: Component[]): void {
    components.forEach((component) => {
      const selector = this.reflectHelper.getComponentMetadata(component).selector.toUpperCase();
      this.declaration[selector] = component;
    });
  }

  setRootComponent(component: Component): void {
    this.rootComponent = component;
  }

  run(): string {
    const rootSelector = this.reflectHelper.getComponentMetadata(this.rootComponent).selector;
    const app = this.renderer.renderRoot(rootSelector, this.declaration);
    
    console.log("done render");
    return app;
  }
}
