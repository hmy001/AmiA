<template>
  <div class="w100 content">
    <iconFont icon="batj-icon-keshichangguitijian"></iconFont>
    <iconFont icon="&#xe61d;" iconType="unicode"></iconFont>
    <iconFont icon="batj-icon-keshichangguitijian" iconType="symbol" style="font-size: 16px;"></iconFont>
      <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import iconFont from '@/components/iconFont/index.vue';
</script>

<style scoped lang='scss'>
.content {
  // height: 2000px;
}
</style>
