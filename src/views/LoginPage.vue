<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import PetBlock from '../components/PetBlock.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <BaseLayout>
    <div class="login-page-container">
      <PetBlock animal="dog" />
      <LoginForm @submit="console.log" />
    </div>
  </BaseLayout>
</template>

<style scoped lang="scss">
.login-page-container {
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
