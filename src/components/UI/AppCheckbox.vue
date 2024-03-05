<script setup>
import { computed } from "vue"

const props = defineProps( {
  modelValue: {
    type: [ Array, Boolean ]
  },
  value: {
    type: [ Boolean, Object ]
  },
  label: {
    type: String
  },
} )
const emit = defineEmits( [ "update:modelValue" ] )
const model = computed( {
  get() {
    return props.modelValue
  },
  set( value ) {
    emit( "update:modelValue", value )
  },
} );
</script>

<template>
  <div class="default-checkbox">
    <label class="t-large">
      <input
        type="checkbox"
        class="checkbox"
        v-model="model"
        :value="value"
      />
      <span>{{ props.label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.default-checkbox {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  label {
    margin-left: 36px;
    cursor: pointer;
  }

  .checkbox {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: none;
    position: absolute;
    left: 0;
    background: var(--color-background);
    box-shadow: inset 1px 1px 3px 0 rgba(77, 85, 99, 0.52), 2px 2px 5px 0 rgba(8, 7, 13, 0.42);
    cursor: pointer;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgb(113, 117, 128);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.4s;
    }

    &:checked {
      background: var(--button-hover-background);
      transition: all 0.4s;

      &::before {
        display: block;
        background: var(--color-background);
      }
    }
  }
}

</style>