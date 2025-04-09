<script setup>
import { onMounted, onUnmounted, Teleport } from 'vue'
import icons from '/icons/icons.svg'

const props = defineProps({
  modalType: {
    type: String,
    default: 'default',
  },
})

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
      <div :class="['modal', props.modalType]">
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

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--gray-color-3);
}

.modal {
  position: relative;
  padding: 20px;
  width: 500px;
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

/* Стилі для кожної модалки */

.mobile-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 218px;
  height: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: var(--orange);

  @media screen and (min-width: 768px) {
    max-width: 375px;
  }
}
</style>
