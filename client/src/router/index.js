import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuidesView from '@/views/GuidesView.vue'
import GuideDetailView from '@/views/GuideDetailView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: GuidesView,
    },
    {
      path: '/guider/:slug',
      name: 'guide-detail',
      component: GuideDetailView,
    },
  ],
})

export default router
