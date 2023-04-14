<template>
    <div class="box">
        <img v-if="cast.profile_path" alt="" :src="`https://image.tmdb.org/t/p/original${cast.profile_path}`" />
        <img v-else  src="https://imgs.search.brave.com/tzb9f85RlG66PT_-suzWN3q8AyOsL_p5Uth2IAkIcD4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/M0JLeldPY0R3SDV5/T3RONDJlWUtRSGFI/YSZwaWQ9QXBp">

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
