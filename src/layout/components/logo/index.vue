<template>
  <div class="logo">
    <img :src="logo" alt="" :style="{width: imgW + 'px', height: imgH + 'px'}">
    <span :style="{fontSize: fontSize + 'px', lineHeight: imgH + 'px', color: fontColor, fontWeight: fontWeight}">amia system by vue3</span>
  </div>
</template>

<script setup lang='ts'>
// 组件
import logo from '@/assets/svg/logo.svg';
defineProps({
  imgW: {
    type: Number,
    default: () => {
      return 32;
    }
  },
  imgH: {
    type: Number,
    default: () => {
      return 32;
    }
  },
  fontSize: {
    type: Number,
    default: () => {
      return 16;
    }
  },
  fontWeight: {
    type: Number,
    default: () => {
      return 700;
    }
  },
  fontColor: {
    type: String,
    default: () => {
      return '#008aff';
    }
  },
});
</script>

<style scoped lang='scss'>
.logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 6px;
  }
}
</style>
