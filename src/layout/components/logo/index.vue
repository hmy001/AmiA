<template>
  <div class="logo">
    <!-- <img :src="logo" alt="" :style="{width: imgW + 'px', height: imgH + 'px'}"> -->
    <svg-img name="logo" :img-h="logoH" :img-w="logoW" color="var(--amia-theme-color)"></svg-img>
    <span :style="{fontSize: fontSize + 'px', lineHeight: logoH + 'px', color: fontColor, fontWeight: fontWeight}">amia system by vue3</span>
  </div>
</template>

<script setup lang='ts'>
// 组件
import svgImg from '@/components/svgImg/index.vue';
defineProps({
  logoW: {
    type: Number,
    default: () => {
      return 32;
    }
  },
  logoH: {
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
      return 'var(--amia-theme-color)';
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
