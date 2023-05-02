import type { amiaRoute } from '@/router/types/route';
const shim: amiaRoute = {
  path: '/redirect',
  name: 'redirect',
  redirect: '/home',
  meta: {
    title: '重载',
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'anyRedirect',
      component: () => import('@/views/shim/redirect.vue'),
      meta: {
        title: 'any redirect'
      }
    }
  ]
};

export default shim;
