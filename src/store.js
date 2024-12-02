import { reactive } from 'vue'

export const state = reactive({
  showLoader: true,
  setShowLoader(value) {
    this.showLoader = value
  },
  themeColor: document.documentElement.getAttribute('data-theme') === 'dark' ? '#fff' : '#000',
  setThemeColor(value) {
    this.themeColor = value
  },
})