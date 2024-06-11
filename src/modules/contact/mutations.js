import contactService from '@/services/contactService'

export const mutations = {
  fetchContacts(state) {
    return contactService
      .getAllContacts(state.currentPage, state.perPage, state.sortField, state.searchTerm)
      .then(data => {
        state.contacts = data.contacts
        state.totalPages = data.totalPages
        state.totalItemsNumber = data.totalItemsNumber
      })
  },
  editContact(state, contact) {
    state.showForm = true
    state.isEdit = true
    state.selectedContact = { ...contact }
  },
  resetContact(state) {
    state.selectedContact = {
      firstName: '',
      lastName: '',
      email: '',
      id: 0
    }
  },
  addContact(state) {
    state.selectedContact = {}
    state.isEdit = false
    state.showForm = true
  }
}
