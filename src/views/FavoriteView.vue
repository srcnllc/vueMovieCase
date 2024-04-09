<template>
  <div class="fav">
        <h3 class="title">FAVORİLER</h3>
            <div v-if="favoriteMovies.length > 0" class="favoriteMovies">
        <div v-for="movie in favoriteMovies" :key="movie.id" class="favMovieFor">
        <MovieCard :movie="movie" />
      </div>
            </div>

  </div>
</template>
<script>
import MovieCard from '../components/MovieCard.vue';

export default {
  name: 'FavoriteView',
    components: { MovieCard },
computed: {
    favoriteMovies() {
      return this.$store.state.favoriteMovies;
    }
  }
}
</script>
<style scoped>
.fav{
          padding-inline: 10px;
        padding-block: 30px;
        overflow: hidden;
}
  .fav .title {
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: -1px;
  }
.favoriteMovies{
    position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 24px;
}
.favMovieFor{
  display: flex;
  align-self: stretch;
}
</style>