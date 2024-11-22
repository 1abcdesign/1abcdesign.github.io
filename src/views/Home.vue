<template>
  <main class="home flex-align">
    <logo3d-view />

    <div class="middle-wrapper flex-center">
      <section class="middle flex-align">
        <h1 class="main-header grid-10">
          <span class="logo-letter flex-center">A</span>
          <span class="logo-letter flex-center">B</span>
          <span class="logo-letter flex-center">C</span>
          <span class="logo-letter flex-center">D</span>
          <span class="logo-letter flex-center">Ξ</span>
          <span class="logo-letter flex-center">S</span>
          <span class="logo-letter flex-center">I</span>
          <span class="logo-letter flex-center">G</span>
          <span class="logo-letter flex-center">N</span>
          <span class="logo-letter flex-center">1</span>
        </h1>

        <router-link to="/contacts" :title="$t('moto_CTA')">
            <strong class="moto">
            <em :data-inner-text="$t('moto')">
              {{ $t('moto') }}
            </em>
          </strong>
        </router-link>

        <ol>
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
        </ol>
      </section>
    </div>

    <services-slider />
  </main>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import ServicesSlider from '@/components/ServicesSlider.vue'
import { loaderState } from '@/store.js'
const Logo3dView = defineAsyncComponent(() => import('@/components/Logo3dView.vue'))

onMounted(() => loaderState.setShowLoader(false))
</script>

<style lang="scss" scoped>
.home {
  padding-top: 0.5rem;
  flex-direction: column;
  justify-content: flex-start;

  .middle-wrapper {
    flex-direction: column;
    height: 6.625rem;

    .middle {
      width: 100vmin;
      height: 6.625rem;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: calc(17rem + 1px);
    }

    .main-header {
      margin: 0;
      position: relative;
      height: 3rem;
      font-size: 3rem;
      color: var(--background);
      box-shadow: 0 0 0.5rem 0.25rem var(--shadow);
      text-shadow: 0 0 0.33ch var(--color);
      /* Cross-browser filters */
      filter: drop-shadow(0 0 0.1ch var(--color));
      -webkit-filter: drop-shadow(0 0 0.1ch var(--color));
      padding-top: 0.6rem;
      width: 16.5rem;
      line-height: 1rem;

      .logo-letter {
        width: 100%;
        align-self: center;
        justify-self: center;
      }
    }

    .moto {
      display: block;
      position: relative;
      width: 100vw;
      height: 1.875rem;
      padding: 0.2rem;
      background: linear-gradient(45deg, var(--color), transparent, var(--color));

      & em {
        position: relative;
        width: 100vw;
        display: inline-block;
        color: var(--background);
        font-size: 1.33rem;
        font-weight: 900;

        text-shadow: 0 0 0.5ch var(--color);
        /* Cross-browser filters */
        filter: drop-shadow(0 0 0.33ch var(--color));
        -webkit-filter: drop-shadow(0 0 0.33ch var(--color));

        --spacing: 0.18ch;
        letter-spacing: var(--spacing);
        word-spacing: var(--spacing);

        &::after {
          width: 100%;
          top: 0;
          left: 0;
          position: absolute;
          content: attr(data-inner-text);
          z-index: 1;
        }
      }
    }

    ol {
      position: relative;
      z-index: 5;
      width: 100vmin;
      font-size: 1.33rem;
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-weight: bold;
      overflow: hidden;
      line-height: 1.75rem;
      height: 1.75rem;

      @media (orientation: landscape) {
        border-left: 1px solid var(--shadow);
        border-right: 1px solid var(--shadow);
      }

      li {
        display: inline-block;
        background: var(--background);
        width: 100%;
        line-height: 1.75rem;

        a {
          display: block;
          width: 100%;
          text-decoration: none;
          line-height: 1.75rem;
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
