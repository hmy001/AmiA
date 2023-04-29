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

        </template>
      </el-menu>
  </div>
</template>

<script setup lang='ts'>
import type { RouteRecordRaw } from 'vue-router';
defineProps({
  menuList: {
    type: Array<RouteRecordRaw>,
    default: () => {
      return [];
    }
  }
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
