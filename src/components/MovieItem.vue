<template>
    <div class="box cursor-pointer" @click="navigate(movie.id)">
        <img alt="" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" />
        <div class="flex flex-col gap-3 mt-2" >
            <h1 class="text-sm limit--text" >
                {{ movie.title }}
            </h1>
            <div class="text-xs font-light flex gap-4 items-center">
                <span>{{ movie.release_date }}</span> | <span>{{ movie.vote_count }}</span> 
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Movie } from '../types/Movie'

export default defineComponent({
  name: 'CarouselItem',
  props: {
    movie: {
      type: Object as () => Movie, 
      default: null,
    },
  },
  methods: {
    navigate(id: number | string){
        this.$router.push(`/movie/${id}`)
    }
  },
});
</script>
<style lang="">
    
</style>