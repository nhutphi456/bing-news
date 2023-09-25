import { ComponentMetadata } from "../decorator/component";

describe("Test decorator", () => {
  it("should decorator works", () => {
    @ComponentMetadata({
      selector: "test",
      template: "<div>hello</div>",
    })
    class TestComponent {}

    const selector = Reflect.getMetadata("componentMetadata", TestComponent).selector;
    const template = Reflect.getMetadata("componentMetadata", TestComponent).template;

    expect(selector).toBe("test");
    expect(template).toBe("<div>hello</div>");
  });
});