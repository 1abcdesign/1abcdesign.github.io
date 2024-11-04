<template>
  <main>
    <h2>
      ⛔ 404
      <br>
      {{ $t('404') }}</h2>
    <p>
      {{ $t('404_1') }} <b><i>'{{ invalidRoute }}'</i></b> {{ $t('404_2') }}<br />
      {{ $t('404_3') }}
    </p>
    <p >
      {{ $t('404_4') }} &mdash;&nbsp;
      <router-link v-if="lastValid && lastValid !== '/'" :to="lastValid">
        {{ $t('backPreviousPage') }} <b>&laquo;{{ $t(lastValid.slice(1)) }}&raquo;</b> ↺
      </router-link>
      <router-link v-else to="/">
        {{ $t('back404') }} ↺
      </router-link>
    </p>
  </main>
</template>

<script setup>
const history = JSON.parse(sessionStorage.getItem('navigation_history'))
const invalidRoute = history.pop()
const lastValid = history.slice(-1)[0]
sessionStorage.setItem('navigation_history', JSON.stringify(history));
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  padding: 3rem;

  h2 {
    font-size: 150%;
  }

  p:nth-of-type(2) b {
    white-space: nowrap;  // Prevents line breaks within the word
    overflow-wrap: normal; // Fallback in case content needs wrapping
    word-break: keep-all;  // Keeps words unbroken unless necessary
  }
}
</style>
