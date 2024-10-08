<template>
  <menu>
    <li>
      <router-link to="/" id="logo_link">
        <span id="logo"></span>
        <span>ABCDΞsign</span>
      </router-link>
    </li>

    <li>
      <router-link to="/company">About us</router-link>
    </li>

    <li>
      <router-link to="/projects">Our projects</router-link>
    </li>

    <li>
      <router-link to="/contacts">Contact us</router-link>
    </li>

    <li>
      <theme-switcher />
    </li>
  </menu>
</template>

<script setup>
// import { ref, watch } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue';

// const logoSrc = ref('logo_' + localStorage.getItem('theme') + '.png')

// watch(localStorage.getItem('theme'), (newTheme) => {
//   logoSrc.value = 'logo_' + localStorage.getItem('theme') + '.png'
// })
</script>

<style lang="scss" scoped>
menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
  }
}

#logo_link {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo {
  display: flex;
  height: 7vmin;
  width: 7vmin;

  background-image: var(--logo);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>