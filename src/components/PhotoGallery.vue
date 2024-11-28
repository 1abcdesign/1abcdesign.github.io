<template>
  <div class="photo-gallery flex-col">
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
      :group
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { flatPhotos } from '@/assets/flatPhotos';

const  PhotoArticle = defineAsyncComponent(() => import('./PhotoArticle.vue'))

const { group } = defineProps(['group'])

const BASE_URL = import.meta.env.BASE_URL

const articles = flatPhotos.map(photo => ({
  group,
  title: `${photo.slice(0, 3) + '_title'}`,
  image: `${BASE_URL}${photo}`,
  description: `${photo.slice(0, 3) + '_description'}`,
}))

const filteredArticles = computed(
  () => articles.filter(article => article.title.startsWith(group))
)
</script>
