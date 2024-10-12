<template>
  <vueper-slides :autoplay="true" :arrows="false" :bullets="false" :fixed-height="true" >
    <vueper-slide
      v-for="(slide, i) in shuffledSlides"
      :key="i"
      :title="slide.title"
      :content="slide.content">
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import slides from '@/assets/slider_data.js'

const shuffledSlides = ref(slides.sort(() => Math.random() - 0.5))

console.log(shuffledSlides)
</script>

<style lang="scss" scoped>
.vueperslides--fixed-height {
  position: absolute;
  bottom: 10vh;

  @media (orientation: landscape) {
    & {
      height: 34vh;
    }
  }

  @media (orientation: portrait) {
    & {
      height: 30vh;
    }
  }
}

.vueperslides {
  width: 100%;
  height: 33vh;

  .vueperslide__content-wrapper {}
}

.vueperslide__content {
  width: 100% !important;

  /* These styles are already added in `src\assets\slides.js` */
  .content {}
  .image {}
}
</style>