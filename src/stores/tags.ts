import { ref, computed, Ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouteStore } from './route';
import { Persistent } from '@/utils/persistent'; // 持久化
import { Tree } from '@/utils/tree'; // 树操作

export const useTagsStore = defineStore('tags', () => {

  const activeTag = ref(''); // 当前高亮的tag
  const cacheTags: Ref<amiaTag[]>= ref([]); // 缓存的tags数组
  const lastMenuFixTag: Ref<amiaTag[]>= ref([]); // 缓存上次菜单设置的tags数组
  const cacheTagsInfor = computed(() => {
    const index = tagIndex({path: activeTag.value});
    const info = {
      hasLeft : (index <= 0) ? false : true,
      hasRight: ((index+1) >= cacheTags.value.length) ? false : true,
      hasOther: cacheTags.value.length > 1 ? true: false
    };
    return info;
  });
  const routeStore = useRouteStore(); // 路由store
  initTag();
  // 初始化tag 至少确保有一个tag 用于默认展示页面，所以路由列表中的路由至少有一个meta的isaffix属性为true
  function initTag() {
    activeTag.value = Persistent.getLocal('activeTag') != null ? Persistent.getLocal('activeTag') : '';
    cacheTags.value = Persistent.getLocal('cacheTags') != null ? Persistent.getLocal('cacheTags') : [];
    lastMenuFixTag.value= Persistent.getLocal('lastMenuFixTag') != null ? Persistent.getLocal('lastMenuFixTag') : []; // 保存上次菜单里的固定tag信息
    const nowMenuFixTag: amiaTag[] = [];
    Tree.treeForeach(routeStore.routeList, (node) => { // 遍历路由 获取设置为tag的项
      if (node.meta.isAffix) {
        nowMenuFixTag.push({
          icon: node.meta.icon,
          title: node.meta.title,
          path: node.path,
        });
      }
    });

    if (lastMenuFixTag.value.toString() !== nowMenuFixTag.toString() || cacheTags.value.length == 0) { // 说明路由tag项有改动 应用最新的。 或者本地没缓存使用路由设置的tag
      cacheTags.value = lastMenuFixTag.value =  nowMenuFixTag;
      activeTag.value = cacheTags.value.length > 0 ? cacheTags.value[0].path : ''; // 默认高亮第一个
    }

    if (cacheTags.value.length == 0) {
      throw('请确保路由列表中的路由至少有一个meta的isaffix属性为true, 用于展示默认页面');
    }
    return cacheTags.value;
  }
  // 添加缓存tag
  function AddTag(tag: amiaTag) {
    activeTag.value = tag.path;
    if (tagIndex(tag) == -1) // 不存在才插入
    cacheTags.value.push(tag);
  }
  // 删除一个tag
  function deleteTag(tag: amiaTag) {
    let deleteTagIndex = -1; // 当前删除的下标
    cacheTags.value = cacheTags.value.filter((v, i) => {
      if (v.path === tag.path) deleteTagIndex = i;
      return v.path !== tag.path;
    });
    if (activeTag.value === tag.path) { // 若删除的时高亮的tag
      deleteTagIndex == 0 ? activeTag.value = cacheTags.value[deleteTagIndex].path
      : activeTag.value = cacheTags.value[deleteTagIndex - 1].path;
      return activeTag.value;
    }
  }
  // 删除其他tag
  function deleteOtherTags(tag: amiaTag | tagOnlyPath) {
    if (!cacheTagsInfor.value.hasOther) return false;
    cacheTags.value = cacheTags.value.filter((v) => {
      return v.path === tag.path;
    });
    console.log("删除其他：",tag,cacheTags.value)
    return true;
  }
  // 删除左边的tag
  function deleteLeftTags(tag: amiaTag | tagOnlyPath) {
    console.log("删除左边！！！")
    if (!cacheTagsInfor.value.hasLeft || tagIndex(tag) == -1) return false;
    cacheTags.value.splice(0, tagIndex(tag));
    return true;
  }
  // 删除右边的tag
  function deleteRightTags(tag: amiaTag | tagOnlyPath) {
    console.log("删除右边1：",tagIndex(tag) )
    if (!cacheTagsInfor.value.hasRight || tagIndex(tag) == -1) return false;
    console.log("删除右边2：",tagIndex(tag))
    cacheTags.value.splice(tagIndex(tag) + 1);
    return false;
  }
  // 查找某个tag的下标
  function tagIndex(tag: amiaTag | tagOnlyPath) {
    let index = -1;
    cacheTags.value.some((v ,i) => {
      if (v.path == tag.path) {
        index = i;
        return true;
      }
    });
    return index;
  }
  return { activeTag, cacheTags, lastMenuFixTag, cacheTagsInfor, initTag, AddTag, deleteTag, deleteOtherTags, deleteLeftTags, deleteRightTags};
});

