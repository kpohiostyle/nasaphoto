<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col">
        <!-- <form @submit.prevent="search">
          <label for="movie">Movie Title</label>
          <input type="text" name="movie" id="movie" placeholder="Title..." v-model="state.query">
          <button type="submit" class="btn btn-primary">Search</button>
        </form> -->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
    
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { nasaService } from '../services/NasaService'
import Results from '../components/ResultsComponent'
export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      async search() {
        try {
          await nasaService.getImage(state.query)
          state.query = ''
        } catch (e) {
          console.error(e)
        }
      }
    }
  },
  components: {
    Results,
  }
}
</script>

<style lang="scss" scoped>
</style>