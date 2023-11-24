import api from './config'

export async function login(loginData) {
  const {data} = await api.post('/auth/login', loginData)
  return data
}

export async function signup(signupData) {
  const {data} = await api.post('/auth/signup', signupData)
  return data
}


