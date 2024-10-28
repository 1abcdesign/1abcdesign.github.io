<template>
  <div class="photo-gallery">
    <photo-article
      v-for="(article, index) in filteredArticles"
      :key="index"
      :image="article.image"
      :title="$t(article.title)"
      :description="$t(article.description)"
      :class="{
        'reverse': index % 2 === 1,
        'last-in-group': index === 9
              }"
      :group="group"
      />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import PhotoArticle from './PhotoArticle.vue';

const props = defineProps({
  group: {
    type: String,
    required: true
  }
});

const photos = [
  "a01.jpg", "a02.jpg", "a03.jpg", "a04.jpg", "a05.jpg", "a06.jpg", "a07.jpg", "a08.jpg", "a09.jpg", "a10.jpg",
  "b01.jpg", "b02.jpg", "b03.jpg", "b04.jpg", "b05.jpg", "b06.jpg", "b07.jpg", "b08.jpg", "b09.jpg", "b10.jpg",
  "c01.jpg", "c02.jpg", "c03.jpg", "c04.jpg", "c05.jpg", "c06.jpg", "c07.jpg", "c08.jpg", "c09.jpg", "c10.jpg",
  "d01.jpg", "d02.jpg", "d03.jpg", "d04.jpg", "d05.jpg", "d06.jpg", "d07.jpg", "d08.jpg", "d09.jpg", "d10.jpg",
]

const BASE_URL = import.meta.env.BASE_URL;

const articles = photos.map((photo) => ({
  group: props.group,
  title: `${photo.slice(0, 3) + '_title'}`,
  image: `${BASE_URL}${photo}`,
  description: `${photo.slice(0, 3) + '_description'}`
}));

// const shuffledArticles = articles.sort(() => Math.random() - 0.5)

const filteredArticles = computed(() => {
  return articles.filter(article => article.title.startsWith(props.group));
});
</script>

<style>
.photo-gallery {
  display: flex;
  flex-direction: column;
}
</style>
