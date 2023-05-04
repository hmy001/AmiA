<!-- 重新加载按钮：用于某个页面重新加载 -->
<template>
  <div class="reload">
    <icon-font class="icon" @click="reload" :class="[isReload ? 'reload-animate' : '']" icon="icon-shuaxin"></icon-font>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Tools } from '@/utils/tools';
const emit = defineEmits(['reload']);
const isReload = ref(false);

const reload = Tools.debounce(() => {
  isReload.value = true;
  setTimeout(() => {
    isReload.value = false;
  }, 650);
  emit('reload');
},200);
</script>

<style scoped lang='scss'>

.reload-animate {
  display: inline-block;
  animation: roll-360 0.6s ease-in-out;
}
</style>
