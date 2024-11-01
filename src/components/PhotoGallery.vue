<template>
  <div class="photo-gallery">
    <photo-article
      v-for="(article, index) in filteredArticles"
      :key="index"
      :image="article.image"
      :title="$t(article.title)"
      :description="$t(article.description)"
      :class="{
        reverse: index % 2 === 1,
        'last-in-group': index === 9,
      }"
      :group="group"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PhotoArticle from './PhotoArticle.vue'

const props = defineProps({
  group: {
    type: String,
    required: true,
  },
})

const photos = [
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
]

const BASE_URL = import.meta.env.BASE_URL

const articles = photos.map(photo => ({
  group: props.group,
  title: `${photo.slice(0, 3) + '_title'}`,
  image: `${BASE_URL}${photo}`,
  description: `${photo.slice(0, 3) + '_description'}`,
}))

// const shuffledArticles = articles.sort(() => Math.random() - 0.5)

const filteredArticles = computed(() => {
  return articles.filter(article => article.title.startsWith(props.group))
})
</script>

<style>
.photo-gallery {
  display: flex;
  flex-direction: column;
}
</style>
