<template>
  <div class="Results">
    <!-- NOTE to pass prop data to a child component it is passed as a bound attribute -->  
    
  </div>
</template>
       
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { nasaService } from '../services/NasaService'
export default {
  name: 'results',
  setup() {
    const state = reactive({
      results: computed(() => AppState.results)
    })
    return {
      state,
    
      
    }  
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
</style>