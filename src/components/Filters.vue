<script setup>
import { useStore } from '@/stores/store.js'

const props = defineProps( {
  title: {
    type: String,
    required: true,
    default: 'Filter'
  },
  actionsTitle: {
    type: String,
    required: true,
    default: 'Actions'
  },
} )
</script>

<template>
  <section class="filters">
    <div class="filters__mobile-icon" @click="useStore().toggleFilterBar( false )">
      <img src="@/assets/images/icons/close.svg" alt="">
    </div>
    <div class="filters__wrapper">
      <div class="filters__title">
        <h1 class="h1">{{ props.title }}</h1>
      </div>
      <div class="filters__inner">
        <slot name="inner"></slot>
      </div>
      <div class="filters__actions">
        <div class="filters__action-title">
          <h1 class="h1">{{ props.actionsTitle }}</h1>
        </div>
        <div class="filters__actions__inner">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.filters {
  padding: 0 40px;
  border-radius: 12px;
  box-shadow: inset 3px 3px 5px 0 rgba(8, 7, 13, 0.25), 1px 1px 0 0 rgba(107, 102, 126, 0.49);
  background: var(--black);
  height: 100%;
  position: relative;

  &__mobile-icon {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;

    @include ipadpro {
      display: block;
    }
  }

  &__title {
    padding: 12px 0;
  }

  &__actions {
    max-width: 318px;
    width: 100%;
  }

  &__inner, &__actions__inner {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin: 10px 0 38px 0;
  }

  &__actions__inner {
    margin: 25px 0;
    gap: 20px;
  }
}
</style>