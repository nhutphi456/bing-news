import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
    selector: "news",
    templateUrl: "/news/news.html"
})
export class News extends BaseComponent {
    data
}