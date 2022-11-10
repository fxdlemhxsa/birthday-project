import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(
        //@ts-ignore
        () => import('../views/HomeView.vue')
      )
    },
    {
      path: '/present',
      name: 'present',
      component: defineAsyncComponent(
        //@ts-ignore
        () => import('../views/PresentView.vue')
      )
    },
  ]
})

export default router
