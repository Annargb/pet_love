import { clientFetch, setAuthHeader, clearAuthHeader } from '../clientFetch'

export const login = async (body) => {
  const { data } = await clientFetch.post('/users/signin', body)
  localStorage.setItem('token', data.token)
  setAuthHeader(data.token)
  return data
}

export const registration = async (body) => {
  const { data } = await clientFetch.post('/users/signup', body)
  setAuthHeader(data.token)
  return data
}

export const logout = async () => {
  await clientFetch.post('/users/signout')
  clearAuthHeader()
}

export const refresh = async () => {
  const { data } = await clientFetch.get('/users/current')
  return data
}

// export const login = (body) => {
//   return clientFetch.post('/users/signin', body)
// }

// export const registration = (body) => {
//   return clientFetch.post('/users/signup', body)
// }

// export const logout = () => {
//   return clientFetch.post('./users/signout')
// }

// export const refresh = () => {
//   return clientFetch.get('./users/current')
// }
