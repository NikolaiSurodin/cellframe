<script setup>
import { useStore } from '@/stores/store.js'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useStore()

watch( route, () => {
  if( store.searchValue ) {
    store.clearSearchValue()
  }
} )

const updateSearch = ( event ) => {
  useStore().setSearchValue( event.target.value )
}
</script>

<template>
  <div class="search-input t-large">
    <img
      class="search-input__icon"
      src="@/assets/images/icons/search.svg"
      alt=""
    />
    <input
      class="search-input__text t-large"
      v-model="store.searchValue"
      @input="updateSearch"
      type="text"
      placeholder="Search"
    />
  </div>
</template>

<style scoped lang="scss">
.search-input {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  color: rgb(117, 113, 132);

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  &__text {
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(57, 59, 65);
    background: transparent;
    width: 100%;
    color: var(--color-text);
    padding: 10px 0 3px 10px;

    &:focus {
      border-bottom: 1px solid rgb(57, 59, 65);
    }
  }
}

</style>