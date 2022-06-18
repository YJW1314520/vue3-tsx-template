import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/main')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/index')
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
