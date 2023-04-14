
<template>
  <div class="app h-full">
    <Header/>

    <RouterView />

    <footer class="flex justify-center bg-ligt-navy-blue text-white py-5">
      <p>© 2023 Front-end assessment. Obiex</p>
    </footer>
  </div>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';

export default defineComponent({
  components: { Header }
});

</script>


<style>
.hero{
    background-size: cover;
    background-position: center;
    min-height: 100vh; /**500px*/;
  }
</style>
