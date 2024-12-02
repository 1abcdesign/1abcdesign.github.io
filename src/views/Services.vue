<template>
  <main class="main services">
    <h2>
      {{ $t('design_description_full') }}
    </h2>

    <section id="ambience">
      <div class="head box-shadow-1-05 bg-texture">
        <h3>
          {{ $t('a00') }}
        </h3>

        <p>{{ $t('ambience_description') }}</p>
      </div>

      <photo-gallery group="a" />
    </section>

    <section id="building">
      <div class="head box-shadow-1-05 bg-texture">
        <h3>
          {{ $t('b00') }}
        </h3>

        <p>{{ $t('building_description') }}</p>
      </div>

      <photo-gallery group="b" />
    </section>

    <section id="crafting">
      <div class="head box-shadow-1-05 bg-texture">
        <h3>
          {{ $t('c00') }}
        </h3>

        <p>{{ $t('crafting_description') }}</p>
      </div>

      <photo-gallery group="c" />
    </section>

    <section id="design">
      <div class="head box-shadow-1-05 bg-texture">
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
import { defineAsyncComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const PhotoGallery = defineAsyncComponent(() =>  import('@/components/PhotoGallery.vue'))

onMounted(() => {
  const router = useRouter()

  if (router.currentRoute.value.hash) {
    const hash = router.currentRoute.value.hash

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const container = document.querySelector('.services') || window;

        const offset = Math.max(
          container === window
            ? element.getBoundingClientRect().top + window.scrollY
            : element.offsetTop,
          element.offsetTop
        )

        container.scrollTo({
          top: offset,
          behavior: 'smooth',
        })
      }
    }, 1170) // Додаткова затримка для асинхронного контенту
  }
})
</script>

<style lang="scss" scoped>
.services {
  .head {
    font-size: 150%;
    margin: 3.5rem 0 3.5rem 0;
    position: sticky;
    top: 0;
    background: var(--bg-05);

    h3:hover {
      background: transparent;
    }

    h3::first-letter {
      background: var(--color);
      color: var(--bg);
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
