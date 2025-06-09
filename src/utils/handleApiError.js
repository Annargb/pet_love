import { toast } from 'vue3-toastify'

export const handleApiError = (error, defaultMsg = 'Щось пішло не так') => {
  let msg = defaultMsg

  const data = error?.response?.data
  console.log(data)
  console.log(error?.response?.data)
  if (typeof data === 'string') {
    msg = data
  } else if (data?.message) {
    msg = data.message
  } else if (Array.isArray(data?.errors)) {
    msg = data.errors.join(', ')
  }

  toast.error(msg)
}
