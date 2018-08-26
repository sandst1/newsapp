import Vue from 'vue'
import Vuex from 'vuex'

import { NewsService } from '@/service'

import {
  CATEGORY_LATEST,
  LATEST_ARTICLES_COUNT,
  types
} from '@/constants'

import { 
  mapById,
  sortByCreatedDesc
} from '@/utils'

Vue.use(Vuex)

const state = {
  newsLoaded: false,
  articlesById: {},
  categoriesById: {},
  activeCategory: CATEGORY_LATEST,
  activeArticleId: null
}

const actions = {
  async [types.LOAD_NEWS] ({ commit }) {
    const articles = await NewsService.loadArticles()
    const categories = await NewsService.loadCategories()
    commit(types.SET_NEWS, { articles, categories })
  },

  [types.CHANGE_CATEGORY] ({ commit, state, dispatch }, categoryKey) {
    if (!state.newsLoaded) {
      dispatch(types.LOAD_NEWS)
    }
    commit(types.SET_CATEGORY, categoryKey)
  },

  [types.CHANGE_ARTICLE] ({ commit }, articleId) {
    commit(types.SET_ARTICLE, articleId)
  }
}

const mutations = {
  [types.SET_NEWS] (state, news) {
    state.articlesById = mapById(news.articles)
    state.categoriesById = mapById(news.categories)
    state.newsLoaded = true
  },

  [types.SET_CATEGORY] (state, categoryKey) {
    state.activeCategory = categoryKey
  },

  [types.SET_ARTICLE] (state, articleId) {
    state.activeArticleId = articleId
  }
}

const getters = {
  [types.CATEGORIES]: state => Object.values(state.categoriesById),
  
  [types.ARTICLES_OF_ACTIVE_CATEGORY]: state => {
    const allArticles = sortByCreatedDesc(Object.values(state.articlesById))

    if (CATEGORY_LATEST === state.activeCategory) {
      return allArticles.slice(0, LATEST_ARTICLES_COUNT)
    }
    return allArticles.filter(a => a.category === state.activeCategory)
  },

  [types.ACTIVE_ARTICLE]: state => {
    if (state.activeArticleId) {
      return state.articlesById[state.activeArticleId]
    }
    return null
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
