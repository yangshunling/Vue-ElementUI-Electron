import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login')
  }, {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main'),
    children: [{
      path: '/user',
      name: 'user',
      component: () => import('../views/main/User')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
