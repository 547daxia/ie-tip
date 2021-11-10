import ieBlocker from './ie-blocker.vue'

ieBlocker.install = function (Vue) {
  Vue.component(ieBlocker.name, ieBlocker)
}

export default ieBlocker
