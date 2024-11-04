<template>
  <main>
    <h2>404</h2>
    <p>
      Цей маршрут '{{ routePath }}' не має кінцевого призначення, але...<br />
      ...зворотній шлях продовжує існувати.
    </p>
    <!-- Ось він, &mdash;&nbsp; -->
    <p v-if="$router.back">
      <a @click="$router.back">
        {{ $t('backPreviousPage') }}
      </a>
    </p>
    <p v-else>
      <router-link to="/">
        {{ $t('back404') }}
      </router-link>>
    </p>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
