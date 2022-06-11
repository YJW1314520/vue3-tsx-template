import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
