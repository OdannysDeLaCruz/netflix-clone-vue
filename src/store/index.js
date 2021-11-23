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
    },
    profileList: [
      { id: 1, name: 'Lily', image: '/assets/images/profile1.png' },
      { id: 2, name: 'Odannys', image: '/assets/images/profile2.png' },
      { id: 3, name: 'Carlos', image: '/assets/images/profile3.png' },
      { id: 4, name: 'Jose', image: '/assets/images/profile4.png' }
    ]
  },
  getters: {
    isLogged (state) {
      return state.isLogged
    },
    getProfileList (state) {
      return state.profileList
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
