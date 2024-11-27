<template>
  <div class="photo-article" :class="{ reverse: isReverse, [`group-${group}`]: true }">
    <img :src="image" alt="Article Image" class="article-image" />
    <div class="article-info">
      <h3>
        <span class="group">{{ $t(`${group}00`) }}</span>
        <br />
        {{ title }}
      </h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const { image, title, description, isReverse, group } = defineProps([
  'image',
  'title',
  'description',
  'isReverse',
  'group',
])
</script>

<style lang="scss">
.photo-article {
  width: 100%;
  display: flex;
  overflow: hidden !important;
  background: var(--bg);
  position: sticky;
  top: 0;

  h3 {
    margin-bottom: 0.2075em;
  }

  p {
    margin: 0.28em;
  }
}

.photo-article:not(.last-in-group) {
  padding-bottom: calc(7.5 * var(--main-em));
  height: 100svh;
}

.photo-article.last-in-group {
  padding-bottom: 0;
  height: calc(var(--main-h) + 1px);
}

.article-image {
  object-fit: cover;

  -webkit-object-fit: cover; /* WebKit-based support for object-fit */
  -moz-object-fit: cover; /* Mozilla support for object-fit */
}

.article-info {
  font-size: 125%;
  display: flex;
  flex-direction: column;
}

.group {
  display: inline-block;
  height: var(--main-em);
  line-height: var(--main-em);
  color: var(--shadow);
}

.group::first-letter {
  color: var(--bg);
  background: var(--shadow);
  text-decoration: underline;
  text-decoration-color: transparent;

  -webkit-text-decoration: underline; /* Webkit-based underline */
  -moz-text-decoration: underline; /* Mozilla-based underline */
}

.group::selection {
  background: var(--shadow) !important;
  color: var(--bg) !important;

  -webkit-background: var(
    --shadow
  ) !important; /* Webkit-based selection background */
  -moz-background: var(
    --shadow
  ) !important; /* Mozilla-based selection background */
}

@media (orientation: landscape) {
  .photo-article {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .photo-article.reverse {
    flex-direction: row-reverse;
    text-align: right;
  }

  .article-image {
    width: 50%;
    height: calc(42.5 * var(--main-em));
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
    align-items: flex-start;
    justify-content: flex-start;
  }

  .photo-article.last-in-group.group-d {
    padding-bottom: calc(7.5 * var(--main-em));
    height: calc(43.5 * var(--main-em));
  }

  .article-image {
    width: 100%;
    height: calc(27.25 * var(--main-em));
  }

  .article-info {
    width: 100%;
    height: calc(14.75 * var(--main-em));
    padding: 0 2rem;
    font-size: 125%;
  }
}
</style>
