<template>
  <main class="services">
    <h2>
      {{ $t('design_description_full') }}
    </h2>

    <section id="ambience">
      <div class="head box-shadow-1-05">
        <h3>
          {{ $t('a00') }}
        </h3>

        <p>{{ $t('ambience_description') }}</p>
      </div>

      <photo-gallery group="a" />
    </section>

    <section id="building">
      <div class="head box-shadow-1-05">
        <h3>
          {{ $t('b00') }}
        </h3>

        <p>{{ $t('building_description') }}</p>
      </div>

      <photo-gallery group="b" />
    </section>

    <section id="crafting">
      <div class="head box-shadow-1-05">
        <h3>
          {{ $t('c00') }}
        </h3>

        <p>{{ $t('crafting_description') }}</p>
      </div>

      <photo-gallery group="c" />
    </section>

    <section id="design">
      <div class="head box-shadow-1-05">
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
.services {
  .head {
    border: solid var(--shadow);
    border-width: 1px 0;
    font-size: 150%;
    margin: 3.5rem 0 3.5rem 0;

    h3:hover {
      background: transparent;
    }

    h3::first-letter {
      background: var(--color);
      color: var(--background);
      text-decoration: underline;
      text-decoration-color: transparent;
    }
  }

  h2,
  .head {
    padding: 1rem;
  }
}
</style>
