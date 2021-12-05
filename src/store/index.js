import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleLoginProfilePin = {
  namespaced: true,
  state: () => ({
    pins: {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: ''
    },
    profileSelectedId: 0,
    isLoggedProfile: false
  }),
  getters: {
    pinsCompleted (state) {
      if (state.pins.pin1 && state.pins.pin2 && state.pins.pin3 && state.pins.pin4) {
        return true
      }
      return false
    },
    getPin (state) {
      return `${state.pins.pin1}${state.pins.pin2}${state.pins.pin3}${state.pins.pin4}`
    }
  },
  mutations: {
    loginProfile (state) {
      state.isLoggedProfile = true
    },
    setProfileSelectedId (state, id) {
      state.profileSelectedId = id
    },
    resetPins (state) {
      state.pins.pin1 = ''
      state.pins.pin2 = ''
      state.pins.pin3 = ''
      state.pins.pin4 = ''
    }
  },
  actions: {
    loginProfile ({ state, getters, rootState }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = rootState.profileList.filter(profile => {
            return profile.id === state.profileSelectedId
          })
          if (!result.length) {
            reject(new Error('Profile not found'))
          } else {
            const profile = result[0]
            if (getters.getPin === profile.pin) {
              resolve(true)
            } else {
              reject(new Error('Pin incorrecto'))
            }
          }
        }, 100)
      })
    }
  }
}

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
      { id: 1, name: 'Lily', image: '/assets/images/profile1.png', auth: false, pin: '' },
      { id: 2, name: 'Odannys', image: '/assets/images/profile2.png', auth: true, pin: '2222' },
      { id: 3, name: 'Carlos', image: '/assets/images/profile3.png', auth: true, pin: '3333' },
      { id: 4, name: 'Jose', image: '/assets/images/profile4.png', auth: true, pin: '4444' }
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
    },
    logout ({ state }) {
      state.isLogged = false
    }
  },
  modules: {
    LoginProfilePin: moduleLoginProfilePin
  }
})
