<template>
  <vueper-slides :autoplay="true" :arrows="false" :bullets="false" :fixed-height="true" >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="'<em>'+$t(slide.group) + ' : ' + $t(slide.title)+'</em>'"
      :content="slide.content">
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const photos = [
  ["a01.jpg", "a02.jpg", "a03.jpg", "a04.jpg", "a05.jpg", "a06.jpg", "a07.jpg", "a08.jpg", "a09.jpg", "a10.jpg"],
  ["b01.jpg", "b02.jpg", "b03.jpg", "b04.jpg", "b05.jpg", "b06.jpg", "b07.jpg", "b08.jpg", "b09.jpg", "b10.jpg"],
  ["c01.jpg", "c02.jpg", "c03.jpg", "c04.jpg", "c05.jpg", "c06.jpg", "c07.jpg", "c08.jpg", "c09.jpg", "c10.jpg"],
  ["d01.jpg", "d02.jpg", "d03.jpg", "d04.jpg", "d05.jpg", "d06.jpg", "d07.jpg", "d08.jpg", "d09.jpg", "d10.jpg"],
]

// Base directory where your photos are stored
const BASE_URL = import.meta.env.BASE_URL

// Shuffle each sub-array
photos.forEach(arr => arr.sort(() => Math.random() - 0.5));

// Flatten in the desired interleaved order
const interleavedPhotos = [];
const maxLength = Math.max(...photos.map(arr => arr.length));

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < photos.length; j++) {
    if (photos[j][i]) {
      interleavedPhotos.push(photos[j][i]);
    }
  }
}

// Create array of JSON objects for slides
const slides = ref(interleavedPhotos.map(photo => ({
  group: `${photo.charAt(0) + '00'}`,
  title: `${photo.slice(0, 3) + '_title'}`,
  content: `<div style="background-image: url('${BASE_URL}${photo}'); width: 100vmin; height: calc(36 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`
})));
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