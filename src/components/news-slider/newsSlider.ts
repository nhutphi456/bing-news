import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";
import { NewsService } from "../../services/newsService";

@ComponentMetadata({
  selector: "news-slider",
  templateUrl: "/news-slider/newsSlider.html",
})
export class NewsSlider extends BaseComponent {
  sliderItems = this.appState.addState(this.getNewsList(), "newsList") || [];

  constructor(private newsService: NewsService) {
    super();
  }

  getNewsList(): Promise<unknown> {
    return this.newsService.getTopNews();
  }
}
