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
        :class="{ selected: selectedLanguage === option.value }"
        class="select-option"
      >
        <img
          :src="option.image"
          :alt="$t('lang') + ' flag'"
          class="select-option-img"
        />
      </li>
    </menu>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import i18n from '@/i18n'
import getIPInfo from '@/helpers/ipInfoHelper'

const BASE_URL = import.meta.env.BASE_URL

const languageOptions = Object.keys(i18n.global.messages).map(locale => ({
  value: locale,
  image: BASE_URL + i18n.global.messages[locale].flag,
}))

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const sortedLanguageOptions = computed(() => {
  return [...languageOptions].sort(o1 =>
    i18n.global.locale === o1.value ? -1 : 1
  )
})

const setLanguage = lang => {
  i18n.global.locale = lang
  localStorage.setItem('lang', lang)
  selectedLanguage.value = lang
}

const handleClick = lang => {
  setLanguage(lang)
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

// Function to set the title
const setTitle = () => {
  const motto = i18n.global.locale === 'en'
    ? 'Your turnkey choice that’s second to none!'
    : 'Ваш вибір під ключ, що не має замін!'
  document.title = `ABCDesign-One — ${motto}`
}

onMounted(async () => {
  let defaultLang = localStorage.getItem('lang')

  if (!defaultLang) {
    const ipInfo = await getIPInfo()
    defaultLang = ipInfo.country.iso_code === 'UA' ? 'uk' : 'en'
    setLanguage(defaultLang)
  } else {
    i18n.global.locale = defaultLang
  }

  setTitle() // Set the title on mount
})

// Watch for language changes to update the title
watch(selectedLanguage, () => {
  setTitle()
})
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
    padding: 0;
    margin: 0 0 0 0;
    width: calc(5 * var(--usable-vh));

    &-img {
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
