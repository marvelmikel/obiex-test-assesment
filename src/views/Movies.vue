<template>
  <div v-if="loading" class="flex flex-col items-center py-5" style="margin-top: 5rem;">
    <div>
    <i class='bx bxs-color bx-spin text-8xl' ></i>
    </div>
    <p>Loading....</p>
  </div>

  <div v-else>
    <Hero v-if="movie" :movie="movie" :genres="genres"/>

    <section class="min-h-full bg-navy-blue py-10 text-white">
      <div class="w-11/12 mx-auto">
        
        <div v-if="loading" class="flex flex-col items-center py-5">
          <div>
            <i class='bx bxs-color bx-spin text-8xl' ></i>
          </div>
          <p>Loading....</p>
        </div>

        <div v-else>
          <div v-if="movies.length < 1" class="flex justify-center">
            <h2 class="text-5xl">There are no movies at this time..</h2>
          </div>

          <div v-else>
            <MovieCarousel :data="movies" heading="Movies for you" />

            <div class="
                mobile--carousel
                xs2:block
                xs:block
                sm:hidden
                md:hidden
                lg:hidden
                xl:hidden
              ">
              <h2 class="text-lg mb-4 text-white">Movies for you</h2>
              <MobileMovieCarousel :data="movies"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import MovieCarousel from '../components/MovieCarousel.vue'
import MobileMovieCarousel from '../components/MobileMovieCarousel.vue';
import Hero from '../components/Hero.vue'
import type { Movie } from '../types/Movie'

export default defineComponent({
  components: { MovieCarousel, Hero, MobileMovieCarousel },
  data() {
    return {
      genres: [
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 28,
          "name": "Action"
        }
      ],
      movies: [] as Movie[] | [],
      movie: null as Movie | null,
      loading: false,
      backgroundImg: ''
    }
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling animation
    });

    this.getMovies()
  },
  methods: {
    async getMovies(){
      const api_key = import.meta.env.VITE_API_KEY;
      
      try {
        this.loading = true
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        const res = await data.json()
        this.movies = res.results as Movie[] | [];

      } catch (error) {
        console.log(error);        
      }finally{
        // this.loading = false     
        this.setRandomImg()  
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // smooth scrolling animation
        }); 
      }
    },

    setRandomImg(): void {
      if (this.movies.length > 0) {        
        const movie: Movie | undefined = this.movies.find(item => item.id === 76600)
        if (movie) {
          this.backgroundImg = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
          this.movie = movie
        } else {
          this.movie = null;
        }
      }
    }

  }
});

</script>

<style>

</style>
