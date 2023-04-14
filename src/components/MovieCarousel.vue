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

<style>

/* .container {
  width: 900px;
} */

.box img {
    min-height: 270px;
}

.carousel--container {
  width: 100%;
  min-height: 400px;
  /* height: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.carousel--container .carousel--content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transition: all 0.3s ease;
  transform: translateY(-50%);
}
.carousel--container .carousel--content .box {
  width: 180px;
  /* margin-right: 1rem; */
  /* padding: 1.2rem; */
  border-radius: 0.2rem;
}
.carousel--container .btn {
  cursor: pointer;
}

.btn{
    color: #6E717D;
    cursor: pointer;
    outline: none;
}

.btn.show {
  color: #72D7F0;
  border-color: #72D7F0;
}

.limit--text{
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
}
</style>