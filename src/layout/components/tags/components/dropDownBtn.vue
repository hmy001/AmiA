<!-- 下拉按钮：tabs快捷操作 -->
<template>
  <div class="drop-down">
    <icon-font class="icon" @click="dropDown" :class="[isdropDown ? 'rotate180' : '']" icon="icon-xiangxia"></icon-font>
    <!-- 下拉菜单 -->
    <div class="drop-down-menu triangle">
      <!-- 标签关闭按钮 -->
      <div class="menu-top">
        <icon-font class="icon" :class="[menuInfo.hasOther ? '' : 'disabled']"  icon="icon-guanbi" @click="closeOther" title="关闭其他标签页"></icon-font>
        <icon-font class="icon rotate270" :class="[menuInfo.hasLeft ? '' : 'disabled']" icon="icon-top" @click="closeLeft" title="关闭左侧标签页"></icon-font>
        <icon-font class="icon rotate90" :class="[menuInfo.hasRight ? '' : 'disabled']" icon="icon-top" @click="closeRight" title="关闭右侧标签页"></icon-font>
      </div>
      <!-- 导航列表 -->
      <ul class="menu-main">
        <el-scrollbar max-height="300px">
          <li v-for="(item, index) in menuList" :key="index" :class="[activeMenu == item.path ? 'active' : '']" @click="$emit('menuClick', item)">
            <icon-font class="icon" :icon="item.icon"></icon-font>
            <span class="menu-title">{{ item.title }}</span>
            <icon-font v-if="menuList.length > 1" @click.stop="$emit('menuClose', item)" class="icon icon-close" icon="icon-cuowuguanbiquxiao" title="关闭此标签页"></icon-font>
          </li>
        </el-scrollbar>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
// 类型
import type { cacheTagsInfo } from '../type';

import { ref, PropType } from 'vue';
import { Tools } from '@/utils/tools';

const props = defineProps({
  menuList: { // 菜单列表
    type: Array<amiaTag>,
    default: () => {
      return [];
    }
  },
  activeMenu: { // 当前高亮的菜单
    type: String,
    default: ''
  },
  menuInfo: {
    type: Object as PropType<cacheTagsInfo>,
    default: () => {
      return {
        hasLeft: false,
        hasRight: false,
        hasOther: false
      };
    }
  }
});
const emit = defineEmits(['dropDown', 'closeOther', 'closeLeft', 'closeRight']);
const isdropDown = ref(false);

// 函数
const dropDown = Tools.debounce(() => { // 下拉菜单
  isdropDown.value = !isdropDown.value;
  emit('dropDown');
}, 200);
function closeOther() { // 关闭其他
  emit('closeOther', {path: props.activeMenu});
}
function closeLeft() {  // 关闭左边
  emit('closeLeft', {path: props.activeMenu});
}
function closeRight() { // 关闭右边
  emit('closeRight', {path: props.activeMenu});
}
</script>

<style scoped lang='scss'>

.drop-down {
  position: relative;
  .icon {
    display: inline-block;
    transition: all 0.2s;
  }
  .drop-down-menu {
    color: var(--amia-tag-dropdown-menu-color);
    position: absolute;
    top: $amia-tags-height;
    right: 7px;
    z-index: 666;
    background-color: var(--amia-tags-bg-color);
    box-shadow: var(--amia-tag-contextmenu-boxshadow);
    padding: 10px 0;
    border-radius: 5px;
    width: 200px;
    max-height: 300px;
    .menu-top {
      padding: 0px 15px 5px 10px;
      .icon {
        cursor: pointer;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: var(--amia-tag-contextmenu-hover-bg-color);
      }
    }
    .menu-main {
      padding: 0px 15px;
      li {
        position: relative;
        padding: 8px 20px 8px 5px;
        border-radius: 5px;
        line-height: 14px;
        display: flex;
        flex-wrap: nowrap;
        .icon {
          margin-right: 5px;
        }
        .icon-close {
          display: none;
        }
        &:hover>.icon-close {
          display: block;
          position: absolute;
          right: -3px;
          bottom: 4px;
          line-height: 14px;
          cursor: pointer;
          padding: 3px;
          border-radius: 50%;
          &:hover{
            background-color: var(--amia-tag-dropdown-menu-active-bg-color);
          }
        }
        .menu-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      li:hover {
        background-color: var(--amia-tag-contextmenu-hover-bg-color);
      }
    }
  }
}
.triangle {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 5px;
    top: -8px;
    width: 0px;
    height: 0px;
    border-bottom: solid 8px #fff;
    border-left: solid 6px transparent;
    border-right: solid 6px transparent;
  }
}
.active {
  background-color: var(--amia-tag-dropdown-menu-active-bg-color) !important;
}
.disabled {
  cursor: not-allowed !important;
  color: var(--amia-tag-dropdown--btn-disabled-color) !important;
}
</style>
