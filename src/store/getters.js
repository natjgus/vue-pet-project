// getters are very common for filtering
// filter method will take a function which gives us each pet one at a time and return just the pets we want


export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
