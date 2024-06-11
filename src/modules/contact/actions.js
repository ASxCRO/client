export const actions = {
  getAllContacts({ commit }, payload) {
    commit('fetchContacts')
  },
  addContact({ commit }) {
    commit('addContact')
  }
}
