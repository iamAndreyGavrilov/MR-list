import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import User from '@/views/User'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/users/:id',
    component: User,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
