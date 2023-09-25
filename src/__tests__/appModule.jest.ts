import { BaseComponent } from "../base/component";
import { AppModule } from "../controller/appModule";
import { ComponentMetadata } from "../decorator/component";

describe("Test declarations", () => {
  @ComponentMetadata({
    selector: "news",
    template: "<div>news 1</div>",
  })
  class NewsComponent {}
  it("should component be declared", () => {
    const appModule = new AppModule();
    appModule.declareComponents(NewsComponent);

    expect(appModule.getDeclaration()["NEWS"]).toBeTruthy();
  });
});

describe("Test render app component", () => {
  let app: AppModule;

  @ComponentMetadata({
    selector: "app-root",
    template: `
      <div><p>Welcome to my app!</p></div>
      <div>hello</div>
    `,
  })
  class AppComponent extends BaseComponent {}

  it("should app module render app component", () => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent);

    const result = app.run();

    expect(result).toContain("<div><p>Welcome to my app!</p></div>");
    expect(result).toContain("<div>hello</div>");
  });
});

describe("Test render multiple components", () => {
  let app: AppModule;

  @ComponentMetadata({
    selector: "app-root",
    template: `
      <div>
          Welcome to my app!
          <news></news>
          <news></news>
      </div>
      <div>Hello from another div</div>
    `,
  })
  class AppComponent extends BaseComponent {}
  @ComponentMetadata({
    selector: "news",
    template: `
      <div>
        <p>title: {{title}}</p>
        <channel></channel>
      </div>
    `,
  })
  class NewsComponent extends BaseComponent {
    title = "News 1";
  }

  @ComponentMetadata({
    selector: "channel",
    template: "<span>{{name}}</span>",
  })
  class ChannelComponent extends BaseComponent {
    name = "VTC";
  }

  beforeAll(() => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent, NewsComponent, ChannelComponent);
  });

  it("should app module render multiple components", () => {
    const result = app.run();

    expect(result).toContain(`<p>title: News 1</p>`);
    expect(result).toContain(`<span>VTC</span>`);
  });
});

describe("Test pass data", () => {
  let app: AppModule;
  @ComponentMetadata({
    selector: "parent-component",
    template: `
      <div>
        <child-component data="currentMessage"></child-component>
      </div>
    `,
  })
  class ParentComponent extends BaseComponent {
    currentMessage = "Hello";
  }

  @ComponentMetadata({
    selector: "child-component",
    template: "<p>{{data}}</p>",
  })
  class ChildComponent extends BaseComponent {
    data: string;
  }

  beforeAll(() => {
    app = new AppModule();
    app.setRootComponent(ParentComponent);
    app.declareComponents(ParentComponent, ChildComponent);
  });

  it("should pass data from parent to child component", () => {
    const result = app.run();

    expect(result).toContain(`<p>Hello</p>`);
  });
});

describe("Test pass object data", () => {
  let app: AppModule;

  @ComponentMetadata({
    selector: "app-root",
    template:  `
      <div>
        Welcome to my app!
        <parent-component></parent-component>
      </div>
    `
  })
  class AppComponent extends BaseComponent {}

  @ComponentMetadata({
    selector: "parent-component",
    template: `
      <div>
        <child-component data="item"></child-component>
      </div>
    `,
  })
  class ParentComponent extends BaseComponent {
    item = { title: "Hello", like: 20 };
  }

  @ComponentMetadata({
    selector: "child-component",
    template: `
      <div>
        <p>Title: {{data.title}}</p>
        <p>Like: {{data.like}}</p>
      </div>
    `,
  })
  class ChildComponent extends BaseComponent {
    data;
  }

  beforeAll(() => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent, ParentComponent, ChildComponent);
  });

  it("should pass data from parent to child component", () => {
    const result = app.run();

    expect(result).toContain(`<p>Title: Hello</p>`);
    expect(result).toContain(`<p>Like: 20</p>`);
  });
});
