export default {
  // Vue commit object (comes from VueX) are used to call mutations for us
  // Need to use { } to pull the commit method off of context
  // appendPet is our custom mutation function
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
