<template>
  <button
    @click="themeSwitch"
    class="theme-switcher"
    :title="$t('toggleThemeTip')"
  >
    <!-- Місяць на світлій темі -->
    <svg
      v-if="theme === 'light'"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon feather-moon"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>

    <!-- Сонце на темній темі -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon feather-sun"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
const BASE_URL = import.meta.env.BASE_URL
const theme = ref('light')

function themeSwitch() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  updateThemeColor()
  addTransitionClass()
  setFavIcon()
  updateIconsStroke()
}

function setFavIcon() {
  const theme = localStorage.getItem('theme')
  const favicon = document.getElementById('favicon')
  if (theme === 'dark') {
    favicon.href = BASE_URL + 'favicon_dark.ico'
  } else {
    favicon.href = BASE_URL + 'favicon_light.ico'
  }
}

const updateThemeColor = () => {
  const currentTheme = theme.value
  const rootStyle = document.documentElement.style

  // Примусове оновлення властивостей стилю
  rootStyle.setProperty(
    '--theme-color',
    currentTheme === 'light' ? '#000' : '#fff'
  )

  // Додаємо і видаляємо клас для оновлення стилю (для iOS)
  document.documentElement.classList.add('force-redraw')
  setTimeout(() => {
    document.documentElement.classList.remove('force-redraw')
  }, 50)
}

const updateIconsStroke = () => {
  const icons = document.querySelectorAll('.icon') // Отримуємо всі елементи з класом .feather
  const strokeColor = theme.value === 'light' ? '#000' : '#fff' // Вибір кольору для світлої або темної теми

  icons.forEach(icon => {
    icon.setAttribute('stroke', strokeColor) // Оновлюємо атрибут stroke для кожного іконки
  })
}

// Додає клас для анімації при зміні теми
const addTransitionClass = () => {
  const icons = document.querySelectorAll('.feather')
  icons.forEach(icon => {
    icon.classList.add('theme-change')
  })

  // Видаляємо клас після закінчення анімації
  setTimeout(() => {
    icons.forEach(icon => icon.classList.remove('theme-change'))
  }, 500) // 500 мс — тривалість переходу
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.value = savedTheme
  updateThemeColor()
  setFavIcon()
  updateIconsStroke()
})

watch(theme, newTheme => {
  document.documentElement.setAttribute('data-theme', newTheme)
})
</script>

<style>
:root {
  --theme-color: #000; /* Для світлої теми (чорний) */
}

[data-theme='dark'] {
  --theme-color: #fff; /* Для темної теми (білий) */
}

.theme-switcher {
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: calc(2.5 * var(--usable-vh));
  position: relative;
  z-index: 5;
  transition: transform 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.icon {
  width: calc(5 * var(--usable-vh));
  height: calc(5 * var(--usable-vh));
  stroke: var(--theme-color); /* Використовуємо CSS-змінну для кольору */
  fill: none;
}
</style>
