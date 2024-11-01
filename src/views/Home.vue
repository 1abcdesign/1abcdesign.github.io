<template>
  <main class="home">
    <logo3d-view />

    <div class="middle-wrapper">
      <section class="middle">
        <h1 class="main-header">ABCDΞsign1</h1>

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

  .middle-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(13 * var(--usable-vh));
    /* border: 1px solid red; */

    .middle {
      width: 100vmin;
      height: calc(13.25 * var(--usable-vh));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      position: absolute;
      top: calc(33 * var(--usable-vh));
    }

    ul {
      width: calc(43.25 * var(--usable-vh));
      font-size: calc(2 * var(--usable-vh));
      list-style: none;
      margin: 0;
      padding: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: bold;

      li {
        display: inline-block;
        text-align: center;
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
      margin: 0;
      box-shadow: 0 0 1rem 0.5rem var(--shadow);
      font-size: calc(5 * var(--usable-vh));
      height: calc(8 * var(--usable-vh));

      color: var(--background);
      position: relative;
      text-shadow: 0 0 0.5ch var(--color);

      width: calc(33 * var(--usable-vh));

      --top-offset: calc(0.5 * var(--usable-vh));
      padding-right: 0.16ch;
      padding-top: var(--top-offset);

      &::after {
        top: var(--top-offset);
        right: 0.08ch;
        width: 100%;
        position: absolute;
        content: 'ABCDΞsign1';
        color: var(--background);
      }
    }

    .moto {
      display: block;
      width: calc(43.25 * var(--usable-vh));
      position: relative;
      bottom: 0.1rem;

      & em {
        width: 100%;
        text-shadow: 0 0 0.5ch var(--shadow);
        --spacing: 0.089ch;
        letter-spacing: var(--spacing);
        word-spacing: var(--spacing);
      }
    }
  }

}
</style>
