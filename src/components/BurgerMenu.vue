<script setup>
import { computed } from 'vue'
import icons from '/icons/icons.svg'

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: false,
  },
})

const iconColor = computed(() => (props.isHomePage ? 'var(--white)' : 'var(--text-color)'))
</script>

<template>
  <button type="button" class="burger-btn">
    <svg class="burger-icon" :style="{ fill: iconColor }">
      <use :href="`${icons}#icon-menu`"></use>
    </svg>
  </button>
</template>

<style scoped>
.burger-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger-icon {
  width: 32px;
  height: 32px;
}
</style>
