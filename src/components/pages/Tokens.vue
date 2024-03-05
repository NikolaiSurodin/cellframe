<script setup>
import PageTableWrapper from '@/components/PageTableWrapper.vue'
import TableRowItem from '@/components/UI/TableRowItem.vue'
import Filters from '@/components/Filters.vue'
import { useFetchData } from '@/composables/loadData.js'

const { data } = useFetchData( 'token', 10 )

</script>

<template>
  <div class="tokens">
    <PageTableWrapper>
      <template #title>Tokens</template>
      <template #subtitle>Private</template>
      <template #items>
        <TableRowItem
          v-for="( item, index ) in data"
          :key="index"
          :title="item.name"
        />
      </template>
      <template #filters>
        <Filters title="Filter" actions-title="Actions">
          <template #actions>
            <button class="btn">Create token</button>
            <button class="btn">Import token</button>
          </template>
        </Filters>
      </template>
    </PageTableWrapper>
  </div>
</template>

<style scoped lang="scss">

</style>