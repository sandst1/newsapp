<template>
  <div>
    <div :key="article.id" v-for="article in latestArticles">
      {{article.title}} {{article.created | date}}
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  components: {
  },

  computed: {
    articles() {
      return this.$store.state.articles
    },

    ...mapGetters([
      'latestArticles'
    ])
  },

  methods: {
    ...mapActions([
      'loadNews'
    ])
  },

  mounted() {
    this.loadNews()
  }
}
</script>

<style>

</style>
