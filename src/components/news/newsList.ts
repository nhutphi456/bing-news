import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";
import { NewsService } from "../../services/newsService";

@ComponentMetadata({
  selector: "news-list",
  templateUrl: "/news/newsList.html",
})
export class NewsList extends BaseComponent {
  newsList = this.appState.addState(this.getNewsList(), "newsList") || [];
  // newsList = newsData
  constructor(private newsService: NewsService) {
    super();
  }

  getNewsList() {
    return this.newsService.getTopNews();
  }
}

const newsData = {
  articles: [
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "HYUNG-JIN KIM",
      title:
        "North Korea says Kim Jong Un is back home from Russia, where he deepened 'comradely' ties with Putin - Yahoo News",
      description:
        "North Korea said Tuesday that leader Kim Jong Un has returned home from a trip to Russia where he deepened “comradely fellowship and friendly ties” with...",
      url: "https://news.yahoo.com/north-korea-says-kim-jong-043321527.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/.ARbrn5F8cPQzDk6nNYtVw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://media.zenfs.com/en/ap.org/7952b858d1fb02ec03b7fa7525ebd52b",
      publishedAt: "2023-09-19T10:23:06Z",
      content:
        "SEOUL, South Korea (AP) North Korea said Tuesday that leader Kim Jong Un has returned home from a trip to Russia where he deepened comradely fellowship and friendly ties with President Vladimir Putin… [+2628 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: null,
      title:
        "Live news: YouTube demonetises Russell Brand's channel following sexual misconduct allegations - Financial Times",
      description:
        "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
      url: "https://www.ft.com/content/6f17a6a5-100d-49c8-8899-606343055265",
      urlToImage: null,
      publishedAt: "2023-09-19T10:21:46Z",
      content:
        "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Gerry Shih, Karishma Mehrotra",
      title:
        "India, Canada expel diplomats over accusations Delhi killed Sikh separatist - The Washington Post",
      description:
        "The accusation that Hardeep Singh Nijjar was assassinated marred Canada-India relations, in turn threatening the U.S.-led alliance to confront China.",
      url: "https://www.washingtonpost.com/world/2023/09/19/india-expels-canada-diplomat-sikh-assassination/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M5NUUVFACHVXK34OCVDC4WJCVU.JPG&w=1440",
      publishedAt: "2023-09-19T10:12:00Z",
      content:
        "Comment on this story\r\nComment\r\nNEW DELHI India expelled a Canadian diplomat on Tuesday in a tit-for-tat move after Canadas leader alleged the Indian government may be behind the shooting of a Sikh s… [+6267 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Yongchang Chin, Jack Wittels",
      title: "Latest Oil Prices, Market News and Analysis for September 19 - Bloomberg",
      description:
        "Oil surged to a 10-month high — extending a powerful rally that may rekindle inflation — as supply cuts from OPEC+ tightened the market, with Saudi Arabia’s energy minister shying away from any change in course.",
      url: "https://www.bloomberg.com/news/articles/2023-09-18/latest-oil-market-news-and-analysis-for-september-19",
      urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTI8kUMxnsfY/v0/1200x800.jpg",
      publishedAt: "2023-09-19T09:45:00Z",
      content:
        "Oil surged to a 10-month high extending a powerful rally that may rekindle inflation as supply cuts from OPEC+ tightened the market, with Saudi Arabias energy minister shying away from any change in … [+337 chars]",
    },
    {
      source: {
        id: null,
        name: "WDIV ClickOnDetroit",
      },
      author: "Brandon Carr, Mara MacDonald",
      title:
        "UAW president announces new strike deadline for Detroit Big Three automakers - WDIV ClickOnDetroit",
      description:
        "UAW President Shawn Fain announced a new strike date for the Big Three automakers.",
      url: "https://www.clickondetroit.com/news/local/2023/09/19/uaw-president-announce-new-strike-deadline-for-detroit-big-3-automakers/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/09-19-2023/t_31b3078f31d04ff1b731732b9eb20c84_name_Auto_Workers_Strike?_a=ATAPphC0",
      publishedAt: "2023-09-19T09:28:58Z",
      content:
        "UAW President Shawn Fain announced a new strike date for the Big Three automakers, giving them a stern ultimatum in a recorded message posted on Facebook.\r\nThe new deadline will be Friday, Sept. 22 a… [+2936 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Michael David Smith",
      title:
        'Nick Chubb out for season with "very significant knee injury," Kevin Stefanski says - NBC Sports',
      description: "The Browns' star running back suffered a gruesome injury on Monday night.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/nick-chubb-out-for-season-with-very-significant-knee-injury-kevin-stefanski-says",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/667d1e3/2147483647/strip/true/crop/7403x4164+0+386/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Ff5%2F57%2Feeb04b454cddb4e5288a87e7c9ac%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1675700141",
      publishedAt: "2023-09-19T09:03:23Z",
      content:
        "The image of Browns running back Nick Chubbs knee injury was gruesome that ESPN wouldnt show it, and the crowd in Pittsburgh let out an audible gasp when it was shown on the big screen. So it was no … [+753 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title: "The breakup: Biden and Adams avoid each other in New York - POLITICO",
      description:
        "The decision by Biden and Adams to avoid each other is a concession to the reality that their relationship is deeply broken, according to several people familiar with the dynamics.",
      url: "https://www.politico.com/news/2023/09/19/biden-adams-new-york-united-nations-00116667",
      urlToImage:
        "https://static.politico.com/b7/b3/1e58edba4936b02e41961978e636/https-delivery-gettyimages.com/downloads/1688688252",
      publishedAt: "2023-09-19T09:00:00Z",
      content:
        "But Adams had booked no time with Biden and was not expected to do so.\r\nAdams was invited to but likely will not attend the presidents campaign fundraisers nor a reception Tuesday at the Metropolitan… [+5390 chars]",
    },
  ],
};
