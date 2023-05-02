<!-- 菜单递归组件，生成多级菜单 -->
<template>
  <template v-for="item in childrens" :key="item.path">
    <!-- 如果还有children -->
    <el-sub-menu :index="(item as amiaRoute).path" v-if="(item as amiaRoute).children && (item as amiaRoute).children.length > 0">
      <template #title>
        <icon-font v-if="(item as amiaRoute).meta.icon" :icon="(item as amiaRoute).meta.icon"></icon-font>
        <span class="menu-title">{{(item as amiaRoute).meta.title }}</span>
      </template>
      <sub-menu :childrens="(item as amiaRoute).children"></sub-menu>
    </el-sub-menu>
    <!-- 否则 -->
    <template v-else>
      <el-menu-item :index="(item as amiaRoute).path">
        <template #title>
          <icon-font v-if="(item as amiaRoute).meta.icon" :icon="(item as amiaRoute).meta.icon"></icon-font>
          <span class="menu-title">{{(item as amiaRoute).meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang='ts'>
import type { amiaRoute } from '@/router/types/route';
import { computed, PropType } from 'vue';
const props = defineProps({
  childrens: {
    type: [Array, Object] as PropType<amiaRoute[] | amiaRoute>,
    // type: Array as PropType<amiaRoute[]>,
    default: () => {
      return [];
    }
  }
});
const childrens = computed(() => {
  return props.childrens;
});
console.log("子菜单：", childrens)
</script>

<style scoped lang='scss'>

</style>
