<template>
  <main class="main home flex-align flex-col">
    <logo3d-view />

    <section class="middle flex-align flex-col">
      <h1
        class="main-header grid-9 bg-texture"
        :title="$t('headerTitle')"
        :area-label="$t('transcription')"
      >
        <span class="logo-letter flex-center">A</span>
        <span class="logo-letter flex-center">B</span>
        <span class="logo-letter flex-center">C</span>
        <span class="logo-letter flex-center">D</span>
        <span class="logo-letter flex-center">Ξ</span>
        <span class="logo-letter flex-center">S</span>
        <span class="logo-letter flex-center">I</span>
        <span class="logo-letter flex-center">G</span>
        <span class="logo-letter flex-center">N</span>
      </h1>

      <router-link to="/contacts" :title="$t('moto_CTA')">
        <strong class="moto">
          <em :data-moto="$t('moto')">
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

    <services-slider />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ServicesSlider = defineAsyncComponent(() => import('@/components/ServicesSlider.vue'))
const Logo3dView = defineAsyncComponent(() => import('@/components/Logo3dView.vue'))
</script>

<style lang="scss">
.home {
  justify-content: flex-start;
  overflow: hidden;

  .middle {
    position: absolute;
    top: calc(16.5 * var(--main-em) + 1px);
    width: 100vmin;
    height: calc(6.625 * var(--main-em));
    justify-content: space-between;
  }

  .main-header {
    position: relative;
    width: calc(16 * var(--main-em));
    height: calc(3 * var(--main-em));
    line-height: calc(3 * var(--main-em));
    border: calc(0.5 * var(--main-em)) solid transparent;
    margin: 0;
    font-size: calc(3 * var(--main-em));
    box-shadow: 0 0 0.5rem 0.25rem var(--shadow);
    backdrop-filter: blur(1px);
    filter: drop-shadow(0 0 0.125ch var(--color-alt));
    -webkit-filter: drop-shadow(0 0 0.125ch var(--color-alt));

    .logo-letter {
      line-height: calc(1.75 * var(--main-em));
      padding-top: calc(0.4 * var(--main-em));
    }
  }

  .moto {
    position: relative;
    display: block;
    text-decoration: none;
    width: 100vw;
    height: calc(1.875 * var(--main-em) + 1px);
    padding-top: max(calc(0.33 * var(--main-em)), 0.33rem);
    background: linear-gradient(45deg, var(--color), transparent, var(--color));
    font-size: calc(1.33 * var(--main-em));

    & em {
      position: relative;
      display: inline-block;
      width: 100vw;
      font-weight: bold;
      text-shadow: 0 0 0.5ch var(--bg);
      filter: drop-shadow(0 0 0.33ch var(--bg));
      -webkit-filter: drop-shadow(0 0 0.33ch var(--bg));

      &::after {
        content: attr(data-moto);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }

  ol {
    width: 100vmin;
    height: calc(1.75 * var(--main-em));
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    font-weight: bold;
    overflow: hidden;

    @media (orientation: landscape) {
      border-left: 1px solid var(--shadow);
      border-right: 1px solid var(--shadow);
    }

    li {
      display: inline-block;
      background: var(--bg);

      a {
        display: block;
        line-height: calc(2.5 * var(--main-em));
        font-size: calc(1.33 * var(--main-em));
        padding: 1px 0 0 0;
        text-decoration: none;
        position: relative;
        top: calc(-0.45 * var(--main-em));
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
      border: 1px solid var(--color);
      background: var(--color);
      color: var(--bg);
      text-decoration: underline transparent !important;
    }

    li:hover::first-letter {
      border: 1px solid var(--bg);
      background: var(--bg);
      color: var(--color);
      text-decoration: underline var(--color) !important;
    }
  }
}
</style>
