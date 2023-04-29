<!-- 菜单递归组件，生成多级菜单 -->
<template>
  <template v-for="item in childrens" :key="item.path">
    <el-sub-menu :index="item.path" >
      <template #title>
        <icon-font :icon="item.meta.icon"></icon-font>
        <span></span>
      </template>
      <sub-menu></sub-menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang='ts'>
import iconFont from '@/components/iconFont/index.vue';
defineProps({
  childrens: {
    type: Array<amiaRoute>,
    default: () => {
      return [];
    }
  }
});
</script>

<style scoped lang='scss'>

</style>
