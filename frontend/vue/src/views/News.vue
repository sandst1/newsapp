<template>
  <div>
    <categories 
      @change="changeCategory"
      :active-category="activeCategory"
      :category-list="categories"/>

    <div 
      v-if="!activeArticle"
      class="article-list-item"
      @click="openArticle(article)"
      :key="article.id" 
      v-for="article in articles">
      {{article.title}} {{article.created | date}}
    </div>
    <div v-if="activeArticle">
      <div>
        <h2>{{activeArticle.title}}</h2>
        {{activeArticle.content}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { types, routes } from '@/constants'
import { Categories } from '@/components'

export default {
  components: {
    Categories
  },

  computed: {
    activeCategory() {
      return this.$store.state.activeCategory
    },

    ...mapGetters({
      articles: types.ARTICLES,
      categories: types.CATEGORIES,
      activeArticle: types.ACTIVE_ARTICLE
    })
  },

  methods: {
    changeCategory(categoryKey) {
      this.$router.push({
        name: routes.NEWS,
        params: {
          articleId: null,
          category: categoryKey
        }
      })
    },

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

<style>
  .article-list-item {
    cursor: pointer;
    margin: 10px 0;
  }
</style>
