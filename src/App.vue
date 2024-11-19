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
import { ref } from 'vue'
import LoaderView from '@/components/LoaderView.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'

const showLoader = ref(true)

function handleLoaderEnded() {
  showLoader.value = false // Hide loader once animation ends
}
</script>
