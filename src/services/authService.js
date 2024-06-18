import Vue from 'vue'
import VueResource from 'vue-resource'
import router from '@/router'

Vue.use(VueResource)

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL

Vue.http.interceptors.push((request, next) => {
  const token = localStorage.getItem('token')
  if (token) {
    request.headers.set('Authorization', `Bearer ${token}`)
  }

  next(response => {
    if (response.status === 401) {
      router.push('/logout')
    } else if (response.status === 500) {
      router.push('/error')
    }
  })
})

const authService = {
  login(username, password) {
    return Vue.http
      .post(`${API_BASE_URL}/auth/login`, { username, password })
      .then(response => response.body)
      .catch(error => {
        console.error('Error logging in:', error)
        throw error
      })
  },

  register(username, password, fullName) {
    return Vue.http
      .post(`${API_BASE_URL}/auth/register`, { username, password, fullName })
      .then(response => response.body)
      .catch(error => {
        console.error('Error registering:', error)
        throw error
      })
  },

  logout() {
    localStorage.removeItem('token')
  }
}

export default authService
