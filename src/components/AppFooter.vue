<script setup>
import { footerNav } from '@/const/navigation.js'
</script>

<template>
  <footer class="footer">
    <ul class="footer__nav-list">
      <li
        class="footer__nav-item t-small"
        v-for="( item, index ) in footerNav"
        :key="index"
      >
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  height: 42px;
  box-shadow: 5px -5px 10px 0px rgba(8, 7, 13, 0.42), inset 1px 1px 0px 0px rgb(82, 77, 100);
  background: var(--black);

  &__nav-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    padding: 0 50px;
    height: 100%;
    width: 100%;

    @include phone_wide {
      padding: 0 12px;
    }
  }

  &__nav-item {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      margin-left: 6px;
    }
  }
}
</style>