<template>
  <div class="container">
    <div class="movieWrapper">
      <div class="moviePoster">
        <img
          :src="'https://image.tmdb.org/t/p/original' + postsDetail.poster_path"
          :alt="postsDetail.title"
          class="moviePosterImage"
        />
      </div>
      <div class="desc">
        <h1 class="movieTitle">{{ postsDetail.title }}</h1>
        <p class="overview">{{ postsDetail.overview }}</p>
        <p class="overview">Slogan :{{ postsDetail.tagline }}</p>
        <p class="overview">Statüs :{{ postsDetail.status }}</p>
        <p class="overview">Orjinal Dili :{{ postsDetail.original_language }}</p>
        <p class="overview">Yayınlanma Tarihi :{{ postsDetail.release_date }}</p>
        <p class="overview">Puan :{{ postsDetail.popularity }}</p>
              <div class="button">
            <a className='playButton'>Play</a>
      </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'MovieDetail',
  data() {
    return {
      api_key: process.env.VUE_APP_KEY,
      ApiURL: 'https://api.themoviedb.org/3/',
      postsDetail: [],
      movie_id: this.$route.params.id,
    };
  },
  created() {
    axios
      .get(`${this.ApiURL}/movie/${this.movie_id}?api_key=${this.api_key}`)
      .then((response) => {
        this.postsDetail = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error('API isteği başarısız:', error);
      });
  },
};
</script>
<style scoped >
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.movieWrapper {
  max-width: 1440px;
  width: 100%;
  padding-inline: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 56px;
}

.movieWrapper .moviePoster {
  width: 500px;
  height: 700px;
}

.movieWrapper .moviePoster img {
  width: 100%;
  height: 100%;
}

.movieWrapper .desc {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.movieWrapper .desc .button .playButton {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border: 1px solid #222;
  color: #222;
  width: 300px;
  padding: 20px 30px;
  border-radius: 9999px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.movieWrapper .desc .button .playButton:hover {
  background-color: #222;
  border: 1px solid #eee;
  color: #eee;
}

.movieTitle {
  font-size: 42px;
  text-transform: uppercase;
  text-align: center;
}

.overview {
  font-size: 24px;
}

</style>
