import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const contactsModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
