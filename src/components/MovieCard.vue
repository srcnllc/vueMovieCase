<template>
    <div class='movie'>
      <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" :alt="movie.title" @click="movie_detail(movie.id)" />
      <p @click="movie_detail(movie.id)" class="name">{{movie.title}}</p>
    <div class="info">
      <div class="infoDesc">
        <span>Çıkış Tarihi</span>
        <span>{{ movie.release_date }}</span>
      </div>
      <div class="infoDesc">
        <span>Puan</span>
        <span>{{ movie.popularity }}</span>
      </div>
    </div>
   <div class="fav" @click="favMovie(movie.id)">
    <img v-if="isFavorited(movie.id)" class="fav-icon" src="@/assets/favIconFilled.svg" alt="Favori" />
    <img v-else class="fav-icon" src="@/assets/favIcon.svg" alt="Favori" />
  </div>
  </div>

</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
  isFavorited() {
    return (movieId) => {
      return this.$store.state.favoriteMovies.some(favoriteMovie => favoriteMovie.id === movieId);
    };
  }
},
  methods:{ 
    movie_detail(id){
        this.$router.push('/movie/'+id)
    },
       favMovie(movieId) {
      this.$store.dispatch('favMovie', movieId);
    },
  }
};
</script>

<style scoped>
.moviesSection {
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: -1px;
}
.movie {
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
}
.movie:hover {
  z-index: 9;
  transform: scale(1.07);
}
.movie img {
  width: 100%;
}
.movie .name {
  z-index: 5555;
  margin-inline: 5px;
  text-align: center;
  font-size: 17px;
  color: #000;
  font-weight: bold;
  padding-block: 5px;
}
.movie .info {
  display: flex;
  justify-content: space-between;
  margin-inline: 5px;
  margin-bottom: 5px;
  padding-block: 5px;
}

.movie .info .infoDesc {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: #000;
  font-weight: bold;
}

.movie .info .infoDesc span:nth-child(1) {
  font-size: 12px;
  text-align: center;
  color: #737171;
}

.movie .fav {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 2px;
  z-index: 999;
}
.movie .fav .fav-icon{
  width: 30px;
  height: 30px;
  object-fit: cover;
  fill: red;
}
</style>
