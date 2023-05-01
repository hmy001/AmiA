<!-- 竖直菜单 -->
<template>
  <div>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
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
import type { amiaRoute } from '@/router/types/route';
import { computed, PropType } from 'vue';
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
const menuList = computed(() => {

  console.log("垂直菜单：：:",props.menuList)
  return props.menuList;
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang='scss'>

</style>
