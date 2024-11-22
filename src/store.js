import { reactive } from 'vue'

export const loaderState = reactive({
  showLoader: true,
  setShowLoader(value) {
    this.showLoader = value
  },
})