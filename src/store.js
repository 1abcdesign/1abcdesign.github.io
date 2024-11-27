import { reactive } from 'vue'

export const state = reactive({
  showLoader: true,
  setShowLoader(value) {
    this.showLoader = value
  },
  activeTitle: '',
  setActiveTitle(value) {
    this.activeTitle = value
  },
})