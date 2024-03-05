<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores/store.js'

const props = defineProps( {
  isFilters: {
    type: Boolean,
    default: true
  }
} )

const isOpenFilters = ref( false )

function openFilters() {
  isOpenFilters.value = true
}

</script>

<template>
  <div class="table-wrapper">
    <div
      class="table-wrapper__inner"
      :class="{ 'table-wrapper__inner--no-filters': !props.isFilters }"
    >
      <div class="table-wrapper__content">
        <div class="table-wrapper__title">
          <h1 class="h1">
            <slot name="title"></slot>
          </h1>
          <div class="table-wrapper__mobile-icon" @click="useStore().toggleFilterBar(true)">
            <img src="@/assets/images/icons/burger.svg" alt="">
          </div>
        </div>
        <div class="table-wrapper__list">
          <div class="table-wrapper__subtitle">
            <h2 class="t-small">
              <slot name="subtitle"></slot>
            </h2>
          </div>
          <div class="table-wrapper__list-inner">
            <slot name="items"></slot>
          </div>
        </div>
      </div>
      <div
        class="table-wrapper__filter-section"
        :class="{ 'table-wrapper__filter-section--mobile-active': useStore().isOpenFilterBar }"
      >
        <slot name="filters" :test="isOpenFilters"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.table-wrapper {
  border-radius: 12px;
  box-shadow: var(--main-shadow);
  background: rgb(54, 58, 66);
  overflow: hidden;

  &__inner {
    display: grid;
    grid-template-columns: 1fr max(398px);
    height: calc(100vh - 151px);

    @include ipadpro {
      display: flex;
      flex-direction: column;
    }

    &--no-filters {
      grid-template-columns: 1fr;
    }
  }

  &__content {
    border-radius: 12px;
    box-shadow: inset 3px 3px 5px 0 rgba(8, 7, 13, 0.25), 1px 1px 0 0 rgba(107, 102, 126, 0.49);
    background: rgb(54, 58, 66);
    height: calc(100vh - 151px);
  }

  &__title {
    padding: 12px 0 12px 16px;

    @include ipadpro {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding-right: 12px;
    }
  }

  &__subtitle {
    background: var(--black);
    padding: 8px 0 7px 16px;
  }

  &__list-inner {
    height: calc(100vh - 220px);
    overflow-y: auto;
    padding: 0 16px;

    @include ipadpro {
      padding-bottom: 30px;
    }
  }

  &__filter-section {
    @include ipadpro {
      position: absolute;
      right: 0;
      height: 100%;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    }

    &--mobile-active {
      @include ipadpro {
        transform: translateX(0);
      }
    }
  }

  &__mobile-icon {
    display: none;

    @include ipadpro {
      display: block;
      width: 25px;
    }
  }
}
</style>