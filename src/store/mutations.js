// Mutations are meant to update state for us
// We use the actions to call the mutations that then update state

export default {
  // appendPet has two parameters: application state comes from VueX and pet is our payload we are passing into the function
  appendPet: (state, { species, pet }) => {
    // with this arrow function we can mutate (update state)
    state[species].push(pet)
  }
}
