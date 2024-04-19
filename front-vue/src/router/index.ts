import { createRouter, createWebHistory } from 'vue-router'
import MeView from '../views/MeView.vue'
import { RouteNames, Routes } from '@/interfaces/global'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.HOME,
      name: RouteNames.HOME,
      component: MeView
    },
    {
      path: Routes.ABOUT,
      name: RouteNames.ABOUT,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: Routes.PORTFOLIO,
      name: RouteNames.PORTFOLIO,
      component: () => import('../views/HomeView.vue')
    },
    {
      path: Routes.CONTACT,
      name: RouteNames.CONTACT,
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
