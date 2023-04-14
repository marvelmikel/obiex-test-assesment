<template>
    <div class="main">
        <div id="wrapper">
          <div id="carousel">
            <div id="content">
              <img
                class="item"
                src="/assets/background.jpg"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
              <img
                src="/assets/background.jpg"
                class="item"
              />
    
            </div>
          </div>
    
          <button id="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
            </svg>
          </button>
          
          <button id="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
          </button>
          
        </div>
    </div>
</template>
<script lang="ts">
export default {
    mounted(): void {
        const gap = 16;

        const carousel = document.getElementById("carousel") as HTMLDivElement;
        const content = document.getElementById("content") as HTMLDivElement;
        const next = document.getElementById("next") as HTMLButtonElement;
        const prev = document.getElementById("prev") as HTMLButtonElement;

        let width = carousel.offsetWidth;
        window.addEventListener("resize", () => (width = carousel.offsetWidth));

        next.addEventListener("click", () => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
            prev.style.display = "flex";
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            next.style.display = "none";
        }
        });

        prev.addEventListener("click", () => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
            prev.style.display = "none";
        }
        if (!(content.scrollWidth - width - gap <= carousel.scrollLeft + width)) {
            next.style.display = "flex";
        }
        });
  },
}
</script>
<style >
    .main {
        /* margin: 0; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* height: 100vh; */
        background-color: #000;
      }

      #wrapper {
        width: 100%;
        max-width: 964px;
        position: relative;
      }

      #carousel {
        overflow: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
      }

      #carousel::-webkit-scrollbar {
        height: 0;
      }

      #prev,
      #next {
        display: flex;
        justify-content: center;
        align-content: center;
        background: white;
        border: none;
        padding: 8px;
        border-radius: 50%;
        outline: 0;
        cursor: pointer;
        position: absolute;
      }

      #prev {
        top: 50%;
        left: 0;
        transform: translate(50%, -50%);
        display: none;
      }

      #next {
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
      }

      #content {
        display: grid;
        grid-gap: 16px;
        grid-auto-flow: column;
        margin: auto;
        box-sizing: border-box;
      }

      .item {
        width: 180px;
        height: 180px;
        background: green;
      }
</style>