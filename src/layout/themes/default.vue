<!-- 默认布局 -->
<template>
  <el-container class="layout-container">
    <!-- 顶部 -->
    <layout-header class="layout-header">
      <template #header-right>
        <logo class="layout-logo inline-flex align-center"></logo>
      </template>
    </layout-header>
    <div class="layout-main">
      <!-- 侧边导航 -->
      <layout-sideBar class="layout-sideBar">
        <template #menu>
          <vertical-menu :menuList="routeList"></vertical-menu>
        </template>
      </layout-sideBar>
      <div class="layout-main-content">
        <!-- 标签条 -->
        <layout-tags></layout-tags>
        <!-- 页面内容 -->
        <el-scrollbar class="layout-content">
          <layout-content></layout-content>
        </el-scrollbar>
      </div>
    </div>
  </el-container>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
// 导入组件
import LayoutHeader from '../components/header/index.vue';
import LayoutSideBar from '../components/navbars/sideBar.vue';
import LayoutTags from '../components/tags/index.vue';
import LayoutContent from '../components/content/index.vue';
import Logo from '../components/logo/index.vue';
import verticalMenu from '../components/menu/verticalMenu.vue';
// store
import { useRouteStore } from '@/stores/route';
const routeStore = useRouteStore();
const routeList = computed(() => {
  console.log("routeList:",routeStore.routeList);
  return routeStore.routeList;
});

</script>

<style scoped lang='scss'>

</style>
