<!-- 下拉按钮：tabs快捷操作 -->
<template>
  <div class="drop-down">
    <icon-font class="icon" @click="dropDown" :class="[isdropDown ? 'rotate180' : '']" icon="icon-xiangxia"></icon-font>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Tools } from '@/utils/tools';
const emit = defineEmits(['dropDown']);
const isdropDown = ref(false);

const dropDown = Tools.debounce(() => {
  isdropDown.value = !isdropDown.value;
  emit('dropDown');
}, 200);
</script>

<style scoped lang='scss'>

.drop-down {
  .icon {
    display: inline-block;
    transition: all 0.2s;
  }
}
</style>
