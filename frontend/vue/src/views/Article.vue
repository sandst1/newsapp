<template>
  <div v-if="article">
    <article-navi 
      @prev="prevArticle"
      @next="nextArticle"
      :current="currentArticleIndex"
      :total="articlesInCategory"/>

    <h2>{{article.title}}</h2>
    <div>{{article.created | date }}</div>
    <p>
      <strong>
        {{article.ingress}}
      </strong>
    </p>

    <div>
      {{article.content}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { types, routes } from '@/constants'
import { ArticleNavi } from '@/components'

export default {
  components: {
    ArticleNavi
  },

  computed: {
    currentArticleIndex() {
      return this.categoryArticles.findIndex(a => a.id === this.article.id)
    },

    articlesInCategory() {
      return this.categoryArticles.length
    },

    ...mapGetters({
      article: types.ACTIVE_ARTICLE,
      categoryArticles: types.ARTICLES_OF_ACTIVE_CATEGORY
    })
  },

  methods: {
    prevArticle() {
      const prevArticleId = this.categoryArticles[this.currentArticleIndex - 1].id
      this.switchArticleTo(prevArticleId)
    },

    nextArticle() {
      const nextArticleId = this.categoryArticles[this.currentArticleIndex + 1].id
      this.switchArticleTo(nextArticleId)
    },

    switchArticleTo(articleId) {
      this.$router.push({
        name: routes.ARTICLE,
        params: {
          articleId: articleId
        }
      })
    }
  }

}
</script>

<style scoped>
 
</style>
