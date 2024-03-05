<script setup>
import TableRowItem from '@/components/UI/TableRowItem.vue'
import PageTableWrapper from '@/components/PageTableWrapper.vue'
import { useFetchData } from '@/composables/loadData.js'

const { data } = useFetchData( 'tx', 22 )

</script>

<template>
  <div class="explorer">
    <PageTableWrapper :is-filters="false">
      <template #title>TX Explorer</template>
      <template #subtitle>Private</template>
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