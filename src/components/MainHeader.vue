<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import BurgerMenu from './BurgerMenu.vue'
import MobileMenu from './MobileMenu.vue'
import UserNav from './UserNav.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')

const logoPaths = computed(() => ({
  mobile1x: isHomePage.value
    ? '/images/mobile/logo-mobile-white-1x.png'
    : '/images/mobile/logo-mobile-1x.png',

  mobile2x: isHomePage.value
    ? '/images/mobile/logo-mobile-white-2x.png'
    : '/images/mobile/logo-mobile-2x.png',

  tablet1x: isHomePage.value
    ? '/images/tablet/logo-universal-white-1x.png'
    : '/images/tablet/logo-universal-1x.png',

  tablet2x: isHomePage.value
    ? '/images/tablet/logo-universal-white-2x.png'
    : '/images/tablet/logo-universal-2x.png',
}))

const { width: windowWidth } = useWindowSize()
const showBurgerMenu = computed(() => windowWidth.value < 1280)
const isDesktop = computed(() => windowWidth.value >= 1280)

const isOpen = ref(false)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <header class="header" :class="{ 'header-absolute': isHomePage }">
    <router-link to="/">
      <picture>
        <source
          :srcset="`${logoPaths.mobile1x} 1x, ${logoPaths.mobile2x} 2x`"
          media="(max-width: 767px)"
        />
        <source
          :srcset="`${logoPaths.tablet1x} 1x, ${logoPaths.tablet2x} 2x`"
          media="(min-width: 768px)"
        />
        <img :src="logoPaths.mobile1x" alt="Logo" class="logo" />
      </picture>
    </router-link>
    <UserNav v-if="isDesktop" :isHomePage="isHomePage" />
    <BurgerMenu v-if="showBurgerMenu" :isHomePage="isHomePage" @openModal="openModal" />
    <MobileMenu :isOpen="isOpen" @closeModal="closeModal">
      <UserNav isInMobileMenu="true" />
    </MobileMenu>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 20px 0;

  @media screen and (min-width: 768px) {
    padding: 16px 0;
  }
}

.header-absolute {
  position: absolute;
  padding: 18px 20px 18px 20px;
  width: 100%;
  max-width: calc(100% - 40px);
  // max-width: 335px;

  @media screen and (min-width: 768px) {
    padding: 16px 32px 16px 32px;
    max-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 64px 16px 64px;
    max-width: 1216px;
  }
}

.logo {
  width: 76px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 105px;
    height: 28px;
  }
}
</style>
