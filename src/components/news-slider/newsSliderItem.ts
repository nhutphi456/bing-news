import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
  selector: "news-slider-item",
  templateUrl: "/news-slider/newsSliderItem.html",
})
export class NewsSliderItem extends BaseComponent {
  data;
  index;
}
