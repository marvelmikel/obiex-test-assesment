<template>

    <div class="grid grid-cols-2 gap-8" >
        <div class="cursor-pointer" v-for="(item, index) in data" :key="index" @click="navigate(item.id)">
            <img alt="" class="rounded-md" :src="`https://image.tmdb.org/t/p/original${item.poster_path}`" />
            <div class="flex flex-col gap-3 mt-2" >
                <h1 class="text-sm limit--text" >
                    {{ item.title }}
                </h1>
                <div class="text-xs font-light flex gap-4 items-center">
                    <span>
                        {{ item.release_date || item.vote_count }}
                    </span>
                </div>
            </div>        
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Movie } from '../types/Movie'

export default defineComponent({
  name: 'MobileMovieCarousel',
  props: {
    data: {
      type: Array as () => Movie[], 
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
