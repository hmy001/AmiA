<template>
  <div>
    <component :is="layouts.defaults"></component>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

// 引入组件
const layouts = {
    defaults: defineAsyncComponent(() => import('@/layout/themes/default.vue'))
}
</script>

<style scoped lang='scss'>

</style>
