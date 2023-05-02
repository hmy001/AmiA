<!-- 标签 -->
<template>
  <div class="w100 tags">
    <tab-content :tab-list="tabList"></tab-content>
  </div>
</template>

<script setup lang='ts'>
// 内置api
import { ref, Ref } from 'vue';
// 组件
import tabContent from './components/tabContent.vue';
// store
import { useTagsStore } from '@/stores/tags';
const tabList:Ref<Array<amiaTag>> = ref([{title: '首页1', path: '1'},{title: '首页2', path: '2'}]);
</script>

<style scoped lang='scss'>
.tags {
  display: flex;
  align-items: end;
  height: $amia-tags-height;
  border-bottom: solid 1px var(--amia-tags-border-color);
  background-color: var(--amia-tags-bg-color);
}
</style>
