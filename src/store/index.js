import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)


import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  cartList: []
}
const plugins = [
  persistedState({ storage: window.localStorage })
]

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins
})
