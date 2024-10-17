<template>
  <main class="main">
    <!-- <h2>{{ $t('showcases') }}</h2> -->

    <h2>{{ $t('design_description_full') }}</h2> <!-- Додано тут -->

    <section id="ambience">
      <h3>{{ $t('a00') }}</h3>
      <p>{{ $t('ambience_description') }}</p>
      <photo-gallery group="a" />
    </section>

    <section id="building">
      <h3>{{ $t('b00') }}</h3>
      <p>{{ $t('building_description') }}</p>
      <photo-gallery group="b" />
    </section>

    <section id="crafting">
      <h3>{{ $t('c00') }}</h3>
      <p>{{ $t('crafting_description') }}</p>
      <photo-gallery group="c" />
    </section>

    <section id="design">
      <h3>{{ $t('d00') }}</h3>
      <p>{{ $t('design_description') }}</p>
      <photo-gallery group="d" />
    </section>
  </main>
</template>

<script setup>
import PhotoGallery from '@/components/PhotoGallery.vue';
</script>

<style lang="scss" scoped></style>
