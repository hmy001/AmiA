<script setup lang="ts">
import { usePersistentStore } from '@/stores/persistent';
const persistentStore = usePersistentStore();
persistentStore.windowBeforUnload();
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
