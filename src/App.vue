<template>
  <loader-view />
  <header-block />
  <router-view />
  <footer-block />
</template>

<script setup>
import { onMounted } from 'vue'
import LoaderView from '@/components/LoaderView.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import { state } from '@/store.js'

onMounted(() => setTimeout(() => state.setShowLoader(0), 2340))
</script>
