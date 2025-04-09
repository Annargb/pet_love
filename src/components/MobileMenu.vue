<script setup>
import ModalPopup from './ModalPopup.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})
</script>

<template>
  <ModalPopup v-if="props.isOpen" modalType="mobile-menu">
    <slot></slot>
  </ModalPopup>
</template>
