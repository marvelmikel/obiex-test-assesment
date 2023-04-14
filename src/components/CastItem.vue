<template>
    <div class="box">
        <img v-if="cast.profile_path" alt="cast image" :src="`https://image.tmdb.org/t/p/original${cast.profile_path}`" />
        <img v-else alt="cast image" src="https://image.tmdb.org/t/p/original/liD538lLxriRLVYzhjtOGxOPybU.jpg">

        <div class="flex flex-col gap-3 mt-2" >
            <h1 class="text-sm limit--text" >
                {{ cast.name }}
            </h1>
            <div class="text-xs font-light flex gap-4 items-center">
                <span>
                    {{ cast.character || cast.known_for_department }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Cast } from '../types/Cast'

export default defineComponent({
  name: 'CarouselItem',
  props: {
    cast: {
      type: Object as () => Cast, 
      default: null, 
    },
  },
});
</script>
