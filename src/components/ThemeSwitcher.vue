<template>
  <button
    @click="toggleTheme"
    class="theme-toggler"
    :title="buttonTitle"
  >
    {{ themeIcon }}
  </button>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import i18n from '@/i18n'

const theme = ref('light')
const themeIcon = ref('')
const lang = 'eng'
const localTitle = i18n.global.messages[lang]['toggleThemeTip']
const buttonTitle = computed(() => {
  return `
      theme.value === 'light' ? '🌞' : '🌚'
      + localTitle
      + theme.value === 'light' ? '🌚' : '🌞'
      `
})

const toggleTheme = () => {
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
})
</script>

<style>


.theme-toggler {
  background-color: transparent;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  position: relative;
  z-index: 5;
  transition: transform 0.5s;
}

.theme-toggler:hover {
  transform: scale(1.2);
}
</style>