<template >
    <header class="
    header 
    shadow-sm 
    flex 
    items-center">
        <div class="w-11/12 mx-auto flex justify-between">
            <img alt="logo" class="logo" src="@/assets/logo.svg" />
            <div class="
                items-center
                gap-3 
                border border-light-gray 
                bg-navy-blue 
                py-2 px-3 
                rounded-md
                xs2:hidden
                xs:hidden
                sm:flex
                md:flex
                lg:flex
                xl:flex
            ">
                <i class='bx bx-search text-white'></i>
                <input type="text" class="border-none text-light-gray outline-none bg-navy-blue">
            </div>
            <div class="
            text-2xl
            items-center
            cursor-pointer
            xs2:flex
            xs:flex
            sm:hidden
            md:hidden
            lg:hidden
            xl:hidden
            text-white
            ">
                <i v-if="!showMobileMenu" @click="toggleMenu" class='bx bx-search'></i>
                <i v-else @click="toggleMenu" class='bx bx-x-circle'></i>            
            </div>
        </div>
    </header>
    
    <section v-if="showMobileMenu" class="
    mobile--search 
    bg-navy-blue
    shadow-sm 
    w-full
    px-3
    items-center
    xs2:flex
    xs:flex
    sm:hidden
    md:hidden
    lg:hidden
    xl:hidden
    ">
        <div class="w-11/12 mx-auto flex justify-between">
            <div class="
            w-full
            flex
            items-center
            gap-3 
            border border-light-gray
            bg-navy-blue 
            py-2 px-3 
            rounded-md
            ">
                <i class='bx bx-search text-white'></i>
                <input type="text" placeholder="Search" class="border-none text-white outline-none w-full bg-navy-blue">
            </div>
           
        </div>
    </section>
</template>
<script lang="ts">
import  { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMobileMenu = !this.showMobileMenu
            if (this.showMobileMenu) {
                (document.querySelector('.hero') as HTMLElement).style.filter = 'blur(8px)';
            }else{
                (document.querySelector('.hero') as HTMLElement).style.filter = 'blur(0px)';
            }
        }
    },
});

</script>
