import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFountView from '@/views/notFountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/jobs',
      name: 'job',
      component: () => import('../views/Jobs.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: notFountView
    }
  ],
})

export default router
