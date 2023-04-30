import type { RouteRecordRaw } from 'vue-router';

export interface amiaRoute extends Omit<RouteRecordRaw, 'meta'> {
  meta?: {
    // 菜单id
    id?: string | number;
    // 菜单父级id
    pid?: string | number;
    // 菜单名称
    title?: string;
    // 菜单图标
    icon?: string;
    // 角色权限
    roles?: string[] | number[],
    // 内嵌iframe地址
    iframeSrc?: string,
    // 外链地址
    linkSrc?: string;
    // 是否缓存
    isCache?: boolean;
    // 是否固定在tab
    isAffix?: boolean;
  }
}
