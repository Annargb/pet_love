import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', () => {
  const route = useRoute()
  const isHomePage = computed(() => route.path === '/')

  return { isHomePage }
})
