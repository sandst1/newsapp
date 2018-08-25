<template>
  <div>
    <categories 
      @change="changeCategory"
      :active-category="activeCategory"
      :category-list="categories"/>

    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { types, routes } from '@/constants'
import { Categories } from '@/components'
import { Article } from '@/views'

export default {
  components: {
    Categories,
    Article
  },

  computed: {
    activeCategory() {
      return this.$store.state.activeCategory
    },

    ...mapGetters({
      articles: types.ARTICLES,
      categories: types.CATEGORIES
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
    }
  }
}
</script>

<style>
</style>
