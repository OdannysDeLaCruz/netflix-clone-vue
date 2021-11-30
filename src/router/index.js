import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/browse',
    name: 'browse',
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue')
    // meta: { requiredAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (store.state.isLogged) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})
export default router
