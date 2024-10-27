<!-- App.vue -->
<template>
  <header-block />
  <loader-view :showOnRouteChange="showLoader" @loaderEnded="handleLoaderEnded" />
  <router-view />
  <footer-block />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import LoaderView from '@/components/LoaderView.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

const router = useRouter();
const showLoader = ref(true);

onMounted(() => {
  router.afterEach((to, from, next) => {
    showLoader.value = true; // Show loader on route change
    console.log(BASE_URL);
  });


function handleLoaderEnded() {
  showLoader.value = false; // Hide loader once animation ends
}
</script>
