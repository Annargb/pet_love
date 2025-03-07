<script setup>
import icons from '/icons/icons.svg'

const props = defineProps({
  isVisiblePassword: Boolean,
})

const emit = defineEmits(['changeVisibility'])
</script>

<template>
  <button class="password-btn" type="button" @click="emit('changeVisibility')">
    <svg class="password-icon">
      <use :href="props.isVisiblePassword ? `${icons}#icon-eye` : `${icons}#icon-eye-off`" />
    </svg>
  </button>
</template>

<style scoped>
.password-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
}

.password-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}
</style>
