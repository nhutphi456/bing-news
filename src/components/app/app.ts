import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
  selector: "app-root",
  templateUrl: "/app/app.html"
})
export class AppComponent extends BaseComponent {}
