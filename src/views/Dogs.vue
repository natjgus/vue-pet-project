<template>
    <div>
        <PetTable
        species= "Dogs"
        :pets="dogs"
        />
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
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
