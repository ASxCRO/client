import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL

const contactService = {
  addContact(contact) {
    return Vue.http
      .post(`${API_BASE_URL}/contact`, contact)
      .then(response => response.body)
      .catch(error => {
        console.error('Error adding contact:', error)
        throw error
      })
  },

  getAllContacts(pageNumber, pageSize, sortField, term) {
    const params = { pageNumber, pageSize, sortField, term }
    return Vue.http
      .get(`${API_BASE_URL}/contact`, { params })
      .then(response => response.body)
      .catch(error => {
        console.error('Error fetching contacts:', error)
        throw error
      })
  },

  getContactById(id) {
    return Vue.http
      .get(`${API_BASE_URL}/contact/${id}`)
      .then(response => response.body)
      .catch(error => {
        console.error('Error fetching contact:', error)
        throw error
      })
  },

  updateContact(id, contact) {
    return Vue.http
      .put(`${API_BASE_URL}/contact/${id}`, contact)
      .then(response => response.body)
      .catch(error => {
        console.error('Error updating contact:', error)
        throw error
      })
  },

  deleteContact(id) {
    return Vue.http
      .delete(`${API_BASE_URL}/contact/${id}`)
      .then(response => response.body)
      .catch(error => {
        console.error('Error deleting contact:', error)
        throw error
      })
  }
}

export default contactService
