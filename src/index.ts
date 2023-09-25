import { AppComponent } from "./components/app/app";
import { Finance } from "./components/finance/finance";
import { NewsSlider } from "./components/news-slider/newsSlider";
import { NewsSliderItem } from "./components/news-slider/newsSliderItem";
import { SliderPagination } from "./components/news-slider/sliderPagination";
import { News } from "./components/news/news";
import { NewsList } from "./components/news/newsList";
import { Sport } from "./components/sport/sport";
import { SportItem } from "./components/sport/sportItem";
import { TopNews } from "./components/top-news/topNews";
import { TopNewsCard } from "./components/top-news/topNewsCard";
import { TopNewsItem } from "./components/top-news/topNewsItem";
import { AppModule } from "./controller/appModule";
import { AppState } from "./controller/appState";
import { NewsService } from "./services/newsService";

const app = new AppModule();
const appState = AppState.getInstance().getState();

app.setRootComponent(AppComponent);
app.declareComponents(
  AppComponent,
  NewsList,
  News,
  Finance,
  Sport,
  NewsSlider,
  SportItem,
  NewsSliderItem,
  SliderPagination,
  TopNews,
  TopNewsItem,
  TopNewsCard
);
app.declareServices(NewsService);

appState.subscribe((state) => {
  console.log({ state });
  app.run();
});
