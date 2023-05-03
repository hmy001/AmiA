import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router';
import type { amiaRoute } from '@/router/types/route';
import store from '@/stores'; // route被导入时，store还没创建，防止错误
import { useRouteStore } from '@/stores/route';
import multiLevelMenu from './modules/multiLevelMenu'; // 多级菜单
import shim from './modules/shim';

export const routeList: amiaRoute[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-shouye2',
          isAffix: true
        },
      }
    ]
  }
];

const routeStore = useRouteStore(store);
routeList[0].children?.push(multiLevelMenu as any, shim as any);
routeStore.setRouteList(routeList[0].children);
console.log(store, routeStore,routeList);
const router = createRouter({
  history: createWebHistory(),
  routes: routeList as unknown as RouteRecordRaw[]
});

export default router;
