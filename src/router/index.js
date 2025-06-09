import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const RegistrationPage = () => import('../views/RegistrationPage.vue')
const LoginPage = () => import('../views/LoginPage.vue')
const ProfilePage = () => import('../views/ProfilePage.vue')
const NewsPage = () => import('../views/NewsPage.vue')
const NoticesPage = () => import('../views/NoticesPage.vue')
const FriendsPage = () => import('../views/FriendsPage.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegistrationPage },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
  { path: '/news', component: NewsPage },
  { path: '/notices', component: NoticesPage },
  { path: '/friends', component: FriendsPage },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
