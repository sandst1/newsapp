import formatDate from './formatDate'

export default {
  install(Vue) {
    Vue.filter('date', formatDate)
  }
}
