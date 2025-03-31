import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFountView from '@/views/notFountView.vue'
import JobView from '@/views/JobView.vue'
import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'

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
      name: 'jobs',
      component: () => import('../views/Jobs.vue'),
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView
    },
    {
      path: '/jobs/add',
      name: 'addJob',
      component: AddJob
    },
    {
      path: '/job/edit/:id',
      name: 'editJob',
      component: EditJob
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: notFountView
    }
  ],
})

export default router
