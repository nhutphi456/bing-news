import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
    selector: "top-news-card",
    templateUrl: "/top-news/topNewsCard.html"
})
export class TopNewsCard extends BaseComponent {
    data
}