import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
    selector: "sport-item",
    templateUrl: "/sport/sportItem.html"
})
export class SportItem extends BaseComponent {
    data
}