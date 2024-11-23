<template>
  <loader-view />
  <header-block />
  <router-view />
  <footer-block />
</template>

<script setup>
import LoaderView from '@/components/LoaderView.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
</script>
