<template>
  <div>
    <p>menu1-1:多级菜单（此处的页面是为了测试多级菜单缓存，虽然路由是多级的，但是实际上只是导航栏显示的是多级的，内部vue-router使用的是处理过的路由结构，实际上用的是不超过二维的数组而已）</p>
    <p></p>
    <el-input v-model="inputValue" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
let inputValue = ref('');
</script>

<style scoped lang='scss'>

</style>
