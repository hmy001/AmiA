<!-- 用于引入svg图片, svg图片需要放在src/assets/svg文件夹下 -->
<template>
  <div :style="getWrapStyle">
    <img :src="svgSrc" alt="" :style="imgStyle">
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'currentcolor'
  },
  imgW: {
    type: Number,
    default: 32
  },
  imgH: {
    type: Number,
    default: () => {
      return 32;
    }
  },
});
// svg地址
const svgSrc = computed(() => {
  return new URL(`../../assets/svg/${props.name}.svg`, import.meta.url).pathname;
});
// 样式
const getWrapStyle = computed(() => {
  return `width:${props.imgW}px;height:${props.imgH}px;overflow:hidden;`;
});
const imgStyle = computed(() => {
  return `width:${props.imgW}px;height:${props.imgH}px;filter: drop-shadow(${props.color} 32px 0);transform: translateX(-32px);`;
});
</script>

<style scoped lang='scss'>

</style>
