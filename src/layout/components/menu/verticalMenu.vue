<!-- 竖直菜单 -->
<template>
  <div>
    <el-menu
      router
      :default-active="route.path"
      @open="handleOpen"
      @close="handleClose"
      >
        <template v-for="menu in menuList" :key="menu.path">
          <!-- 若有子菜单 -->
          <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 0">
            <template #title>
              <icon-font :icon="menu.meta && menu.meta.icon"></icon-font>
              <span class="menu-title">{{menu.meta &&  menu.meta.title }}</span>
            </template>
            <sub-menu :childrens="menu.children"></sub-menu>
          </el-sub-menu>
          <!-- 否则 -->
          <el-menu-item :index="menu.path" v-else>
            <template #title>
              <icon-font :icon="menu.meta && menu.meta.icon"></icon-font>
              <span class="menu-title">{{menu.meta &&  menu.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
  </div>
</template>

<script setup lang='ts'>
// 类型
import type { amiaRoute } from '@/router/types/route';
// 内置api
import { computed, PropType } from 'vue';
import { useRoute } from 'vue-router';
// 组件
import iconFont from '@/components/iconFont/index.vue';
import subMenu  from './components/subMenu.vue';

const props = defineProps({
  menuList: { // 菜单
    type: Array as PropType<amiaRoute[]>,
    default: () => {
      return [];
    }
  }
});
// 用户菜单
const menuList = computed(() => {
  return props.menuList;
});
const route = useRoute(); // 当前路由信息
// console.log("路由：",route)
// 打开/关闭
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang='scss'>

</style>
