import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/view/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login')
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
