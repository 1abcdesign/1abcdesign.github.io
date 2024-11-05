<template>
  <main class="home">
    <logo3d-view />

    <div class="middle-wrapper">
      <section class="middle">
        <h1 class="main-header">ABCDΞSIGN1</h1>

        <strong class="moto">
          <em :data-inner-text="$t('moto')">
            {{ $t('moto') }}
          </em>
        </strong>

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
  padding-top: 0.5rem;
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

    .middle {
      width: 100vmin;
      height: calc(13.25 * var(--usable-vh));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: calc(33 * var(--usable-vh) + 0.5rem);
    }

    ul {
      width: calc(43.25 * var(--usable-vh));
      font-size: calc(3 * var(--usable-vh));
      list-style: none;
      height: calc(4 * var(--usable-vh));
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;

      li {
        display: inline-block;
        height: calc(4 * var(--usable-vh));
        padding-top: calc(0.71 * var(--usable-vh));
      }

      li:hover {
        background: var(--color);
        color: var(--background);
      }

      li::first-letter {
        background: var(--color);
        color: var(--background);
        text-decoration: underline var(--background) !important;
        height: calc(3 * var(--usable-vh));
      }

      li:hover::first-letter {
        background: var(--background);
        color: var(--color);
        text-decoration: underline var(--color) !important;
      }
    }

    .main-header {
      margin: 0;
      position: relative;
      width: calc(33 * var(--usable-vh));
      height: calc(6 * var(--usable-vh)) !important;
      box-shadow: 0 0 1rem 0.5rem var(--shadow);
      text-shadow: 0 0 0.5ch var(--color);
      filter: drop-shadow(0 0 1rem var(--shadow));
      color: var(--background);
      font-size: calc(6 * var(--usable-vh));
      letter-spacing: 0.42ch;
      padding-left: 0.94ch;
      padding-top: 0.21ch;
      z-index: 1;

      &::after {
        top: 0.21ch;
        left: 0.56ch;
        width: 100%;
        position: absolute;
        content: 'ABCDΞSIGN1 ';
        color: var(--background);
      }
    }

    .moto {
      display: block;
      width: calc(43.25 * var(--usable-vh));
      position: relative;
      bottom: 0.1rem;

      & em {
        position: relative;
        width: 100%;
        display: inline-block;
        color: var(--background);
        content: attr(data-inner-text);
        text-shadow: 0 0 0.75ch var(--color);
        filter: drop-shadow(0 0 0.25ch var(--color));
        --spacing: 0.18ch;
        letter-spacing: var(--spacing);
        word-spacing: var(--spacing);
        font-size: 1.25rem;
        font-weight: 900;
        z-index: 11;

        &::after {
          width: 100%;
          top: 0;
          left: 0;
          position: absolute;
          content: attr(data-inner-text);
          text-shadow: 0 0 1px var(--color);
          z-index: 2;
        }
      }
    }
  }
}
</style>
