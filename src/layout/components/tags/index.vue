<!-- 标签 -->
<template>
  <div class="w100 tags">
    <tab-content
    class="tag-content"
    ref="refTagContent"
    :tag-list="tagList"
    :active-tag="tagsStore.activeTag"
    @tagContextMenu="tagContextMenu"
    @tagClick="tagClick"
    @tagClose="tagClose"></tab-content>
    <context-menu class="tag-contextmenu"></context-menu>
    <reload-btn class="tag-btn tag-reload"></reload-btn>
    <drop-down-btn class="tag-btn tag-drop-down"></drop-down-btn>
    <screen-control class="tag-btn tag-screen"></screen-control>
  </div>
</template>

<script setup lang='ts'>
// 内置api
import { ref, Ref, nextTick, toRaw, computed} from 'vue';
// 组件
import tabContent from './components/tabContent.vue';
import contextMenu from './components/contextMenu.vue';
import dropDownBtn from './components/dropDownBtn.vue';
import reloadBtn from './components/reloadBtn.vue';
import screenControl from './components/screenControl.vue';
// store
import { useTagsStore } from '@/stores/tags';
// router
import { useRouter, onBeforeRouteUpdate } from 'vue-router';
// 变量
const tagsStore = useTagsStore();
const router = useRouter();
const tagList = computed(() => { // 标签列表
  return tagsStore.cacheTags;
});
const refTagContent = ref(); //

// tag点击 更新路由
function tagClick(item) {
  console.log(item, router, "refTagContent:",refTagContent.value);
  router.push(item.path);
  tagsStore.activeTag = item.path;
}
// 标签关闭
function tagClose(item) {
  const toPath = tagsStore.deleteTag(item);
  if (toPath) { // 删除当前高亮标签则更新路由
    router.push(toPath);
  }
}
// 右键菜单
function tagContextMenu(e, item) {
  console.log('右键菜单:',e, item);
}
// 路由更新时，更新tag
onBeforeRouteUpdate(async (to) => {
  nextTick(() => {
    console.log("to:",to);
    refTagContent.value.enterIndex = -1;
    refTagContent.value.outIndex = -1;
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
  position: relative;
  display: flex;
  align-items: center;
  height: $amia-tags-height;
  border-bottom: solid 1px var(--amia-tags-border-color);
  background-color: var(--amia-tags-bg-color);
  .tag-content{
    flex-grow: 1;
  }
  .tag-btn {
    height: calc(100% - 6px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 11px;
    border-left: solid 1px var(--amia-tag-btn-border-color);
    color: var(--amia-tag-btn-color);
  }
  .tag-contextmenu {
    z-index: 666;
    position: absolute;
    top: 50px;
    left: 50px;
  }
}
</style>
