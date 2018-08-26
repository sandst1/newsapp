import Vue from 'vue'
import Router from 'vue-router'
import { 
  Article,
  ArticleList,
  News
} from '@/views'

import store from '@/store'
import { types, routes } from '@/constants'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/news/latest'
    },
    {
      path: '/news/',
      redirect: '/news/latest'
    },
    {
      path: '/news/:category',
      component: News,
      children: [
        {
          path: '',
          name: routes.NEWS,
          component: ArticleList
        },
        {
          path: 'articles/:articleId',
          name: routes.ARTICLE,
          component: Article
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.params.category) {
    const category = to.params.category
    store.dispatch(types.CHANGE_CATEGORY, category)
  }

  store.dispatch(types.CHANGE_ARTICLE, to.params.articleId)

  next()
})

export default router