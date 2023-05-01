<template>
  <template v-if="iconType=='fontClass'">
    <span :class="['iconfont', icon]" :style="iconfontStyle"></span>
  </template>
  <template v-else-if="iconType=='unicode'">
    <span class="iconfont" :style="iconfontStyle">{{ icon }}</span>
  </template>
  <template v-else>
    <svg class="icon" aria-hidden="true" :style="iconfontStyle">
      <use :xlink:href="'#'+icon"></use>
    </svg>
  </template>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  icon: { // icon 名称
    type: String,
    default: ''
  },
  iconType: { // icon 类型 fontClass unicode symbol
    type: String,
    default: 'fontClass'
  },
  size: {
    type: Number,
    default: 14
  },
  color: {
    type: String,
    default: 'inherit'
  }
});

const iconfontStyle = computed(() => {
  if (props.iconType == 'symbol') {
    return `width:${props.size}px;height:${props.size}px;color:${props.color};`;
  } else {
    return `font-size:${props.size}px;color:${props.color};`;
  }

})
</script>

<style scoped lang='scss'>

</style>
