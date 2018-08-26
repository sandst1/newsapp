<template>
  <div class="article-navi">
    <div 
      @click="prev"
      class="prev">
      {{prevEnabled ? '&lt;' : '&nbsp;'}}
    </div>
    <div class="curIndex">
      {{currentIndex}}/{{total}}
    </div>
    <div 
      @click="next"
      class="next">
      {{nextEnabled ? '&gt;' : '&nbsp;'}}
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
    currentIndex() {      
      let cur = this.current + 1
      if (cur < 10) {
        cur = '0' + cur
      }
      return cur
    },

    prevEnabled() {
      return this.current > 0
    },

    nextEnabled() {
      return this.current + 1 < this.total
    }
  },

  methods: {
    prev() {
      if (this.prevEnabled) {
        this.$emit('prev')
      }
    },

    next() {
      if (this.nextEnabled) {
        this.$emit('next')
      }
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
