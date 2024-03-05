import { defineStore } from 'pinia'

export const useStore = defineStore( 'store', {
  state: () => ( {
    searchValue: '',
    isOpenFilterBar: false
  } ),
  actions: {
    setSearchValue( value ) {
      this.searchValue = value
    },
    clearSearchValue() {
      this.searchValue = ''
    },
    toggleFilterBar( value ) {
      this.isOpenFilterBar = value
    }
  },
} )