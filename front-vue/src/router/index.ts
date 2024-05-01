import { createRouter, createWebHistory } from 'vue-router'
import MeView from '../views/MeView.vue'
import { RouteNames, Routes } from '@/interfaces/global'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.HOME,
      name: RouteNames.HOME,
      component: MeView,
      meta: {
        title: ''
      }
    },
    {
      path: Routes.ABOUT,
      name: RouteNames.ABOUT,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: RouteNames.ABOUT
      }
    },
    {
      path: Routes.SKILLS,
      name: RouteNames.SKILLS,
      component: () => import('../views/SkillsView.vue'),
      meta: {
        title: RouteNames.SKILLS
      }
    },
    {
      path: Routes.PORTFOLIO,
      name: RouteNames.PORTFOLIO,
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: RouteNames.PORTFOLIO
      }
    },
    {
      path: Routes.CONTACT,
      name: RouteNames.CONTACT,
      component: () => import('../views/ContactMeView.vue'),
      meta: {
        title: RouteNames.CONTACT
      }
    },
    {
      path: Routes.HELP,
      name: RouteNames.HELP,
      component: () => import('../views/HelpView.vue'),
      meta: {
        title: RouteNames.HELP
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | KY`
  next()
})

export default router
