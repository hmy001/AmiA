import type { amiaRoute } from '@/router/types/route';
import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
// 路由store
export const useRouteStore = defineStore('route', () => {
 const routeList: Ref<amiaRoute[]> = ref([]); // 路由列表
 function setRouteList(data: amiaRoute[]) {
  routeList.value = data;
 }
 return { routeList, setRouteList};
});
