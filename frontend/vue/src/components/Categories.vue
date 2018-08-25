<template>
  <div
    class="category-row">
    <category
      @click="categoryClicked"
      :key="category.key" 
      v-for="category in categoryList"
      :data="category"
      :active="activeCategory === category.key"/>
  </div>
</template>

<script>
import { Category } from '@/components'

export default {
  components: {
    Category    
  },

  props: {
    activeCategory: {
      type: String,
      default: null
    },
    categoryList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      categoryClass: 'category'
    }
  },

  methods: {
    categoryClicked(key) {
      this.$emit('change', key)
    }
  }
}
</script>

<style scoped>
  .category-row {
    width: 80vw;
    margin: 0 auto;
    text-align: center;
  }
</style>
