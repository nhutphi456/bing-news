/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface Component extends Function {
  new (...args: any[]);
}
