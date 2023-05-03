<!-- tab -->
<template>
  <ul class="tab">
    <li v-for="(item, index) in tagList"
     :key="item.path"
     @mouseenter="msEnter($event, index)"
     @mouseleave="msLeave($event, index)"
     @click="$emit('tagClick', item)"
     class="tab-item"
     :class="[item.path == activeTag ? 'active' : '']" >
     <!-- tag图标 -->
      <icon-font class="pre-icon" v-if="item.icon" :icon="item.icon"></icon-font>
      <!-- tag名称 -->
      <span class="tab-title">{{ item.title }}</span>
      <!-- 关闭按钮 -->
      <icon-font v-if="tagList.length > 1" class="icon" icon="icon-cuowuguanbiquxiao"></icon-font>
      <!-- 下划线 -->
      <div class="line"
      :class="[enterIndex == index && item.path != activeTag ? 'line-in' : '',
       outIndex == index && item.path != activeTag ? 'line-out' : '']">
       </div>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue';

const props = defineProps({
  tagList: {
    type: Array as PropType<amiaTag[]>,
    default: () => {
      return [];
    }
  },
  activeTag: {
    type: String,
    default: ''
  }
});

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
    line-height: 14px;
    margin: 0 2px;
    overflow: hidden;
    padding: 5px;
    .pre-icon {
      margin-right: 5px;
    }
    .icon {
    padding: 3px;
    margin-left: 8px;
    }
    .icon:hover {
      padding: 3px;
      border-radius: 50%;
      background-color: var(--amia-tag-close-bg-color);
      scale: 1.1;
      transition: all 0.3s ease-out;
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
    color: var(--amia-tag-active-color);
    .tab-title {
      color: var(--amia-tag-active-color);
    }
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
