<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'
import AppHeader from '@/components/AppHeader.vue'

const isShowSideBar = ref( false )

function toggleSideBar( value ) {
  isShowSideBar.value = value
}

</script>

<template>
  <div class="home-view">
    <div
      class="home-view__sidebar"
      :class="{ 'home-view__sidebar--mobile-show': isShowSideBar }"
    >
      <SideBar @close-side-bar="toggleSideBar( false )" />
    </div>
    <section class="home-view__main">
      <div class="home-view__header">
        <AppHeader @show-side-bar="toggleSideBar( true )" />
      </div>
      <div class="home-view__content">
        <router-view />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins";

.home-view {
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: var(--color-background);
  gap: 3px;

  @include phone_wide {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  &__sidebar {
    height: calc(100% - 46px);
    box-shadow: 5px 5px 10px 0 rgba(8, 7, 13, 0.42), inset 1px 1px 0 0 rgb(82, 77, 100);
    border-bottom-right-radius: 25px;

    @include phone_wide {
      position: absolute;
      left: 0;
      height: 100%;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
    }

    &--mobile-show {
      transform: translateX(0);
    }
  }

  &__content {
    background-color: var(--color-background);
    padding: 18px 0 0 21px;

    @include phone_wide {
      padding: 18px 0 0 12px;
    }
  }

  &__main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 4px 0;
    height: 100vh;
  }
}

</style>
