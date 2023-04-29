import type { RouteRecordRaw } from 'vue-router'; // 路由类型
const multiLevelMenu: RouteRecordRaw = {
  path: '/multiLevelMenu',
  name: 'multiLevelMenu',
  redirect: '/multiLevelMenu/menu1/menu1-1',
  meta: {
    title: '多级菜单',
    icon: 'icon-caidan',
  },
  children: [
    {
      path: '/multiLevelMenu/menu1',
      name: 'menu1',
      redirect: '/multiLevelMenu/menu1/menu1-1',
      meta: {
        title: '菜单1',
        icon: 'icon-caidan'
      },
      children: [
        {
          path: '/multiLevelMenu/menu1/menu1-1',
          name: 'menu1-1',
          component: () => import ('@/views/multiLevelMenu/menu1-1.vue'),
          meta: {
            title: '菜单1-1',
            icon: 'icon-caidan'
          },
        },
        {
          path: '/multiLevelMenu/menu1/menu1-2',
          name: 'menu1-2',
          redirect: '/multiLevelMenu/menu1/menu1-2/menu1-2-1',
          meta: {
            title: '菜单1-2',
            icon: 'icon-caidan'
          },
          children: [
            {
              path: '/multiLevelMenu/menu1/menu1-2/menu1-2-1',
              name: 'menu1-2-1',
              component: () => import ('@/views/multiLevelMenu/menu1-2-1.vue'),
              meta: {
                title: '菜单1-2-1',
                icon: 'icon-caidan'
              },
            }
          ]
        },
      ]
    },
    {
      path: '/multiLevelMenu/menu2',
      name: 'menu2',
      component: () => import ('@/views/multiLevelMenu/menu2.vue'),
      meta: {
        title: '菜单2',
        icon: 'icon-caidan'
      },
    }
  ]
};

export default multiLevelMenu;
