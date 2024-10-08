<template>
  <button
    @click="themeSwitch"
    class="theme-switcher"
    title="buttonTitle"
  >
    {{ themeIcon }}
  </button>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import i18n from '@/i18n'

const theme = ref('light')
const themeIcon = ref('')
// const lang = 'eng'
// const localTitle = i18n.global.messages[lang]['toggleThemeTip']
// const buttonTitle = computed(() => {
//   return `
//       theme.value === 'light' ? '🌞' : '🌚'
//       + localTitle
//       + theme.value === 'light' ? '🌚' : '🌞'
//       `
// })

const themeSwitch = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  themeIcon.value = newTheme === 'light' ? '🌚' : '🌞'
  theme.value = newTheme
  localStorage.setItem('theme', newTheme)
}

watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
})

onMounted(() => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const savedTheme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light')
  theme.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)
  themeIcon.value = savedTheme === 'light' ? '🌚' : '🌞'

  // Set favicon based on theme
  const favicon = document.getElementById('favicon');
  if (savedTheme === 'dark') {
    favicon.href = 'favicon_dark.ico';
  } else {
    favicon.href = 'favicon_light.ico';
  }
})
</script>

<style>
.theme-switcher {
  cursor: pointer;
  display: inline-flex;
  text-align: center;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 1vmin;
  font-size: 4vmin;
  line-height: 4vmin;
  position: relative;
  z-index: 5;
  transition: transform 0.5s;
}
</style>