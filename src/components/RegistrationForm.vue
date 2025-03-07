<script setup>
import { reactive, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { registerSchema } from '../utils/validationSchemas.js'
import CommonTitle from './CommonTitle.vue'
import FormInput from './FormInput.vue'
import FormButton from './FormButton.vue'

// const emit = defineEmits(['submit'])
// const userData = reactive({
//   name: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// })

const { handleSubmit } = useForm({
  validationSchema: registerSchema,
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword')

const successMessages = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

watchEffect(() => {
  successMessages.name = name.value && !nameError.value ? 'Name is valid' : ''
  successMessages.email = email.value && !emailError.value ? 'Email is valid' : ''
  successMessages.password = password.value && !passwordError.value ? 'Password is secure' : ''
  successMessages.confirmPassword =
    confirmPassword.value && !confirmPasswordError.value ? 'Passwords match' : ''
})

const onSubmit = handleSubmit(({ name, email, password }) => {
  console.log('Form submitted with values:', { name, email, password })
})
</script>

<template>
  <div class="register-wrapper">
    <CommonTitle>Registration</CommonTitle>
    <p class="register-text">Thank you for your interest in our platform.</p>
    <form @submit.prevent="onSubmit" class="register-form">
      <div class="input-wrapper">
        <FormInput
          v-model="name"
          type="text"
          placeholder="Name"
          :error="nameError"
          :successMessage="successMessages.name"
        />

        <FormInput
          v-model="email"
          type="email"
          placeholder="Email"
          :error="emailError"
          :successMessage="successMessages.email"
        />

        <FormInput
          v-model="password"
          type="password"
          placeholder="Password"
          :error="passwordError"
          :successMessage="successMessages.password"
        />

        <FormInput
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          :error="confirmPasswordError"
          :successMessage="successMessages.confirmPassword"
        />
      </div>
      <FormButton type="submit">Registration</FormButton>
    </form>
    <p class="register-footnote">
      Already have an account?
      <router-link to="login" class="register-link">Login</router-link>
    </p>
  </div>
</template>

<style scoped lang="scss">
.register-wrapper {
  width: 100%;
  max-width: 335px;
  height: 422px;
  padding: 20px;
  border-radius: 30px;
  background-color: var(--white);

  @media screen and (min-width: 768px) {
    max-width: 704px;
    width: 704px;
    height: 560px;
    padding: 26px 140px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 592px;
    width: 592px;
    height: 654px;
    padding: 68px 84px;
  }
}

.register-text {
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.22;
  }
}

.register-form {
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 34px;
  }
}

.register-footnote {
  margin-top: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: var(--gray-color);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.43;
  }
}

.register-link {
  color: var(--orange);
  text-decoration: none;
  transition: color var(--transition);

  &:hover {
    color: var(--orange-1);
  }
}
</style>
