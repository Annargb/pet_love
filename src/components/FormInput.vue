<script setup>
import { ref, computed } from 'vue'
import PasswordButton from './PasswordButton.vue'
import icons from '/icons/icons.svg'

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  },
  error: String,
  successMessage: String,
  showToggle: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const isVisiblePassword = ref(false)

const inputType = computed(() => {
  if (props.type === 'password') {
    return isVisiblePassword.value ? 'text' : 'password'
  }
  return props.type
})

const toggleVisibility = () => {
  isVisiblePassword.value = !isVisiblePassword.value
}

const inputClass = computed(() => {
  if (props.error) return 'input-error'
  if (props.successMessage) return 'input-success'
  return 'input-default'
})

const iconName = computed(() => {
  if (props.error) return 'icon-cross'
  if (props.successMessage) return 'icon-check'
  return ''
})
</script>

<template>
  <div class="input-container">
    <label class="label">
      <input
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :class="inputClass"
      />

      <svg v-if="iconName" class="input-icon" :class="iconName">
        <use :href="`${icons}#${iconName}`"></use>
      </svg>

      <PasswordButton
        v-if="type === 'password'"
        :isVisiblePassword="isVisiblePassword"
        @changeVisibility="toggleVisibility"
      />
    </label>

    <p v-if="error" class="error-message">{{ error }}</p>
    <p v-else-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 295px;

  @media screen and (min-width: 768px) {
    max-width: 424px;
  }
}

.label {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

input {
  flex: 1;
  width: 100%;
  padding: 12px 32px 12px 12px;
  height: 42px;
  border: 1px solid;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--gray-color);
  outline: none;
  transition: border-color var(--transition);

  @media screen and (min-width: 768px) {
    padding: 16px 32px 16px 16px;
    height: 52px;
    font-size: 16px;
    line-height: 1.25;
  }
}

.input-default {
  border-color: var(--gray-color-2);

  &:focus {
    border-color: var(--orange);
  }
}

.input-error {
  border-color: var(--red);
}

.input-success {
  border-color: var(--green);
}

.error-message,
.success-message {
  position: absolute;
  top: 43px;
  padding-left: 12px;
  font-weight: 500;
  font-size: 6px;
  line-height: 1;
  letter-spacing: -0.03em;

  @media screen and (min-width: 768px) {
    top: 54px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.2;
  }
}

.error-message {
  color: var(--red);
}

.success-message {
  color: var(--green);
}

.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  width: 18px;
  height: 18px;
  fill: currentColor;

  &.icon-cross {
    fill: var(--red);
  }
}

.label:has(.password-btn) .input-icon {
  right: 38px;
}
</style>
