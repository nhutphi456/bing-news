import { BehaviorSubject, Observable } from "rxjs";

export class AppState {
  private static instance: AppState;
  private state = {};
  private stateSubject = new BehaviorSubject(this.state);

  private constructor() {}

  static getInstance(): AppState {
    if (!AppState.instance) {
      AppState.instance = new AppState();
    }
    return AppState.instance;
  }

  getState(): Observable<unknown> {
    return this.stateSubject.asObservable();
  }

  addState<T = unknown>(promise: Promise<T>, key: string): T {
    if (key in this.state) return this.state[key];
    
    promise.then((data) => {
      this.state = { ...this.state, [key]: data };
      this.stateSubject.next(this.state);

      return this.state[key];
    });
  }
}
