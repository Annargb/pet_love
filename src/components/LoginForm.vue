<script setup>
import { reactive, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { loginSchema } from '../utils/validationSchemas.js'
import CommonTitle from './CommonTitle.vue'
import FormInput from './FormInput.vue'
import FormButton from './FormButton.vue'

const { handleSubmit } = useForm({
  validationSchema: loginSchema,
})

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

const successMessages = reactive({
  email: '',
  password: '',
})

watchEffect(() => {
  successMessages.email = email.value && !emailError.value ? 'Email is valid' : ''
  successMessages.password = password.value && !passwordError.value ? 'Password is secure' : ''
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted with values:', values)
})
</script>

<template>
  <section class="login-wrapper">
    <CommonTitle>Log in</CommonTitle>
    <p class="login-text">Welcome! Please enter your credentials to login to the platform:</p>
    <form @submit.prevent="onSubmit" class="login-form">
      <div class="input-wrapper">
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
      </div>
      <FormButton type="submit">Log in</FormButton>
    </form>
    <p class="login-footnote">
      Don’t have an account?
      <router-link to="register" class="login-link">Register</router-link>
    </p>
  </section>
</template>

<style scoped lang="scss">
.login-wrapper {
  width: 100%;
  max-width: 335px;
  height: 422px;
  padding: 55px 20px;
  border-radius: 30px;
  background-color: var(--white);

  @media screen and (min-width: 768px) {
    max-width: 704px;
    width: 704px;
    height: 560px;
    padding: 71px 140px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 592px;
    width: 592px;
    height: 654px;
    padding: 114px 84px;
  }
}

.login-text {
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

.login-form {
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 72px;
  }
}

.login-footnote {
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

.login-link {
  color: var(--orange);
  text-decoration: none;
  transition: color var(--transition);

  &:hover {
    color: var(--orange-1);
  }
}
</style>
