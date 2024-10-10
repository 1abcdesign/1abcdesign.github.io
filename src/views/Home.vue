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
    ABCDΞsign.one
    <hr>
    <span>
      {{ $t('moto') }}
    </span>
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

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    li::first-letter {
      background: var(--color);
      color: var(--background);
    }
  }
}
</style>