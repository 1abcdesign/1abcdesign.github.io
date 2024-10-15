<template>
  <main>
    <h2>
      {{ $t('showcases') }}
    </h2>
    <section id="ambience">
      <h3>{{ $t('ambience')}}</h3>
    </section>
    <section id="building">
      <h3>{{ $t('building')}}</h3>
    </section>
    <section id="crafting">
      <h3>{{ $t('crafting')}}</h3>
    </section>
    <section id="design">
      <h3>{{ $t('design')}}</h3>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  height: 100vh;
}
</style>