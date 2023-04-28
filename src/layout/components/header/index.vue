<template>
  <div class="header">
    <slot name="header-left"></slot>
    <slot name="header-middle"></slot>
    <slot name="header-right"></slot>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: $amia-header-height;
  min-height: $amia-header-height;
  box-sizing: border-box;
  border-bottom: solid 1px var(--amia-header-border-color);
  background-color: var(--amia-header-bg-color);
}
</style>
