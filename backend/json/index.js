const articles = require('./articles.json')
const categories = require('./categories.json')

module.exports = () => {
  
  for (let i = 0; i < articles.length; i++) {
    articles[i].id = i
  }

  for (let i = 0; i < categories.length; i++) {
    categories[i].id = i
  }

  return {
    articles,
    categories
  }
}
