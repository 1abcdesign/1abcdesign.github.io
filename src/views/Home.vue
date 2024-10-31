<template>
  <main class="home">
    <div class="top-left">
      <logo3d-view />

      <section class="middle">
        <ul>
          <li>
            <router-link to="/services#ambience">{{
              $t('ambience')
            }}</router-link>
          </li>
          <li>
            <router-link to="/services#building">{{
              $t('building')
            }}</router-link>
          </li>
          <li>
            <router-link to="/services#crafting">{{
              $t('crafting')
            }}</router-link>
          </li>
          <li>
            <router-link to="/services#design">{{ $t('design') }}</router-link>
          </li>
        </ul>

        <h1 class="main-header">ABCDΞsign.one</h1>

        <strong class="moto">
          <em>
            {{ $t('moto') }}
          </em>
        </strong>
      </section>
    </div>

    <services-slider />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const Logo3dView = defineAsyncComponent(() =>
  import('@/components/Logo3dView.vue')
)
const ServicesSlider = defineAsyncComponent(() =>
  import('@/components/ServicesSlider.vue')
)
</script>

<style lang="scss">
.home {
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .middle {
    width: 100%;
    height: calc(11 * var(--usable-vh));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: calc(33.5 * var(--usable-vh));
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 78vw;
    font-weight: bold;
    font-size: 120%;

    li {
      position: relative;
    }

    li:hover {
      background: var(--color);
      color: var(--background);
    }

    li::first-letter {
      background: var(--color);
      color: var(--background);
      text-decoration: underline var(--background) !important;
    }

    li:hover::first-letter {
      background: var(--background);
      color: var(--color);
      text-decoration: underline var(--color) !important;
    }
  }

  .main-header {
    letter-spacing: 1ch;
    margin: 0;
    padding: 0 0 0 1ch;
    box-shadow: 0 0 1rem 0.5rem var(--shadow);
  }

  .main-header,
  .moto {
    text-shadow: 0 0 0.5ch var(--shadow);
  }

  .moto {
    word-spacing: 0.5ch;
  }
}
</style>
