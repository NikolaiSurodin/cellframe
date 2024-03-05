<script setup>
const props = defineProps( {
  title: {
    type: String,
    required: true,
    default: ''
  }
} )
</script>

<template>
  <div class="table-row-item">
    <p class="table-row-item__text t-large">{{ props.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.table-row-item {
  box-sizing: border-box;
  border-bottom: 1px solid var(--black);
  background: rgb(54, 58, 66);
  transition: 0.2s;

  &:hover {
    background: rgb(56, 60, 68);
  }

  &__text {
    padding: 13px 0;
  }
}
</style>