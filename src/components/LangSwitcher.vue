<template>
  <div class="lang-swither-wrapper">
    <menu
      :title="$t('toggleLangTip')"
      v-click-outside="closeMenu"
      class="lang-switcher select flex-align flex-col"
      :class="{ open: showOptions, close: !showOptions }"
    >
      <li
        v-for="(option, index) in sortedLanguageOptions"
        @click="handleClick(option.value)"
        :key="index"
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
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import i18n from '@/i18n'
import getIPInfo from '@/helpers/ipInfoHelper'

const BASE_URL = import.meta.env.BASE_URL

const languageOptions = Object.keys(i18n.global.messages).map(locale => ({
  value: locale,
  image: BASE_URL + i18n.global.messages[locale].flag,
}))

const sortedLanguageOptions = computed(() => {
  return [...languageOptions].sort(o1 => i18n.global.locale === o1.value ? -1 : 1)
})

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const handleClick = lang => {
  setLanguage(lang)
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

// Function to set the title
const setTitle = () => {
  const motto =
    i18n.global.locale === 'en'
      ? 'From «A-B-C» to «All-Turnkey» Design!'
      : 'Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!'
  document.title = `ABCDΞSIGN — ${motto}`
}

const updateIndexInfo = lang => {
  // Update the lang attribute on the <html> tag
  document.documentElement.lang = lang
  document.documentElement.setAttribute('xml:lang', lang)

  // Define the content for each language
  const content = {
    uk: {
      description:
        "ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн! Професійний дизайн інтер'єру, екстер'єру та ландшафтний дизайн в Україні.",
      keywords:
        "дизайн інтер'єру, екстер'єрний дизайн, ландшафтний дизайн, дизайнерські послуги, ABCDΞSIGN, дизайн під ключ, Україна",
      title: 'ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!',
      ogTitle: 'ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!',
      ogDescription:
        'Від Ескізу до Дизайну Під Ключ — Все в Одному Місці. Надаємо комплексні дизайнерські послуги.',
      twitterTitle: 'ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!',
      twitterDescription:
        'Від Ескізу до Дизайну Під Ключ. Надаємо дизайнерські послуги для вашого простору.',
    },
    en: {
      description:
        'ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design! Professional interior, exterior, and landscape design services in Ukraine.',
      keywords:
        'interior design, exterior design, landscape design, design services, ABCDΞSIGN, turnkey design, Ukraine',
      title: 'ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design!',
      ogTitle: 'ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design!',
      ogDescription:
        'From Sketch to Turnkey Design — All in One Place. We provide comprehensive design services.',
      twitterTitle: 'ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design!',
      twitterDescription:
        'From Sketch to Turnkey Design. Providing design services for your space.',
    },
  }

  // Get the correct language content
  const langContent = content[lang]

  // Update meta description and keywords
  document
    .querySelector("meta[name='description']")
    .setAttribute('content', langContent.description)
  document
    .querySelector("meta[name='keywords']")
    .setAttribute('content', langContent.keywords)

  // Update Open Graph tags
  document
    .querySelector("meta[property='og:title']")
    .setAttribute('content', langContent.ogTitle)
  document
    .querySelector("meta[property='og:description']")
    .setAttribute('content', langContent.ogDescription)

  // Update Twitter card tags
  document
    .querySelector("meta[name='twitter:title']")
    .setAttribute('content', langContent.twitterTitle)
  document
    .querySelector("meta[name='twitter:description']")
    .setAttribute('content', langContent.twitterDescription)

  // Update the title tag
  document.title = langContent.title

  // Update structured data for organization schema
  const organizationSchema = document.querySelector(
    'script[type="application/ld+json"]'
  )
  if (organizationSchema) {
    const schemaData = JSON.parse(organizationSchema.textContent)
    schemaData.description = langContent.description
    organizationSchema.textContent = JSON.stringify(schemaData, null, 2)
  }
}

const setLanguage = lang => {
  i18n.global.locale = lang
  localStorage.setItem('lang', lang)
  selectedLanguage.value = lang
  setTitle()
  updateIndexInfo(lang)
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
</script>

<style lang="scss">
.select {
  cursor: pointer;
  padding: 0.25rem 0 0 0;
  border-radius: 1.25rem;
  justify-content: space-between;
  overflow: hidden;
  gap: 0.125rem;

  &::after {
    transition: all var(--tr-dur);
  }

  &-option {
    width: 2.5rem;
    height: 2.5rem;

    &-img {
      width: 2rem;
      height: 2rem;
      filter: blur(var(--blur-img)) contrast(1.05) brightness(1.05);
      border-radius: 1rem;
      object-fit: cover;
      -webkit-object-fit: cover;
      -moz-object-fit: cover;
    }
  }

  &.close,
  &.close::after {
    height: 2.5rem;
  }

  &.open,
  &.open::after {
    height: 5rem;
  }
}
</style>
