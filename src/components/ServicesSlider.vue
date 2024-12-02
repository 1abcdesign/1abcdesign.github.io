<template>
  <vueper-slides
    :autoplay="true"
    :arrows="false"
    :bullets="false"
    :fixed-height="true"
    class="no-shadow bg-texture main"
    :style="'box-shadow: inset 0 0 1rem 0.5rem var(--shadow)'"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="`<em>
                <span class='first-letter'>
                  ${$t(slide.group)[0]}
                </span>
                  ${$t(slide.group).slice(1)} : ${$t(slide.title)}
              </em>`"
      :content="slide.content"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { groupedPhotos } from '@/assets/groupedPhotos'

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'

// Shuffle each sub-array
groupedPhotos.forEach(arr => arr.sort(() => Math.random() - 0.5))

// Flatten in the desired interleaved order
const interleavedPhotos = []
const maxLength = Math.max(...groupedPhotos.map(arr => arr.length))

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < groupedPhotos.length; j++) {
    if (groupedPhotos[j][i]) {
      interleavedPhotos.push(groupedPhotos[j][i])
    }
  }
}

// Create array of JSON objects for slides
const slides = ref(
  interleavedPhotos.map(photo => ({
    group: `${photo.charAt(0) + '00'}`,
    title: `${photo.slice(0, 3) + '_title'}`,
    content: `<div style="background-image: url('${ASSETS_DIR}${photo}');
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          background-size: cover; background-position: center;"
              ></div>`,
  }))
)
</script>

<style lang="scss" scoped>
.vueperslides--fixed-height {
  position: absolute;
  top: calc(23.125 * var(--main-em) + 1px);
}

.vueperslides {
  width: 100vmin;
  height: calc(18.8 * var(--main-em));
}

.vueperslide__content {
  width: 100%;
}

.vueperslide__title em {
  line-height: calc(1.33 * var(--main-em));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 90%;
}

.vueperslide__title em .first-letter {
  width: 1.75ch;
  line-height: calc(1.33 * var(--main-em));
  margin-right: -0.1ch;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color);
  color: var(--bg);
  font-size: inherit;
}
</style>
