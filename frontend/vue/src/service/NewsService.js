import axios from 'axios'

class NewsService {
  async loadArticles() {
    return this.fetchData('/api/articles')
  }

  async loadCategories() {
    return this.fetchData('/api/categories')
  }

  async fetchData(url) {
    const response = await axios.get(url)
    return response.data
  }
}

export default new NewsService()