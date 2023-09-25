/* eslint-disable  @typescript-eslint/no-explicit-any */

export interface Service extends Function {
    new (...args: any[]);
  }