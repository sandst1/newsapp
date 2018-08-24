import Vue from 'vue'
import Router from 'vue-router'
import { News } from '@/views'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: News
    },
  ]
})
