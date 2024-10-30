<template>
  <main class="main">
    <h2>
      {{ $t('design_description_full') }}
    </h2>

    <section id="ambience">
      <div class="head">
        <h3>
          {{ $t('a00') }}
        </h3>

        <p>{{ $t('ambience_description') }}</p>
      </div>

      <photo-gallery group="a" />
    </section>

    <section id="building">
      <div class="head">
        <h3>
          {{ $t('b00') }}
        </h3>

        <p>{{ $t('building_description') }}</p>
      </div>

      <photo-gallery group="b" />
    </section>

    <section id="crafting">
      <div class="head">
        <h3>
          {{ $t('c00') }}
        </h3>

        <p>{{ $t('crafting_description') }}</p>
      </div>

      <photo-gallery group="c" />
    </section>

    <section id="design">
      <div class="head">
        <h3>
          {{ $t('d00') }}
        </h3>

        <p>{{ $t('design_description') }}</p>
      </div>

      <photo-gallery group="d" />
    </section>
  </main>
</template>

<script setup>
import PhotoGallery from '@/components/PhotoGallery.vue'
</script>

<style lang="scss" scoped>
.head {
  border: solid var(--shadow);
  border-width: 1px 0;
  font-size: 150%;
  box-shadow: 0 0 1rem 0.5rem var(--shadow);
  margin: 2rem 0 3.5rem 0;

  h3::first-letter {
    background: var(--color);
    color: var(--background);
  }
}

h2,
.head {
  padding: 1rem;
}
</style>
