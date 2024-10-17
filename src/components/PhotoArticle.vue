<template>
  <div class="photo-article" :style="{ flexDirection: style.flexDirection }">
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
  style: {
    type: Object,
    default: () => ({ flexDirection: 'row' })
  }
});
</script>

<style scoped>
.photo-article {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Adjust as needed */
  width: 100%;
}

.article-image {
  max-width: 100%;
  height: auto;
  flex: 1;
}

.article-info {
  flex: 1;
  padding: 10px; /* Adjust as needed */
}

@media (orientation: landscape) {
  .photo-article {
    flex-direction: row;
  }
}
</style>
