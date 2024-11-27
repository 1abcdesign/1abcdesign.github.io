<template>
  <main class="home flex-align main">
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
            <router-link
              to="/services#ambience"
              :title="$t('a00')"
              class="services-link"
            >
              {{ $t('ambience') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/services#building"
              :title="$t('b00')"
              class="services-link"
            >
              {{ $t('building') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/services#crafting"
              :title="$t('c00')"
              class="services-link"
            >
              {{ $t('crafting') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/services#design"
              :title="$t('d00')"
              class="services-link"
            >
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
import { defineAsyncComponent } from 'vue'
import ServicesSlider from '@/components/ServicesSlider.vue'

const Logo3dView = defineAsyncComponent(() => import('@/components/Logo3dView.vue'))
</script>

<style lang="scss" scoped>
.home {
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  .middle-wrapper {
    height: calc(6.625 * var(--main-em));

    flex-direction: column;

    .middle {
      height: calc(6.625 * var(--main-em));
      top: calc(16.5 * var(--main-em) + 1px);

      width: 100vmin;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
    }

    .main-header {
      height: calc(3 * var(--main-em));
      font-size: calc(2.5 * var(--main-em));
      padding: calc(0.5 * var(--main-em)) calc(0.5 * var(--main-em)) 0;
      width: calc(15 * var(--main-em));
      line-height: var(--main-em);

      margin: 0;
      position: relative;

      box-shadow: 0 0 0.5rem 0.25rem var(--shadow);
      text-shadow: 0 0 0.142857ch var(--color-alt);
      filter: drop-shadow(0 0 0.125ch var(--color-alt));
      -webkit-filter: drop-shadow(0 0 0.125ch var(--color-alt));

      .logo-letter {
        width: 100%;
        align-self: center;
        justify-self: center;
      }
    }

    .moto {
      height: 1.875rem;
      height: calc(1.875 * var(--main-em) + 1px);
      padding: calc(0.2 * var(--main-em));
      font-size: calc(1.33 * var(--main-em));

      --spacing: 0.18ch;
      letter-spacing: var(--spacing);
      word-spacing: var(--spacing);

      display: block;
      position: relative;
      width: 100vw;

      background: linear-gradient(45deg, var(--color), transparent, var(--color));

      & em {
        position: relative;
        width: 100vw;
        display: inline-block;

        font-weight: 900;
        text-shadow: 0 0 0.5ch var(--bg);
        filter: drop-shadow(0 0 0.33ch var(--bg));
        -webkit-filter: drop-shadow(0 0 0.33ch var(--bg));

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          content: attr(data-inner-text);
        }
      }
    }

    ol {
      height: calc(1.75 * var(--main-em));

      font-weight: bold;
      width: 100vmin;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      list-style: none;
      overflow: hidden;
      position: relative;
      z-index: 5;

      @media (orientation: landscape) {
        border-left: 1px solid var(--shadow);
        border-right: 1px solid var(--shadow);
      }

      li {
        width: 100%;
        display: inline-block;
        background: var(--bg);

        a {
          line-height: calc(1.75 * var(--main-em));
          font-size: calc(1.35 * var(--main-em));
          padding: 1px 0 0 0;

          width: 100%;
          display: block;
          text-decoration: none;
        }
      }

      li:hover {
        background: var(--color);
        color: var(--bg);

        a {
          text-decoration: underline;
        }
      }

      li::first-letter {
        background: var(--color);
        color: var(--bg);
        text-decoration: underline transparent !important;
      }

      li:hover::first-letter {
        background: var(--bg);
        color: var(--color);
        text-decoration: underline var(--color) !important;
      }
    }
  }
}
</style>
