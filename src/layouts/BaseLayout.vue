<script setup>
import AppContainer from '@/components/AppContainer.vue'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <AppContainer>
    <MainHeader />
    <main>
      <slot></slot>
    </main>
  </AppContainer>
</template>
