import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
})

export const setAuthHeader = (token) => {
  clientFetch.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearAuthHeader = () => {
  delete clientFetch.defaults.headers.common.Authorization
}

// clientFetch.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Можеш тут логіку для 401, 403, 500 і т.д. додати
//     console.error('API Error:', error.response?.data || error.message)
//     return Promise.reject(error)
//   },
// )
