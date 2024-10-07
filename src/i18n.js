import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    lang: 'English',
    hello: 'Hello!',
    welcome: 'Welcome!',
    flag: './Flag_of_the_United_Kingdom.png',
    toggleLangTip: 'Change language',
    toggleThemeTip: 'Change theme',
    backToHome: 'Back to the main page',
    yes: 'Yes',
    no: 'No',
    ok: 'Ok',
    404: 'No such a route found...',
    back404: 'Back to the main',
  },
  uk: {
    lang: 'Ukrainian',
    hello: 'Привіт!',
    welcome: 'Ласкаво просимо!',
    flag: './Flag_of_Ukraine.png',
    toggleLangTip: 'Змінити мову',
    toggleThemeTip: 'Змінити тему',
    loading: 'Завантаження',
    backToHome: 'Повернутися на головну сторінку',
    yes: 'Так',
    no: 'Ні',
    ok: 'Добре',
    404: 'Такої сторінки не знайдено...',
    back404: 'Повернутися на головну',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n