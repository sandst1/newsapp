<template>
  <div>
    <div 
      class="article-list-item"
      @click="openArticle(article)"
      :key="article.id" 
      v-for="article in articles">
      {{article.title}} {{article.created | date}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { types, routes } from '@/constants'

export default {
  computed: {
    ...mapGetters({
      articles: types.ARTICLES
    })
  },

  methods: {
    openArticle(article) {
      this.$router.push({
        name: routes.ARTICLE,
        params: {
          articleId: article.id,
          category: article.category
        }
      })
    }
  }
}
</script>

<style scoped>
  .article-list-item {
    cursor: pointer;
    margin: 10px 0;
  }
</style>
