<template>
  <menu>
    <li>
      <router-link to="/" id="logo_link">
        <span>
          ABCD
        </span>
        <img :src="logoSrc" id='logo' alt="logo">
        <span>
          sign
        </span>
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
  </menu>
</template>

<script setup>
import { ref } from 'vue'

const logoSrc = ref('logo_' + localStorage.getItem('theme') + '.png')
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
  align-items: center;
}

#logo {
  display: flex;
  height: 10vmin;
}
</style>