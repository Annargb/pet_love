<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import PetBlock from '../components/PetBlock.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
</script>

<template>
  <BaseLayout>
    <div class="registration-page-container">
      <PetBlock animal="cat" />
      <RegistrationForm @submit="console.log" />
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
