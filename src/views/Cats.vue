<template>
    <div>
        <PetTable
        species= "Cats"
        :pets="cats" />
    </div>
</template>

<script>
// @ is a shortcut to the src directory. Thanks Vue CLI!
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'
export default {
  components: {
    PetTable
  },
  data () {
    return {
    }
  },
  // mapState syntax uses a spread operator (...), call the function, and then pass an array of the items that we want
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
