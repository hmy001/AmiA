import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router';
// import type { RouteRecordRaw } from 'vue-router';

export const routeList: RouteRecordRaw[] = [
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
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routeList
});

export default router;
