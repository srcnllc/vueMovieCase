<template>
  <div class="home">
        <div class='moviesSection'>
        <h3 class="title">POPÜLER FİLMLER</h3>
    <div v-if="filteredMovies.length > 0" class="movies">
      <div v-for="movie in filteredMovies" :key="movie.id" class="movieFor">
        <MovieCard :movie="movie" />
      </div>
    </div>
    <div v-else>
      <p>Aradığınız film bulunamadı...</p>
    </div>
        </div>
  </div>
</template>
<script>
import MovieCard from '../components/MovieCard.vue';

export default {
  components: { MovieCard },
  name: 'HomeView',
computed: {
    topRatedMovies() {
      return this.$store.state.posts;
    },
        searchTerm() {
      return this.$store.state.searchTerm;
    },
      filteredMovies() {
    const searchTerm = this.searchTerm.toLowerCase();
    return this.topRatedMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm)
    );
  }
  },
  created() {
    this.$store.dispatch('fetchPosts');
  }
}
</script>
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 24px;
}
.movieFor{
  display: flex;
  align-self: stretch;
}
@media screen and (max-width: 1024px) {
    .movies {
      grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 768px) {
    .movies {
      grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 480px) {
    .movies {
      grid-template-columns: 1fr;
    }
}
</style>