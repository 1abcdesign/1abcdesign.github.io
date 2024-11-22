<template>
  <!-- <loader-view :showLoader /> -->
  <loader-view />
  <header-block />
  <router-view />
  <footer-block />
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import LoaderView from '@/components/LoaderView.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import { loaderState } from '@/store.js'
const showLoader = ref(loaderState.showLoader)
// Provide the `ref` and a setter function
// provide('showLoader', showLoader)
provide('setShowLoader',
  // value => showLoader.value = value
  loaderState.setShowLoader

)

onMounted(() =>
  setTimeout(() => {
    console.log('timeout App.vue:', new Date().getTime())
    // showLoader.value = false
    // loaderState.setShowLoader(0)
  }, 2340)
)
</script>
