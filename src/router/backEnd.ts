// 后端控制路由
import { useRouteStore } from '@/stores/route';
import { routeList } from './index';
import multiLevelMenu from './modules/multiLevelMenu';

const routeStore = useRouteStore();
routeList[0].children?.push(multiLevelMenu);
routeStore.setRouteList(routeList);
