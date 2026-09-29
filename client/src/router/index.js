import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuidesView from '@/views/GuidesView.vue'
import GuideDetailView from '@/views/GuideDetailView.vue'
import ToursView from '@/views/ToursView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guider',
      name: 'guides',
      component: GuidesView,
    },
    {
      path: '/guider/:slug',
      name: 'guide-detail',
      component: GuideDetailView,
    },
    {
      path: '/turer',
      name: 'tours',
      component: ToursView,
    },
  ],
})

export default router
