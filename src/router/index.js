import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const RegistrationPage = () => import('../views/RegistrationPage.vue')
const LoginPage = () => import('../views/LoginPage.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegistrationPage },
  { path: '/login', component: LoginPage },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
