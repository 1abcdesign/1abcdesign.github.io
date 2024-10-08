<template>
  <section class="home">
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

<script setup></script>

<style lang="scss" scoped>
.home {
  text-align: center;

  ul {
    list-style: none;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>