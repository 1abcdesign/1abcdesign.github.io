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

const BASE_URL = import.meta.env.BASE_URL

const languageOptions = Object.keys(i18n.global.messages).map((locale) => ({
  value: locale,
  image: BASE_URL + i18n.global.messages[locale].flag,
}))

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const sortedLanguageOptions = computed(() => {
  return [...languageOptions].sort((o1) => (i18n.global.locale === o1.value ? -1 : 1))
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
  border-radius: calc(2.5 * var(--usable-vh));

  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--grey);

  &-option {
    margin: 0;
    width: calc(5 * var(--usable-vh));

    &-img {
      margin: -1px;
      border-radius: calc(2.5 * var(--usable-vh));
      object-fit: cover;
      width: calc(5 * var(--usable-vh));
      height: calc(5 * var(--usable-vh));
    }
  }

  // Огортаємо декларацію transition у блок з &
  & {
    transition: all 0.5s;
  }
}

.close {
  z-index: 5;
  height: calc(5 * var(--usable-vh));
}

.selected {
  font-weight: bold;
}

.open {
  display: flex;
  height: calc(10 * var(--usable-vh));
}
</style>