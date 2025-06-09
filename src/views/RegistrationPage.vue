<script setup>
import { useRouter } from 'vue-router'
import { registration } from '../api/user'
import { handleApiError } from '../utils/handleApiError'
import BaseLayout from '@/layouts/BaseLayout.vue'
import PetBlock from '../components/PetBlock.vue'
import RegistrationForm from '../components/RegistrationForm.vue'

const router = useRouter()

const handleRegistrationUser = async (userData) => {
  try {
    const data = await registration(userData)
    router.replace('/profile')
    console.log(data)
  } catch (error) {
    handleApiError(error, 'User registration failed')
  }
}
</script>

<template>
  <BaseLayout>
    <div class="registration-page-container">
      <PetBlock animal="cat" />
      <RegistrationForm @submit="handleRegistrationUser" />
    </div>
  </BaseLayout>
</template>

<style scoped lang="scss">
.registration-page-container {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
}
</style>
