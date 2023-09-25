import { BaseComponent } from "../base/component";
import { AppModule } from "../controller/appModule";
import { ComponentMetadata } from "../decorator/component";

describe("test service", () => {
  const app = new AppModule();

  class TestService {
    getNews() {
      return "news 1";
    }
  }

  @ComponentMetadata({
    selector: "test-component",
    template: "<div>{{title}}</div>",
  })
  class TestComponent extends BaseComponent {
    title = "";
    constructor(private testService: TestService) {
      super();
      this.title = testService.getNews();
    }
  }
  it("should injector work", () => {
    app.setRootComponent(TestComponent)
    app.declareComponents(TestComponent)
    app.declareServices(TestService)
    
    const result = app.run()

    expect(result).toContain("<div>news 1</div>");
  });
});
