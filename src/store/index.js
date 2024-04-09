// store/index.js

import { createStore } from 'vuex';
import axios from 'axios';
import { localStoragePlugin } from './localStorage';


export default createStore({
  state: {
    api_key: process.env.VUE_APP_KEY,
    ApiURL: 'https://api.themoviedb.org/3',
    favoriteMovies: [],
    posts: [],
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data;
    },
    addFavoriteMovie(state, movie) {
      state.favoriteMovies.push(movie);
    },
    removeFavoriteMovie(state, movieId) {
      state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== movieId);
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const response = await axios.get(`${state.ApiURL}/movie/top_rated?api_key=${state.api_key}&page=1`);
        commit('setPosts', response.data.results);
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    },
    async favMovie({ commit, state }, movieId) {
      try {
        // Favori film listesine eklenecek filmi bul
        const movieToAdd = state.posts.find(movie => movie.id === movieId);
        // Eğer film favori film listesinde yoksa, ekle
        if (!state.favoriteMovies.some(movie => movie.id === movieToAdd.id)) {
          commit('addFavoriteMovie', movieToAdd);
        }
      } catch (error) {
        console.error('Favori film eklenirken bir hata oluştu:', error);
      }
    },
    async removeFavMovie({ commit }, movieId) {
      try {
        commit('removeFavoriteMovie', movieId);
      } catch (error) {
        console.error('Favori film kaldırılırken bir hata oluştu:', error);
      }
    }
  },
  plugins: [localStoragePlugin]
});
