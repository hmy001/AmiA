<!-- 用于重载某个页面的中转站：模拟页面刷新 -->
<template>
  <div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const { currentRoute, replace} = useRouter();
const { params, query} = currentRoute.value; // 解构出来的还是ref对象
// 重载：哪来的回哪去
replace({
  path: "/" + params.path,
  query
});
</script>

<style scoped lang='scss'>

</style>
