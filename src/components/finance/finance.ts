import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
    selector: "finance",
    templateUrl: "/finance/finance.html"
})
export class Finance extends BaseComponent {
    
}