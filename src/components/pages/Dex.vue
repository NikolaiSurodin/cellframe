<script setup>
import PageTableWrapper from '@/components/PageTableWrapper.vue'
import TableRowItem from '@/components/UI/TableRowItem.vue'
import { useFetchData } from '@/composables/loadData.js'

const { data } = useFetchData( 'dex', 8 )

</script>

<template>
  <div class="dex">
    <PageTableWrapper :is-filters="false">
      <template #title>Dex</template>
      <template #items>
        <TableRowItem
          v-for="( item, index ) in data"
          :key="index"
          :title="item.name"
        />
      </template>
    </PageTableWrapper>
  </div>
</template>

<style scoped lang="scss">

</style>