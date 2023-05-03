<!-- 标签 -->
<template>
  <div class="w100 tags">
    <tab-content :tag-list="tagList" :active-tag="tagsStore.activeTag" @tagClick="tagClick"></tab-content>
  </div>
</template>

<script setup lang='ts'>
// 内置api
import { ref, Ref, nextTick } from 'vue';
// 组件
import tabContent from './components/tabContent.vue';
// store
import { useTagsStore } from '@/stores/tags';
// router
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
// 变量
const tagsStore = useTagsStore();
const router = useRouter();
const tagList:Ref<Array<amiaTag>> = ref([]);
tagList.value = tagsStore.initTag(); // tag列表

// tag点击
function tagClick(item) {
  console.log(item, router);
  router.push(item.path);
  tagsStore.activeTag = item.path;
}
// 路由更新时，更新tag
onBeforeRouteUpdate(async (to) => {
  nextTick(() => {
    console.log("to:",to);
    tagsStore.AddTag({
      path: to.path,
      title: to.meta.title as string,
      icon: to.meta.icon as string
    });
  });
});
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
