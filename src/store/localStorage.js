// localStorage.js

export const localStoragePlugin = store => {
    // Sayfa yenilendiğinde Vuex state'ini localStorage'den al
    if (localStorage.getItem('favoriteMovies')) {
      store.replaceState(Object.assign(store.state, { favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) }));
    }
  
    // Vuex state'inde değişiklik olduğunda localStorage'ı güncelle
    store.subscribe((mutation, state) => {
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    });
  };
  