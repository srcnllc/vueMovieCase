<template>
  <div class="home">
        <div class='moviesSection'>
        <h3 class="title">POPULAR FİLMS</h3>
    <div v-if="topRatedMovies.length > 0" class="movies">
      <div v-for="movie in topRatedMovies" :key="movie.id" >
        <MovieCard :movie="movie" />
      </div>
    </div>
    <div v-else>
      <p>No top rated movies found.</p>
    </div>
        </div>
  </div>
</template>
<style scoped>
  .home{
        padding-inline: 10px;
        padding-block: 30px;
        overflow: hidden;
  }
  .moviesSection .title {
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: -1px;
  }
  .movies {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-auto-rows: auto;
  gap: 24px;
}
</style>
<script>
import MovieCard from '../components/MovieCard.vue';

export default {
  components: { MovieCard },
  name: 'HomeView',
computed: {
    topRatedMovies() {
      return this.$store.state.posts;
    }
  },
  created() {
    this.$store.dispatch('fetchPosts');
  }
}
</script>
