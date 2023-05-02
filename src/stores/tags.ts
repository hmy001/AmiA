import { ref, computed, Ref } from 'vue';
import { defineStore } from 'pinia';

export const useTagsStore = defineStore('tags', () => {
  const activeTag = ref(''); // 当前高亮的tag
  let cacheTags: Ref<amiaTag[]>= ref([]); // 缓存的tags数组

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
    }
  }
  // 删除左边的tag
  function deleteLeftTags(tag: amiaTag) {
    cacheTags.value.splice(0, tagIndex(tag));
  }
  // 删除右边的tag
  function deleteRightTags(tag: amiaTag) {
    cacheTags.value.splice(tagIndex(tag));
  }
  // 查找某个tag的下标
  function tagIndex(tag: amiaTag) {
    let index = -1;
    cacheTags.value.some((v ,i) => {
      if (v.path == tag.path) {
        index = i;
        return true;
      }
    });
    return index;
  }
  return { activeTag, AddTag, deleteTag, deleteLeftTags, deleteRightTags};
});

window.addEventListener('beforeunload', () => {
  console.log("8888")
  window.sessionStorage.setItem('store', '111')
 })
 window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('store2', '222')

  console.log("6666")
 })
console.log('hhhhh')
