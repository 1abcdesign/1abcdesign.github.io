<template>
  <main class="not-found flex-center">
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
      <router-link v-if="lastValid !== '/'" :to="lastValid">
        {{ $t('backPreviousPage') }} <b>&laquo;{{ $t(lastValid.slice(1)) }}&raquo;</b> ↺
      </router-link>
      <router-link v-else to="/">
        {{ $t('back404') }} ↺
      </router-link>
    </p>
  </main>
</template>

<script setup>
// Отримуємо історію навігації або встановлюємо значення за замовчуванням
const history = JSON.parse(sessionStorage.getItem('navigation_history') || '[]')
const invalidRoute = history.pop() || '/'
const lastValid = history.length ? history.slice(-1)[0] : '/'

// Оновлюємо історію навігації в sessionStorage
sessionStorage.setItem('navigation_history', JSON.stringify(history))
</script>

<style lang="scss" scoped>
.not-found {
  flex-direction: column;
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

  p a {
    line-height: 2rem;
    border: 1px solid transparent;
  }

  p a:hover,
  p a:active {
    background: var(--color);
    color: var(--background);
  }
}
</style>
