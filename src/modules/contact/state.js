export const state = {
  contacts: [],
  isEdit: false,
  showForm: false,
  selectedContact: {
    firstName: '',
    lastName: '',
    email: '',
    id: 0
  },
  totalPages: 0,
  totalItemsNumber: 0,
  searchTerm: '',
  perPage: 10,
  currentPage: 1,
  sortField: 'Id'
}
