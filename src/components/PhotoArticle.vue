<template>
  <div class="photo-article" :class="{ 'reverse': isReverse }">
    <img :src="image" alt="Article Image" class="article-image" />
    <div class="article-info">
      <h3>
        <span class="group">{{ $t(`${group}00`) }}</span>
        <br>
        {{ title }}
      </h3>
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
  },
  group: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.photo-article {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  flex-direction: column;
  box-shadow: 0 0 1rem var(--shadow);
}

.article-image {
  width: 100%;
  height: auto;
}

.article-info {
  width: 100%;
  padding: 10px;
  font-size: 125%;
}

.group {
  color: var(--shadow);
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
