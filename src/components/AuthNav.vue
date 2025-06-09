<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: false,
  },
  isInMobileMenu: {
    type: Boolean,
    default: false,
  },
})

const links = [
  { label: 'Register', path: '/register' },
  { label: 'Login', path: '/login' },
]
</script>

<template>
  <nav :class="['nav-wrapper', { 'mobile-nav-wrapper': props.isInMobileMenu }]">
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="link"
      :class="isHomePage ? 'home-style' : 'default-style'"
    >
      {{ link.label }}
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.mobile-nav-wrapper {
  flex-direction: column;
  margin-top: 196px;
}

.link {
  min-width: 80px;
  height: 50px;
  padding: 15px 20px;
  border: 1px solid var(--gray-color-2);
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-decoration: none;
  transition: border var(--transition);
}

.default-style {
  color: var(--text-color);
  border-color: var(--gray-color-2);

  &:hover {
    border-color: var(--orange);
  }
}

.home-style {
  color: var(--white);
  border-color: var(--white-1);

  &:hover {
    border-color: var(--light-orange);
  }
}

.router-link-active {
  border: 1px solid #f6b83d;
}
</style>
