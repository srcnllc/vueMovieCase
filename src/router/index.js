import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteView from '../views/FavoriteView.vue';
import MovieDetail from '../views/MovieDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/fav',
    name: 'favorite',
    component: FavoriteView
  },
  {
  path: "/movie/:id/",
  name: "MovieDetail",
  component: MovieDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
