<!-- 首页：展示系统的一些数据信息 -->
<template>
  <div>
    <button @click="reload">刷新</button>
    我是首页！！
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const replace = useRouter().replace;
function reload() {
  replace({
    path: '/redirect/home'
  })
}
</script>

<style scoped lang='scss'>

</style>
