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
            <router-link to="/services#ambience" :title="$t('a00')">
              {{ $t('ambience') }}
            </router-link>
          </li>
          <li>
            <router-link to="/services#building" :title="$t('b00')">
              {{ $t('building') }}
            </router-link>
          </li>
          <li>
            <router-link to="/services#crafting" :title="$t('c00')">
              {{ $t('crafting') }}
            </router-link>
          </li>
          <li>
            <router-link to="/services#design" :title="$t('d00')">
              {{ $t('design') }}
            </router-link>
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
    height: 6.625rem;

    .middle {
      width: 100vmin;
      height: calc(6.625rem + 1px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: 17rem;
    }

    ul {
      width: 100vmin;
      font-size: 150%;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-weight: bold;
      overflow: hidden;
      border: 1px solid var(--grey);
      border-bottom: none;

      li {
        line-height: 125%;
        display: inline-block;
        width: 100%;

        a {
          display: block;
          width: 100%;
        }
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
      position: relative;
      height: 3rem;
      box-shadow: 0 0 1rem 0.5rem var(--shadow);
      text-shadow: 0 0 0.5ch var(--color);
      filter: drop-shadow(0 0 0.1rem var(--color));
      color: var(--background);
      font-size: 300%;
      letter-spacing: 0.42ch;
      padding-left: 1ch;
      padding-top: 0.21ch;
      z-index: 1;
    }

    .moto {
      display: block;
      width: 100%;
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
        font-size: 125%;
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
