<script setup>
import SearchInput from '@/components/UI/SearchInput.vue'

const emit = defineEmits( [ 'showSideBar' ] )

</script>

<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__mobile-icon" @click="emit( 'showSideBar' )">
        <img src="@/assets/images/icons/burger.svg" alt="">
      </div>
      <div class="header__search">
        <SearchInput />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/mixins";

.header {
  border-radius: 0 0 0 16px;
  background: var(--black);
  box-shadow: inset 1px 1px 0 0 rgb(82, 77, 100), 5px 5px 10px 0 rgba(8, 7, 13, 0.42);

  &__inner {
    display: flex;
    align-items: center;
    padding: 7px 0 12px 36px;

    @include phone_wide {
      padding: 7px 0 12px 12px;
    }
  }

  &__search {
    width: 224px;

    @include phone_wide {
      margin-left: 12px;
    }
  }

  &__mobile-icon {
    display: none;

    @include phone_wide {
      display: flex;
      width: 30px;
    }
  }
}
</style>