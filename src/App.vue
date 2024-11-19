<template>
  <loader-view
    :showOnRouteChange="showLoader"
    @loaderEnded="handleLoaderEnded"
  />
  <header-block />
  <router-view />
  <footer-block />
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import LoaderView from '@/components/LoaderView.vue'

const HeaderBlock = defineAsyncComponent(() =>
  import('@/components/HeaderBlock.vue')
)
const FooterBlock = defineAsyncComponent(() =>
  import('@/components/FooterBlock.vue')
)

// const router = useRouter()
const showLoader = ref(true)

function handleLoaderEnded() {
  showLoader.value = false // Hide loader once animation ends
}
</script>
