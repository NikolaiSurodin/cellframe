<script setup>
import PageTableWrapper from '@/components/PageTableWrapper.vue'
import TableRowItem from '@/components/UI/TableRowItem.vue'
import AppCheckbox from '@/components/UI/AppCheckbox.vue'
import Filters from '@/components/Filters.vue'
import { ref } from 'vue'

const filterOptions = ref( [
  {
    name: 'Public certificates',
    key: 'public'
  },
] )

const selectedOptions = ref( [] )

</script>

<template>
  <div class="wallet">
    <PageTableWrapper>
      <template #title>Wallet</template>
      <template #subtitle>Public</template>
      <template #items>
        <TableRowItem
          v-for="( item, index ) in 12"
          :key="index"
          :title="`core-wallet_t.${ index }`"
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
              v-model="selectedOptions"
              id="public"
            />
          </template>
          <template #actions>
            <button class="btn">Create wallet</button>
            <button class="btn">Import wallet</button>
          </template>
        </Filters>
      </template>
    </PageTableWrapper>
  </div>
</template>

<style scoped lang="scss">

</style>