<script setup>
import { useRouter } from 'vue-router'
import { logout } from '../api/user'
import { handleApiError } from '../utils/handleApiError'

const router = useRouter()

const handleLogOutUser = async () => {
  try {
    const data = await logout()
    router.replace('/')
    console.log(data)
  } catch (error) {
    handleApiError(error, 'User logout failed')
  }
}
</script>

<template>
  <button type="button" class="logout-btn" @click="handleLogOutUser">Log out</button>
</template>

<style scoped lang="scss">
.logout-btn {
  min-width: 178px;
  height: 42px;
  padding: 12px 60px;
  background-color: var(--light-orange);
  border: 1px solid var(--light-orange);
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--white);
  transition: border var(--transition);

  @media screen and (min-width: 768px) {
    min-width: 136px;
    height: 50px;
    padding: 15px 35px;
    font-size: 16px;
    line-height: 1.25;
  }
}
</style>
