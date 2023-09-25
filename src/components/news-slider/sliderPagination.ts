import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
    selector: "slider-pagination",
    templateUrl: "/news-slider/sliderPagination.html"
})
export class SliderPagination extends BaseComponent {
    data
}