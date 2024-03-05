<script setup>
import { RouterView } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <section class="main">
    <RouterView />
  </section>
  <AppFooter />
</template>

<style scoped>
.main {
  height: calc(100vh - 46px);
  position: relative;
  overflow: hidden;
}
</style>
