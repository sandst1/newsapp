<template>
  <div class="article-navi">
    <div 
      v-if="prevVisible"
      @click="$emit('prev')"
      class="prev">
      &lt;
    </div>
    <div class="curIndex">{{current + 1}}/{{total}}</div>
    <div 
      v-if="nextVisible"
      @click="$emit('next')"
      class="next">
      &gt;
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },

  computed: {
    prevVisible() {
      return this.current > 0
    },

    nextVisible() {
      return this.current + 1 < this.total
    }
  }
}
</script>

<style scoped>
 .article-navi {
    width: 20vw;
    text-align: center;
    margin: 20px auto;
  }

  .prev, .next {
    cursor: pointer;
    margin: 0 10px;
    font-weight: bold;
  }

  .prev, .next, .curIndex {
    user-select: none;
    display: inline-block;
  }
</style>
