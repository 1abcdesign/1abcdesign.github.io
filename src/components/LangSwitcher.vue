<template>
  <section class="lang-switcher" :title="$t('toggleLangTip')">
    <menu
      v-click-outside="closeMenu"
      class="select"
      :class="{ open: showOptions, close: !showOptions }"
    >
      <li
        v-for="(option, index) in sortedLanguageOptions"
        :key="index"
        @click="handleClick(option.value)"
        :class="{ selected:  selectedLanguage === option.value }"
        class="select-option"
      >
        <img :src="option.image" :alt="$t('lang') + ' flag'" class="select-option-img" />
      </li>
    </menu>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import i18n from '@/i18n'
import getIPInfo from '@/helpers/ipInfoHelper'

const languageOptions = Object.keys(i18n.global.messages).map((locale) => ({
  value: locale,
  image: i18n.global.messages[locale].flag,
}))

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const sortedLanguageOptions = computed(() => {
  const sortedOptions = [...languageOptions]
  sortedOptions.sort((o1) => (i18n.global.locale === o1.value ? -1 : 1))
  return sortedOptions
})

const setLanguage = (lang) => {
  i18n.global.locale = lang
  localStorage.setItem('lang', lang)
  selectedLanguage.value = lang
}

const handleClick = (lang) => {
  setLanguage(lang)
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

onMounted(async () => {
  let defaultLang = localStorage.getItem('lang')

  if (!localStorage.getItem('lang')) {
    const ipInfo = await getIPInfo()
    defaultLang = ipInfo.country.iso_code === 'UA' ? 'uk' : 'en'
    i18n.global.locale = defaultLang
    localStorage.setItem('lang', defaultLang)
  }

  i18n.global.locale = defaultLang
})

// watch(selectedLanguage, () => {
//   window.location.reload()
// }, { deep: true })
</script>

<style lang="scss">
.lang-switcher {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
}

.select {
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0.5vmin;
  background: var(--grey);
  box-shadow: inset 0 0 0.5vmin 0.25vmin var(--shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;

  &-option {
    padding: 0;
    margin: 0;

    &-img {
      box-shadow: 0 0 0.5vmin 0.25vmin var(--shadow);
      border-radius: 0.5vmin;
    }
  }

  transition: all 0.5s;
}

.close {
  z-index: 5;
}

.selected {
  font-weight: bold;
}

.open {
  display: flex;
}

.select {
  width: 10vmin;

  &-option {
    padding: 1vmin 1vmin 0.5vmin;

    &-img {
      width: 8vmin;
      height: 4vmin;
    }
  }
}

.close {
  height: 6vmin;
}

.open {
  height: 12vmin;
}

@media (orientation: landscape) {}

@media (orientation: portrait) {}
</style>