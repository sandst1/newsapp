import Vue from 'vue'
import Vuex from 'vuex'

import { NewsService } from '@/service'
import { mapById } from '@/utils'

Vue.use(Vuex)

const state = {
  articles: [],
  categories: []
}

const actions = {
  async loadNews({ dispatch }) {
    dispatch('loadArticles')
    dispatch('loadCategories')
  },

  async loadArticles({ commit }) {
    const articles = await NewsService.loadArticles()
    commit('saveArticles', articles)
  },

  async loadCategories({ commit }) {
    const categories = await NewsService.loadCategories()
    commit('saveCategories', categories)
  }
}

const mutations = {
  saveArticles(state, articles) {
    state.articles = articles
  },
  
  saveCategories(state, categories) {
    state.categories = categories
  }
}

const getters = {
  latestArticles: (state) => {
    const articles = [].concat(state.articles)
    articles.sort((a, b) => new Date(a.created) > new Date(b.created) ? -1 : 1 )
    return articles
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
