<template>
  <button
    @click="themeSwitch"
    class="theme-switcher flex-center"
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
const theme = ref(localStorage.getItem('theme') || 'light') // Get saved theme or default to 'light'

function themeSwitch() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  updateThemeColor()
  setFavIcon()
  updateIconsStroke()
}

function setFavIcon() {
  const favicon = document.getElementById('favicon')
  favicon.href =
    BASE_URL +
    (theme.value === 'dark' ? 'favicon_dark.ico' : 'favicon_light.ico')
}

const updateThemeColor = () => {
  const rootStyle = document.documentElement.style
  rootStyle.setProperty(
    '--theme-color',
    theme.value === 'light' ? '#000' : '#fff'
  )
  document.documentElement.classList.add('force-redraw')
  setTimeout(() => {
    document.documentElement.classList.remove('force-redraw')
  }, 50)
}

const updateIconsStroke = () => {
  const strokeColor = theme.value === 'light' ? '#000' : '#fff'
  document.querySelectorAll('.icon').forEach(icon => {
    icon.setAttribute('stroke', strokeColor)
  })
}

onMounted(() => {
  updateThemeColor()
  setFavIcon()
  updateIconsStroke()
})

watch(theme, newTheme => document.documentElement.setAttribute('data-theme', newTheme))
</script>

<style>
.theme-switcher {
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 1.25rem;
  position: relative;
  z-index: 5;
  padding: 0;
}
</style>
