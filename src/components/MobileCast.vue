<template>
    

    <div class="grid grid-cols-2 gap-8" >
        <div v-for="(item, index) in data" :key="index">
            <img v-if="item.profile_path" alt="cast image" class="rounded-md" :src="`https://image.tmdb.org/t/p/original${item.profile_path}`" />
            <img v-else alt="cast image" class="rounded-md" src="https://image.tmdb.org/t/p/original/liD538lLxriRLVYzhjtOGxOPybU.jpg">

            <div class="flex flex-col gap-3 mt-2" >
                <h1 class="text-sm limit--text" >
                    {{ item.name }}
                </h1>
                <div class="text-xs font-light flex gap-4 items-center">
                    <span>
                        {{ item.character || item.known_for_department }}
                    </span>
                </div>
            </div>        
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Cast } from '../types/Cast'

export default defineComponent({
  name: 'MobileCast',
  props: {
    data: {
      type: Array as () => Cast[], 
      default: null, 
    },
  },
});
</script>
