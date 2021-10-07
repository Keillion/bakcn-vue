import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VwHome from '../views/VwHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: VwHome
  },
  {
    path: '/connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VwConnect.vue')
  },
  {
    path: '/community',
    component: () => import('../views/VwCommunity.vue')
  },
  {
    path: '/account',
    component: () => import('../views/VwAccount.vue')
  },
  {
    path: '/login',
    component: () => import('../views/VwLogin.vue')
  },
  {
    path: '/signup',
    component: () => import('../views/VwSignup.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
