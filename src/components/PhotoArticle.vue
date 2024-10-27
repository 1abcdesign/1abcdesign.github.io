<template>
  <div class="photo-article" :class="{ 'reverse': isReverse }">
    <img :src="image" alt="Article Image" class="article-image" />
    <div class="article-info">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isReverse: {
    type: Boolean,
    default: false
  }
});
</script>

<style>
.photo-article {
  width: 50vw;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}

.article-image {
  width: 50vw;
  height: auto;
}

.article-info {
  width: 100vw;
  padding: 10px;
}

@media (orientation: landscape) {
  .photo-article {
    flex-direction: row;
  }

  .photo-article.reverse {
    flex-direction: row-reverse;
  }

  .article-image {
    width: 50vw;
  }

  .article-info {
    width: 50vw;
  }
}
</style>
