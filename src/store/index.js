import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: null,
      password: null
    },
    isLogged: false,
    fakeUser: {
      username: 'odannys',
      password: '123'
    }
  },
  getters: {
    isLogged (state) {
      return state.isLogged
    }
  },
  mutations: {
    login (state, user) {
      state.user.username = user.username
      state.user.password = user.password
    }
  },
  actions: {
    login ({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user.username === state.fakeUser.username && user.password === state.fakeUser.password) {
            commit('login', user)
            state.isLogged = true
            resolve(true)
          } else {
            reject(new Error('username ó password son incorrectos'))
          }
        }, 100)
      })
    }
  },
  modules: {
  }
})
