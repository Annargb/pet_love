<script setup>
import { onMounted, onUnmounted, Teleport } from 'vue'
import icons from '/icons/icons.svg'

const emit = defineEmits(['closeModal'])

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'initial'
})
</script>

<template>
  <component :is="Teleport" to="body">
    <div class="overlay" @click.self="emit('closeModal')">
      <div class="modal">
        <button class="close-btn" type="button" @click="emit('closeModal')">
          <svg class="close-icon">
            <use :href="`${icons}#icon-cross`" />
          </svg>
        </button>
        <slot></slot>
      </div>
    </div>
  </component>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--gray-color-3);
}

.modal {
  position: absolute;
  right: 0;
  max-width: 375px;
  height: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: var(--orange);
}

.close-btn {
  position: absolute;
  top: 28px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
}

.close-icon {
  width: 32px;
  height: 32px;
  fill: var(--white);
}
</style>
