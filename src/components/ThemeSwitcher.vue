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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon feather-moon"
    >
      <!-- M21 12.79  Move to the starting point (21, 12.79) -->
      <!-- A9 9 0 1 1 11.21 3 Draw a large arc with radius 9 from (21, 12.79) to (11.21, 3) -->
      <!-- A7 7 0 0 0 21 12.79 Draw a smaller arc with radius 7 back to (21, 12.79) -->
      <!-- z Close the path by connecting the last point to the starting point -->
      <!-- <path
        d="
          M       21 12.79
          A 9 9   0 1 1       11.21 3
          A 7 7   0 0 0       21 12.79
          z
        "
      ></path> -->
      <path
        d="
          M         23 12
          A 11 11   0 1 1       12 1
          A 5 5     0 0 0       23 12
          z
        "
      ></path>
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

<style lang="scss">
.theme-switcher {
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 1.25rem;
  z-index: 5;
  padding: 0;

  position: relative;
  box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);
  background: linear-gradient(45deg, var(--background) 0%, var(--shadow) 12.5%, transparent 75%, var(--color) 100%);

  &::after {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: inherit;
    border-radius: inherit;
    box-shadow: 0 0 0.25rem var(--color);
    z-index: -1;
  }

  svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.85;
  }
}
</style>
