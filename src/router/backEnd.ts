// 后端控制路由
import { useRouteStore } from '@/stores/route';
import { routeList } from './index';

const routeStore = useRouteStore();
routeStore.setRouteList(routeList);
