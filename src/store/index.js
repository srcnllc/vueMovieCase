// store/index.js

import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    api_key: process.env.VUE_APP_KEY,
    ApiURL: 'https://api.themoviedb.org/3',
    posts: []
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data;
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const response = await axios.get(`${state.ApiURL}/movie/top_rated?api_key=${state.api_key}&page=1`);
        commit('setPosts', response.data.results);
        console.log("ne geldi",response.data.results);
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    }
  }
});
