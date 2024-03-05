<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { nav } from '@/const/navigation.js'

const emit = defineEmits( [ 'closeSideBar' ] )

const route = useRoute()
watch( route, () => {
  emit( 'closeSideBar' )
} )

const getImageUrl = ( icon ) => {
  return new URL( `/src/assets/images/icons/${ icon }.svg`, import.meta.url ).href
}

</script>

<template>
  <div class="sidebar">
    <div class="sidebar__mobile-icon" @click="emit( 'closeSideBar' )">
      <img src="@/assets/images/icons/arrow.svg" alt="">
    </div>
    <section class="sidebar__logo">
      <img src="../assets/images/icons/cellframe-logo.svg" alt="logo" />
    </section>

    <ul class="sidebar__navigation">
      <li
        v-for="( link, index ) in nav"
        :key="index"
      >
        <router-link
          class="sidebar__link nav-link"
          :to="link.path"
        >
          <img :src="getImageUrl( link.icon )" alt="icon">
          <span class="text-menu">{{ link.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);

  @include phone_wide {
    padding: 15px 15px 3px 0;
    height: 100%;
  }

  &__mobile-icon {
    display: none;

    @include phone_wide {
      background: var(--black);
      display: flex;
      justify-content: center;
      width: 100%;
      height: 25px;
    }

    img {
      transform: rotate(180deg);
    }
  }

  &__logo {
    width: calc(100% - 22px);

    img {
      position: relative;
      top: 6px;
    }
  }

  &__navigation {
    max-height: 100vh;
    overflow-y: auto;
    width: 100%;
    padding: 10px 10px 4px 3px;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 14px 0 14px 21px;
    border-radius: 0 16px 16px 0;

    & img {
      width: 24px;
      height: 24px;
    }

    & span {
      color: var(--color-text);
      padding-left: 16px;
    }
  }
}
</style>