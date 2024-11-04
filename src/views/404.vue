<template>
  <main>
    <h2>404</h2>
    <p>
      Цей маршрут '{{ routePath }}' не має кінцевого призначення, але...<br />
      ...зворотній шлях продовжує існувати.
    </p>
    <!-- Ось він, &mdash;&nbsp; -->
    <router-link to="/">
      {{ $t('back404') }}
    </router-link>>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const routePath = useRoute().fullPath
</script>

<style lang="scss" scoped></style>
