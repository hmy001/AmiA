import type { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
export const useRouteStore = defineStore('route', () => {
 let routeList: RouteRecordRaw[] = [];
 function setRouteList(data: RouteRecordRaw[]) {
  routeList = data;
 }
 return { routeList, setRouteList };
});
