<template>
  <div>
    <h2>{{article.title}}</h2>
    <div>
      {{article.content}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { types } from '@/constants'

export default {
  computed: {
    ...mapGetters({
      article: types.ACTIVE_ARTICLE
    })
  }
}
</script>

<style>

</style>
