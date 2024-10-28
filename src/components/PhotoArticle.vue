<template>
  <div class="photo-article" :class="{ 'reverse': isReverse }">
    <!-- <div class="article-image" :style="{ 'backgroundImage': image }"></div> -->
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
  box-shadow: 0 0 1rem var(--shadow);
  background: var(--background);
  position: sticky;
  top: 0;
}

.article-image {
  object-fit: cover;
}

.article-info {
  font-size: 125%;
  display: flex;
  flex-direction: column;
}

.group {
  color: var(--shadow);
}

@media (orientation: landscape) {
  .photo-article {
    position: sticky;
    top: 0;
    flex-direction: row;
    height: calc(85 * var(--usable-vh));
    align-items: center;
    text-align: left;
  }

  .photo-article.reverse {
    flex-direction: row-reverse;
    text-align: right;
  }

  .article-image {
    width: 50%;
    height: calc(85 * var(--usable-vh));
  }

  .article-info {
    width: 50%;
    padding: 0 5rem;
  }

  .photo-article:not(.reverse) .article-info {
    padding: 0 10rem 0 5rem;
  }

  .photo-article.reverse .article-info {
    padding: 0 5rem 0 10rem;
  }
}

@media (orientation: portrait) {
  .photo-article {
    flex-direction: column;
    height: calc(85 * var(--usable-vh));
    align-items: flex-start;
    justify-content: flex-start;
  }

  .photo-article.reverse {
  }

  .article-image {
    width: 100%;
    height: calc(55 * var(--usable-vh));
  }

  .article-info {
    width: 100%;
    height: calc(30 * var(--usable-vh));
    padding: 0 3rem;
    font-size: 125%;
  }
}
</style>
