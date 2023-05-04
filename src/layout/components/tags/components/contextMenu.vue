<!-- 用于tab的右键菜单 -->
<template>
  <ul class="context-menu">
    <li v-for="(item, index) in menu" :key="index" @click="$emit(item.emit)">
      <div class="context-menu-item">
        <icon-font class="context-menu-icon" :class="[item.emit == 'closeLeft' ? 'rotate270' : '',
        item.emit == 'closeRight' ? 'rotate90' : '']"
        :icon="item.icon"> </icon-font>
        <span>{{ item.title }}</span>
      </div>
      <div v-if="item.line" class="line"></div>
    </li>
  </ul>
</template>

<script setup lang='ts'>
const menu = [
  {
    icon: 'icon-shuaxin',
    title: '重新加载',
    emit: 'reload',
  },
  {
    icon: 'icon-zuidahua',
    title: '最大化',
    emit: 'maxPage',
    line: true
  },
  {
    icon: 'icon-guanbi',
    title: '关闭标签页',
    emit: 'closeSelf',
  },
  {
    icon: 'icon-hebing',
    title: '关闭其它标签页',
    emit: 'closeOther',
  },
  {
    icon: 'icon-top',
    title: '关闭左侧标签页',
    emit: 'closeLeft',
  },
  {
    icon: 'icon-top',
    title: '关闭右侧标签页',
    emit: 'closeRight',
  }
];
</script>

<style scoped lang='scss'>
.context-menu {
  background-color: var(--amia-tags-bg-color);
  box-shadow: var(--amia-tag-contextmenu-boxshadow);
  padding: 6px 0;
  border-radius: 5px;
  li{
    cursor: pointer;
    position: relative;
    margin: 2px 0px;
  }
  li:hover::before {
    position: absolute;
    top: 10%;
    content: '';
    width: 100%;
    height: 80%;
    z-index: -1;
    background-color: var(--amia-tag-contextmenu-hover-bg-color);
  }
  .line {
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: var(--amia-tag-contextmenu-border-color);
  }
  .context-menu-item {
    z-index: 1;
    padding: 3px 20px 3px 10px;
    .context-menu-icon {
      display: inline-block;
      margin: 8px;
    }
  }
}
</style>
