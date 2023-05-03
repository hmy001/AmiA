// 所有需要做持久化的store，统一在这里引入，在导出在app.vue中统一执行
import { defineStore } from 'pinia';
import { useTagsStore } from './tags';
import { Persistent } from '@/utils/persistent';

export const usePersistentStore = defineStore('persistent', () => {
  const tagsStore = useTagsStore();

  function windowBeforUnload() {
    window.addEventListener('beforeunload', () => {
      Persistent.setLocal('activeTag', tagsStore.activeTag);
      Persistent.setLocal('cacheTags', tagsStore.cacheTags);
      Persistent.setLocal('lastMenuFixTag', tagsStore.lastMenuFixTag);
     });
  }
  return { windowBeforUnload };
});

