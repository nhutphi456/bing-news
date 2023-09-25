import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";
import { NewsService } from "../../services/newsService";
import { groupArrayElements } from "../../utils/groupArrayElement";

@ComponentMetadata({
  selector: "top-news",
  templateUrl: "/top-news/topNews.html",
})
export class TopNews extends BaseComponent {
  topNews = this.appState.addState(this.getNewsList(), "topNews", groupArrayElements) || [];
  // newsList = newsData
  constructor(private newsService: NewsService) {
    super();
  }

  getNewsList(): Promise<unknown> {
    return this.newsService.getTopNews();
  }
}
