import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
console.log("import.meta.env.BASE_URL6666:",import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('@/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
