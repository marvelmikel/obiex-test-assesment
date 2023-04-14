<template>
    <div class="
    carousel 
    justify-between 
    items-center
    xs2:hidden
    xs:hidden
    sm:flex
    md:flex
    lg:flex
    xl:flex
    ">
        <div class="container relative">

            <div class="flex justify-between p-4 items-center">
                <h2 class="font-bold text-xl">{{ heading }}</h2>
                <div class="flex items-center gap-6">
                    <button @click="moveCarouselRight" ref="carouselLeftBtn" 
                    class="btn left flex items-center justify-center rounded-full h-4 w-4 border">
                        <i class='bx bx-left-arrow-alt text-xs'></i>
                    </button>
                    <button @click="moveCarouselLeft" ref="carouselRightBtn" 
                    class="btn right show flex items-center justify-center rounded-full h-4 w-4 border">
                        <i class='bx bx-right-arrow-alt text-xs'></i>
                    </button>
                </div>
            </div>

            <div class="carousel--container">
                <div class="carousel--content bg-navy-blue" ref="carouselContent">
                    <div v-for="(item, index) in data" :key="index">
                        <MovieItem :movie="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script lang="ts">
    import MovieItem from './MovieItem.vue';
    import type { Movie } from '../types/Movie'

    export default {
        data() {
            return {
                carouselLeftValue: 0,
                totalWidth: 0,
                widthToMove: 376, // adjust this to reflect the actual width to move
                arrowBtnWidth: 50,
                noOfSlides: 0,
                currentSlide: 1
            };
        },
        components: { MovieItem },
        props: {
            heading: {
                type: String
            },
            data: {
                type: Array as () => Movie[], // set the type of the prop to an array
                default: () => [], // set a default value of an empty array
            },
        },
        mounted() {
            this.totalWidth = (this.$refs.carouselContent as HTMLElement).getBoundingClientRect().width;
            this.noOfSlides = Math.ceil(this.totalWidth / this.widthToMove);
        },
    methods: {
        manageButtons(): void{
            if (this.currentSlide === 1) {
                (this.$refs.carouselLeftBtn as HTMLElement).classList.remove('show');
                (this.$refs.carouselLeftBtn as HTMLElement).setAttribute('disabled', 'true');
            } else {
                (this.$refs.carouselLeftBtn as HTMLElement).classList.add('show');
                (this.$refs.carouselLeftBtn as HTMLElement).removeAttribute('disabled');
            }
            if (this.currentSlide === this.noOfSlides) {
                (this.$refs.carouselRightBtn as HTMLElement).classList.remove('show');
                (this.$refs.carouselRightBtn as HTMLElement).setAttribute('disabled', 'true');
            } else {
                (this.$refs.carouselRightBtn as HTMLElement).classList.add('show');
                (this.$refs.carouselRightBtn as HTMLElement).removeAttribute('disabled');
            }
        },
        moveCarouselLeft(): void {
            if (this.currentSlide === this.noOfSlides) {
                this.carouselLeftValue = 0;
                this.currentSlide = 1;
            } else {
                this.carouselLeftValue -= this.widthToMove - this.arrowBtnWidth; 
                this.currentSlide++;
            }
            (this.$refs.carouselContent as HTMLElement).style.left = this.carouselLeftValue + "px";

            this.manageButtons()
        },
        moveCarouselRight(): void {
            if (this.currentSlide === 1) {
                this.carouselLeftValue = -(this.noOfSlides - 1) * (this.widthToMove - this.arrowBtnWidth);
                this.currentSlide = this.noOfSlides;
            } else {
                this.carouselLeftValue += this.widthToMove - this.arrowBtnWidth;
                this.currentSlide--;
            }
            (this.$refs.carouselContent as HTMLElement).style.left = this.carouselLeftValue + "px";
            this.manageButtons()

        }
    }
  };
  </script>
