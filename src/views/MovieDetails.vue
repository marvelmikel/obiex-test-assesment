<template>
    <div v-if="loading" class="flex flex-col items-center py-5">
        <div>
        <i class='bx bxs-color bx-spin text-8xl' ></i>
        </div>
        <p>Loading....</p>
    </div>
    <div v-else>
        <Hero v-if="movie" :backgroundImg="backgroundImg" :movie="movie" :genres="movie.genres"/>
    
        <section class="min-h-full bg-navy-blue py-10 text-white">
          <div class="w-11/12 mx-auto">
      
            <div>
                <div v-if="cast.length < 1" class="flex justify-center">
                    <h2 class="text-5xl">No cast</h2>
                </div>
                <div v-else>

                    <div class="
                    mobile--carousel
                    xs2:block
                    xs:block
                    sm:hidden
                    md:hidden
                    lg:hidden
                    xl:hidden
                    ">
                        <ul class="flex gap-3 mb-4">
                            <li @click="showTab = true" 
                            class="pb-1 cursor-pointer"
                            :class="{ 'border-b-2': showTab, 'border-light-blue': showTab, }"
                            >Cast</li>
                            <li @click="showTab = false" 
                            class="pb-1 cursor-pointer"
                            :class="{ 'border-b-2': !showTab, 'border-light-blue': !showTab, }"
                            >
                            Recommended
                            </li>
                        </ul>
                        <MobileCast v-if="showTab" :data="cast"/>
                        <MobileMovieCarousel v-else :data="movies"/>
                    </div>

                    <CastCarousel :data="cast" />
                    <MovieCarousel :data="movies" heading="You might also like" />
                </div>
    
            </div>
          </div>
        </section>
    </div>
  </template>
  
<script lang="ts">
import  { defineComponent } from 'vue'
import CastCarousel from '../components/CastCarousel.vue'
import MovieCarousel from '../components/MovieCarousel.vue'
import Hero from '../components/Hero.vue'
import MobileCast from '../components/MobileCast.vue';
import MobileMovieCarousel from '../components/MobileMovieCarousel.vue';

import type { Movie } from '../types/Movie'
import type { MovieDetail } from '../types/Movie'

import type { Cast } from '../types/Cast'
import axios from "axios"

export default defineComponent({
    name: 'MovieDetails',
    components: { CastCarousel, Hero, MovieCarousel, MobileCast, MobileMovieCarousel },
    data() {
        return {
            movie: null as MovieDetail | null,
            movies: [] as Movie[] | [],
            cast: [] as Cast[] | [],
            loading: false,
            backgroundImg: '',
            movie_id: null as number | null,
            showTab: true
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.movie_id = typeof id === "string" ? parseInt(id) : null
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
  
      this.getData()
    },
    methods: {
        async getData(){
            try {
                const api_key = import.meta.env.VITE_API_KEY;

                this.loading = true

                const [response1, response2, response3] = await Promise.all([
                    axios.get(`https://api.themoviedb.org/3/movie/${this.movie_id}?api_key=${api_key}`),
                    axios.get(`https://api.themoviedb.org/3/movie/${this.movie_id}/credits?api_key=${api_key}`),
                    axios.get(`https://api.themoviedb.org/3/movie/${this.movie_id}/similar?api_key=${api_key}`),
                    
                ]);

                this.movie = response1.data as MovieDetail | null
                this.cast = response2.data.cast
                this.movies = response3.data.results
                
                if (this.movie) {                    
                    this.backgroundImg = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
                } 
                
            } catch (error) {
                console.error(error);
            }finally{
                this.loading = false 
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth', // smooth scrolling animation
                });    
            }
        },
      
    }
});
  
</script>
  
<style>

</style>
