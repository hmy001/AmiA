<!-- 用于某个页面的全屏操作 -->
<template>
  <div>
    <icon-font @click="screenClick" :icon="icon"></icon-font>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import { Tools } from '@/utils/tools';
const isFullScreen = ref(false);
const icon = computed(() => {
  if (isFullScreen.value) {
    return 'icon-tuichuquanping-02';
  }
  return 'icon-quanping';
});
const screenClick = Tools.debounce(() => {
  isFullScreen.value = !isFullScreen.value;
});
</script>

<style scoped lang='scss'>

</style>
