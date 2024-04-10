// localStorage.js

export const localStoragePlugin = store => {
    if (localStorage.getItem('favoriteMovies')) {
      store.replaceState(Object.assign(store.state, { favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) }));
    }
    store.subscribe((mutation, state) => {
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    });
  };
  