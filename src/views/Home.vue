<template>
  <section class="home">
    <logo3d-view />
    <ul>
      <li><router-link to="/ambience">{{ $t('ambience')}}</router-link></li>
      <li><router-link to="/building">{{ $t('building')}}</router-link></li>
      <li><router-link to="/crafting">{{ $t('crafting')}}</router-link></li>
      <li><router-link to="/design">{{ $t('design')}}</router-link></li>
    </ul>
    <hr>
    <h1 class="main-header">
      ABCDΞsign.one
    </h1>
    <hr>
    <strong class="moto">
      <em>
        {{ $t('moto') }}
      </em>
    </strong>
  </section>
</template>

<script setup>
import Logo3dView from '@/components/Logo3dView.vue'
</script>

<style lang="scss">
.home {
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 80vh;

  hr {
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    width: 78vw;

    li {
      position: relative;
    }

    li::first-letter {
      background: var(--color);
      color: var(--background);
      text-decoration: underline var(--background);
      font-weight: bold;
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
    padding: 0;
    box-shadow: 0 0 1rem 0.5rem var(--shadow);
  }

  .main-header, .moto {
    text-shadow: 0 0 0.5ch var(--shadow);
  }
}
</style>