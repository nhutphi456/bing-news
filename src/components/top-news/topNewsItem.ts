import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
    selector: "top-news-item",
    templateUrl: "/top-news/topNewsItem.html"
})
export class TopNewsItem extends BaseComponent {
    data; index;
}