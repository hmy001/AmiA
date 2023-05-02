<!-- tab -->
<template>
  <ul class="tab">
    <li v-for="(item, index) in tabList"
     :key="item.path"
     @mouseenter="msEnter($event, index)"
     @mouseleave="msLeave($event, index)"
     class="tab-item"
     :class="[item.path=='2' ? 'active' : '']" >
      <icon-font v-if="item.icon"></icon-font>
      <span>{{ item.title }}</span>
      <icon-font class="icon" icon="icon-cuowuguanbiquxiao"></icon-font>
      <div class="line" :class="[enterIndex == index ? 'line-in' : '', outIndex == index ? 'line-out' : '']"></div>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue';

const props = defineProps({
  tabList: Array as PropType<amiaTag[]>,
  default: []
});
// 变量
const enterIndex = ref(-1);
const outIndex = ref(-1);
// 鼠标进入进出动画
function msEnter(e: MouseEvent, index: number) {
  outIndex.value = -1;
  enterIndex.value = index;
}
function msLeave(e: MouseEvent, index: number) {
  enterIndex.value = -1;
  outIndex.value = index;
}
</script>

<style scoped lang='scss'>
@keyframes lineInAnimate {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes lineOutAnimate {
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
}
.tab {
  display: flex;
  height: $amia-tag-height;
  padding: 0 10px 2px;
  color: var(--amia-tag-color);
  .tab-item {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: solid 1px var(--amia-tag-border-color);
    border-radius: $amia-tag-border-radius;
    width: auto;
    margin: 0 2px;
    overflow: hidden;
    padding: 5px 10px;
    .icon {
    padding: 3px;
    margin-left: 8px;
    }
    .icon:hover {
      padding: 3px;
      border-radius: 50%;
      background-color: var(--amia-tag-close-bg-color);
    }
    /*鼠标下划线动画 */
    .line-in {
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: var(--amia-tag-active-color);
      animation: lineInAnimate 200ms ease-in;
    }

    /* 鼠标移出下划线动画 */
    .line-out {
      width: 0;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: var(--amia-tag-active-color);
      animation: lineOutAnimate 200ms ease-in;
    }
  }
  .active {
    color: var(--amia-tag-active-text-color);
    .line {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--amia-tag-active-color);
    }
  }
}
</style>
