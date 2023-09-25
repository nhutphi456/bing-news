import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";
import { NgIfHandler } from "../helper/ngIfHandler";

describe("Test NgIf", () => {
  @ComponentMetadata({
    selector: "test-component",
    template: `
            <div *ngIf="student.status.isAbsent">Title: hello</div>
            <div>Student name: Raido</div>
        `,
  })
  class TestComponent extends BaseComponent {
    student = {
      name: "Raido",
      status: {
        isAbsent: false,
      },
    };
    isVisible = true;
  }
  it("should work", () => {
    const ngIfHandler = new NgIfHandler();
    const testComponent = new TestComponent();
    const view = testComponent.getMetadata().template;

    const result = ngIfHandler.handle(testComponent, view);

    expect(result).toContain("<div>Student name: Raido</div>");
    expect(result).not.toContain("<div *ngIf=\"student.status.isAbsent\">Title: hello</div>");
  });
});
