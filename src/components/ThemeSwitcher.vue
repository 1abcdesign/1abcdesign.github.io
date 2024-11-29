<template>
  <button
    @click="themeSwitch"
    class="theme-switcher flex-center"
    :title="$t('toggleThemeTip')"
  >
    <svg
      v-if="theme === 'light'"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon feather-moon"
    >
      <path
        d="
          M         22 12
          A 10 10   0 1 1   12 2
          A 6 6     0 0 0   22 12
          z
        "
      ></path>
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="var(--color)"
      stroke="currentColor"
      stroke-width="2"
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
import { ref, onMounted } from 'vue'

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR

const theme = ref(localStorage.getItem('theme') || 'light')

const updateThemeColor = () => {
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

const setFavIcon = () => {
  const favicon = document.getElementById('favicon')
  favicon.href =
  ASSETS_DIR +
    (theme.value === 'dark' ? 'favicon_dark.ico' : 'favicon_light.ico')
}

const themeSwitch = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  document.documentElement.setAttribute('data-theme', theme.value)
  updateThemeColor()
  updateIconsStroke()
  setFavIcon()
}

onMounted(() => {
  updateThemeColor()
  updateIconsStroke()
  setFavIcon()
})
</script>

<style lang="scss">
.theme-switcher {
  position: relative;
  padding: 0;
  border-radius: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>
