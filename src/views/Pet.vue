<template>
    <div>
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>Age: {{ animal.age }} years old</p>
        <p>Breed: {{ animal.breed }}</p>
    </div>
</template>

<script>
// @ is a shortcut to the src directory. Thanks Vue CLI!
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // returning animal in data allows us to use the lifecycle method mounted
      // and use animal from the data object
      animal: {}
    }
  },
  // mapState syntax uses a spread operator (...), call the function, and then pass an array of the items that we want
  computed: {
    // mapState used below is the same as giving access in the DOM:
    // cats(){ return this.$store.state.cats }
    // mapState is easier to use!
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    // Bracket syntax is the same as this.cats (accessing the array of off state)
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
