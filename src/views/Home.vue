<template>
  <main class="home">
    <logo3d-view />

    <div class="middle-wrapper">
      <section class="middle">
        <h1 class="main-header">
          <span class="logo-letter">A</span>
          <span class="logo-letter">B</span>
          <span class="logo-letter">C</span>
          <span class="logo-letter">D</span>
          <span class="logo-letter">Ξ</span>
          <span class="logo-letter">S</span>
          <span class="logo-letter">I</span>
          <span class="logo-letter">G</span>
          <span class="logo-letter">N</span>
          <span class="logo-letter">1</span>
        </h1>

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

    .main-header {
      margin: 0;
      position: relative;
      height: 3rem;
      font-size: 3rem;
      color: var(--background);
      box-shadow: 0 0 1rem 0.4rem var(--shadow);
      text-shadow: 0 0 0.5ch var(--color);
      /* Cross-browser filters */
      filter: drop-shadow(0 0 0.1rem var(--color));
      -webkit-filter: drop-shadow(0 0 0.1rem var(--color));

      /* letter-spacing: 0.42ch;
      padding-left: 1ch;
      padding-top: 0.21ch;
      z-index: 1; */

      padding-top: 0.6rem;

      width: 16.5rem;
      display: grid;
      line-height: 1rem;
      grid-template-columns: repeat(10, 1fr);
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;


      .logo-letter {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        justify-self: center;
      }
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
        font-size: 125%;
        font-weight: 900;
        z-index: 11;

        /* Cross-browser filters */
        filter: drop-shadow(0 0 0.25ch var(--color));
        -webkit-filter: drop-shadow(0 0 0.25ch var(--color));

        --spacing: 0.18ch;
        letter-spacing: var(--spacing);
        word-spacing: var(--spacing);

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

    ul {
      width: 100vmin;
      font-size: 150%;
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-weight: bold;
      overflow: hidden;
      border: 1px solid var(--shadow);
      border-bottom: none;
      line-height: 2rem;
      height: 2rem;

      li {
        display: inline-block;
        width: 100%;
        line-height: 2rem;

        a {
          display: block;
          width: 100%;
          text-decoration: none;
          line-height: 2rem;
        }
      }

      li:hover {
        background: var(--color);
        color: var(--background);

        a {
          text-decoration: underline;
        }
      }

      li::first-letter {
        background: var(--color);
        color: var(--background);
        text-decoration: underline transparent !important;
      }

      li:hover::first-letter {
        background: var(--background);
        color: var(--color);
        text-decoration: underline var(--color) !important;
      }
    }
  }
}
</style>
