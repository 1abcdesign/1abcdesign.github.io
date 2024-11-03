<template>
  <vueper-slides
    :autoplay="true"
    :arrows="false"
    :bullets="false"
    :fixed-height="true"
    class="no-shadow"
    :style="'box-shadow: inset 0 0 1rem 0.5rem var(--shadow)'"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="'<em>' + $t(slide.group) + ' : ' + $t(slide.title) + '</em>'"
      :content="slide.content"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const photos = [
  [
    'a01.webp',
    'a02.webp',
    'a03.webp',
    'a04.webp',
    'a05.webp',
    'a06.webp',
    'a07.webp',
    'a08.webp',
    'a09.webp',
    'a10.webp',
  ],
  [
    'b01.webp',
    'b02.webp',
    'b03.webp',
    'b04.webp',
    'b05.webp',
    'b06.webp',
    'b07.webp',
    'b08.webp',
    'b09.webp',
    'b10.webp',
  ],
  [
    'c01.webp',
    'c02.webp',
    'c03.webp',
    'c04.webp',
    'c05.webp',
    'c06.webp',
    'c07.webp',
    'c08.webp',
    'c09.webp',
    'c10.webp',
  ],
  [
    'd01.webp',
    'd02.webp',
    'd03.webp',
    'd04.webp',
    'd05.webp',
    'd06.webp',
    'd07.webp',
    'd08.webp',
    'd09.webp',
    'd10.webp',
  ],
]

// Base directory where your photos are stored
const BASE_URL = import.meta.env.BASE_URL

// Shuffle each sub-array
photos.forEach(arr => arr.sort(() => Math.random() - 0.5))

// Flatten in the desired interleaved order
const interleavedPhotos = []
const maxLength = Math.max(...photos.map(arr => arr.length))

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < photos.length; j++) {
    if (photos[j][i]) {
      interleavedPhotos.push(photos[j][i])
    }
  }
}

// Create array of JSON objects for slides
const slides = ref(
  interleavedPhotos.map(photo => ({
    group: `${photo.charAt(0) + '00'}`,
    title: `${photo.slice(0, 3) + '_title'}`,
    content: `<div style="background-image: url('${BASE_URL}${photo}'); width: 100vmin; height: calc(36 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`,
  }))
)
</script>

<style lang="scss">
.vueperslides--fixed-height {
  position: absolute;
  top: calc(46.3 * var(--usable-vh) + 0.5rem);
}

.vueperslides {
  width: 100vmin;
  height: calc(38 * var(--usable-vh));

  @media (orientation: portrait) {}
  @media (orientation: landscape) {}
}

.vueperslide__content {
  width: 100%;
}

.vueperslide__title em {
  display: block !important;
}

.vueperslide__title em::first-letter {
  background: var(--color);
  color: var(--background);
}
</style>
