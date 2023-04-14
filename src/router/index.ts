import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import MovieDetails from '../views/MovieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})

export default router
