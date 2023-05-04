<!-- 标签 -->
<template>
  <div class="w100 tags">
    <!-- 标签主体 -->
    <tag-content
    class="tag-content"
    ref="refTagContent"
    :tag-list="tagList"
    :active-tag="tagsStore.activeTag"
    @tagContextMenu="tagContextMenu"
    @tagClick="tagClick"
    @tagClose="tagClose"></tag-content>
    <!-- 右键菜单 -->
    <context-menu class="tag-contextmenu"></context-menu>
    <!-- 刷新按钮 -->
    <reload-btn class="tag-btn tag-reload"></reload-btn>
    <!-- 下拉菜单 -->
    <drop-down-btn class="tag-btn tag-drop-down" :menu-list="tagList" :activeMenu="tagsStore.activeTag" :menu-info="cacheTagsInfor"
    @menuClick="tagClick" @menuClose="tagClose" @close-other="closeOther" @close-left="closeLeft" @close-right="closeRight"></drop-down-btn>
    <!-- 屏幕控制 -->
    <screen-control class="tag-btn tag-screen"></screen-control>
  </div>
</template>

<script setup lang='ts'>
// 内置api
import { ref, Ref, nextTick, toRaw, computed} from 'vue';
// 组件
import tagContent from './components/tagContent.vue';
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
const cacheTagsInfor = computed(() => { // 标签存储状态
  console.log("标签状态：", tagsStore.cacheTagsInfor)
  return tagsStore.cacheTagsInfor;
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
// 关闭其它标签
function closeOther(tag: amiaTag) {
  tagsStore.deleteOtherTags(tag);
}
// 关闭左侧标签
function closeLeft(tag: amiaTag) {
  tagsStore.deleteLeftTags(tag);
}
// 关闭右侧标签
function closeRight(tag: amiaTag) {
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^:",tag)
  tagsStore.deleteRightTags(tag);
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
    cursor: pointer;
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
