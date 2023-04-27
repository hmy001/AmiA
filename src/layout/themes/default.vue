<!-- 默认布局 -->
<template>
  <el-container class="layout-container">
    <layout-header class="layout-header"></layout-header>
    <div class="layout-main">
      <layout-sideBar></layout-sideBar>
      <div class="layout-main-content">
        <layout-tags></layout-tags>
        <layout-content></layout-content>
      </div>
    </div>
  </el-container>
</template>

<script setup lang='ts'>
// 导入组件
import LayoutHeader from '../components/header/index.vue';
import LayoutSideBar from '../components/navbars/sideBar.vue';
import LayoutTags from '../components/tags/index.vue'
import LayoutContent from '../components/content/index.vue';
</script>

<style scoped lang='scss'>

</style>
