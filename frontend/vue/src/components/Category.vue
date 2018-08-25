<template>
  <div
    @click="categoryClicked" 
    :class="[activeClass, categoryClass]">
    {{data.label}}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  
  data() {
    return {
      categoryClass: 'category'
    }
  },

  computed: {
    activeClass() {
      return this.active ? 'active' : ''
    } 
  },

  methods: {
    categoryClicked() {
      this.$emit('click', this.data.key)
    }
  }
}
</script>

<style scoped>
  .active {
    font-weight: bold;
    text-decoration: underline;
  }

  .category {
    display: inline-block;
    margin: 5px 20px;
    cursor: pointer;
  }
</style>
