import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogIn: false,
    user: {
      username: '',
      password: ''
    }
  },
  getters: {
    islogIn: state => state.islogIn,
    user: state => state.user
  },
  mutations: {
    SET_INFO(state, payload) {
      state.user = {
        ...payload
      }
    },

    SET_LOGIN (state, payload) {
      state.islogIn = payload
    }
  },
  actions: {
    setInfo ({ commit }, payload) {
      commit('SET_INFO', payload)
    },

    setlogIn ({ commit }, payload) {
      commit('SET_LOGIN', payload)
    }
  },
  modules: {
  }
})