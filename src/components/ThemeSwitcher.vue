<template>
  <button
    @click="themeSwitch"
    class="theme-switcher"
    :title="$t('toggleThemeTip')"
  >
    {{ themeIcon }}
  </button>
</template>

<script setup>
import { ref, onMounted, watch, onUpdated } from 'vue'
// import i18n from '@/i18n'

const theme = ref('light')
const themeIcon = ref('')

const themeSwitch = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  themeIcon.value = newTheme === 'light' ? '🌚' : '🌞'
  theme.value = newTheme
  localStorage.setItem('theme', newTheme)
}

function setLogoImage() {
  const theme = localStorage.getItem('theme')
  const logo = document.getElementById('logoImage')
  const logoSrc = theme === 'light' ? '/logo_light.png' : '/logo_dark.png'
  logo.setAttribute('src', logoSrc)
}

function setFavIcon() {
  const theme = localStorage.getItem('theme')
  const favicon = document.getElementById('favicon');
  if (theme === 'dark') {
    favicon.href = 'favicon_dark.ico';
  } else {
    favicon.href = 'favicon_light.ico';
  }
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

  setLogoImage()
  setFavIcon()
})

onUpdated(() => {setLogoImage(); setFavIcon();})
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