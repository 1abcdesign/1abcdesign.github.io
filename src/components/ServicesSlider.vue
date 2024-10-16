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
import { ref, onMounted, onUpdated } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import slides from '@/assets/slider_data.js'
import i18n from '@/i18n'

const locale = ref(i18n.global.locale)

const photos = [
  "a01.jpg",  "a09.jpg",  "b07.jpg",  "c05.jpg",  "d03.jpg",
  "a02.jpg",  "a10.jpg",  "b08.jpg",  "c06.jpg",  "d04.jpg",
  "a03.jpg",  "b01.jpg",  "b09.jpg",  "c07.jpg",  "d05.jpg",
  "a04.jpg",  "b02.jpg",  "b10.jpg",  "c08.jpg",  "d06.jpg",
  "a05.jpg",  "b03.jpg",  "c01.jpg",  "c09.jpg",  "d07.jpg",
  "a06.jpg",  "b04.jpg",  "c02.jpg",  "c10.jpg",  "d08.jpg",
  "a07.jpg",  "b05.jpg",  "c03.jpg",  "d01.jpg" , "d09.jpg",
  "a08.jpg" , "b06.jpg" , "c04.jpg" , "d02.jpg",  "d10.jpg"
]

// Base directory where your photos are stored
const basePath = './services/';

const getGroupName = (fileName) => {
  return fileName.startsWith('a') ? 'Ambience'
    : fileName.startsWith('b') ? 'Building'
      : fileName.startsWith('c') ? 'Crafting'
        : fileName.startsWith('d') ? 'Design'
          : 'Image';
}
// Create array of JSON objects
const slides = photos.map((photo, index) => {
  return {
    title: `${getGroupName(photo)} ${index + 1}`,
    content: `<div style="background-image: url('${basePath}${photo}'); width: 100vmin; height: calc(36 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`
  };
});

const shuffledSlides = ref(slides.sort(() => Math.random() - 0.5))

console.log(shuffledSlides)
</script>

<style lang="scss" scoped>
.vueperslides--fixed-height {
  position: absolute;
  top: calc(46.25 * var(--usable-vh));
}

.vueperslides {
  width: 100vmin;
  height: calc(38 * var(--usable-vh));

  @media (orientation: portrait) {}
  @media (orientation: landscape) {}
  .vueperslide__content-wrapper {}
}

.vueperslide__content {
  width: 100%;

  /* These styles are already added in `src\assets\slides.js` */
  .content {}
  .image {}
}
</style>