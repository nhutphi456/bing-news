import { Component } from "../interfaces/component";
import { ViewHandler } from "../interfaces/viewHandler";

export class InterpolationHandler extends ViewHandler {
  public handle(instance: InstanceType<Component>, view: string): string {
    view = view.replace(/{{([^{}]+)}}/g, (match, key) => {
      const ternaryExpression = this.extractTernary(key);

      if (ternaryExpression) {
        const { condition, expression1, expression2 } = ternaryExpression;
        const prop = condition.split("===");
        const evalExpression = new Function(`return this.${prop[0]} === ${prop[1]}`);
        const value = evalExpression.call(instance);

        return value ? this.replaceSingleQuote(expression1) : this.replaceSingleQuote(expression2);
      } else {
        return this.getNestedPropertyValue(instance, key);
      }
    });

    return super.handle(instance, view);
  }

  private extractTernary(
    expression: string
  ): { condition: string; expression1: string; expression2: string } | null {
    const ternaryExpressionPattern = /^(.*?) \? (.*?) : (.*)$/;
    const match = ternaryExpressionPattern.exec(expression);

    if (match && match.length === 4) {
      return {
        condition: match[1].trim(),
        expression1: match[2].trim(),
        expression2: match[3].trim(),
      };
    } else {
      return null;
    }
  }

  private replaceSingleQuote(str: string): string {
    return str.replace(/'/g, "");
  }
}
