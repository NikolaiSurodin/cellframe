<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import TableRowItem from '@/components/UI/TableRowItem.vue'
import AppCheckbox from '@/components/UI/AppCheckbox.vue'
import Filters from '@/components/Filters.vue'
import PageTableWrapper from '@/components/PageTableWrapper.vue'
import { useStore } from '@/stores/store.js'
import { useFetchData } from '@/composables/loadData.js'

const { data } = useFetchData( 'certificate',  30 )

const filterOptions = ref( [
  {
    name: 'Public certificates',
    key: 'public'
  },
  {
    name: 'Private certificates',
    key: 'private'

  },
  {
    name: 'Both',
    key: 'both'
  }
] )

const selectedOptionList = ref( [] )

const filterItems = computed( () => {
  return data.value.filter( el => {
    return el.name.toLowerCase().includes( useStore().searchValue.toLowerCase() )
  } )
} )

</script>

<template>
  <div class="certificates">
    <PageTableWrapper>
      <template #title>Certificates</template>
      <template #subtitle>Public</template>
      <template #items>
        <TableRowItem
          v-for="( item, index ) in filterItems"
          :key="index"
          :title="item.name"
        />
      </template>
      <template #filters>
        <Filters title="Filter" actions-title="Actions">
          <template #inner>
            <AppCheckbox
              v-for="( item, index ) in filterOptions"
              :key="index"
              :label="item.name"
              :value="item"
              v-model="selectedOptionList"
            />
          </template>
          <template #actions>
            <button class="btn">Create certificate</button>
            <button class="btn">Import certificate</button>
            <button class="btn" disabled>Export private certificate to public</button>
            <button class="btn" disabled>Export certificate to mempool</button>
            <button class="btn" disabled>Delete certificate</button>
          </template>
        </Filters>
      </template>
    </PageTableWrapper>
  </div>
</template>

<style scoped lang="scss">

</style>