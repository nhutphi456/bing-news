import { BaseComponent } from "../base/component";
import { AppState } from "../controller/appState";
import { ComponentMetadata } from "../decorator/component";

describe("App State", () => {
  let appState: AppState;

  class TestService {
    getTitle() {
      return new Promise<string>((resolve) => {
        setTimeout(() => resolve("Test 2"), 1000);
      });
    }
  }

  @ComponentMetadata({
    selector: "test",
    template: `
        <div>
            Title: {{title}}
        </div>
    `,
  })
  class TestComponent extends BaseComponent {
    title = appState.addState(this.loadTitle(), "title") || "Test 1";

    constructor(private testService: TestService) {
      super();
      this.loadTitle();
    }

    async loadTitle() {
      return await this.testService.getTitle();
    }
  }

  beforeAll(() => {
    appState = AppState.getInstance();
  });

  it("should testComponent state be added to app state", async () => {
    new TestComponent(new TestService());

    appState.getState().subscribe((state) => {
      expect(state["title"]).toBe("Test 2");
    });
  });
});
