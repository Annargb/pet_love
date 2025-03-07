import * as yup from 'yup'

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7}$/

export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name'),
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(emailPattern, 'Please enter a valid email'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .matches(
      passwordPattern,
      'Password must include uppercase and lowercase letters, a number, and a special character (@$!%*?&)',
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(emailPattern, 'Please enter a valid email'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .matches(
      passwordPattern,
      'Password must include uppercase and lowercase letters, a number, and a special character (@$!%*?&)',
    ),
})
