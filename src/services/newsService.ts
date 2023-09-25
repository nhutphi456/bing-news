const API_KEY = "732700a3032147f1af6b3bd8a15486ec"
export class NewsService {
  async getNews(){
    const response = await fetch("./services/news.json")
    return response.json()
  }

  async getTopNews(){
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)

    return response.json()
  }
}
