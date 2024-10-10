<template>
  <header>
    <nav>
      <li>
        <router-link to="/" id="logo_link">
          <img src="/logo_light.png" alt="logo" id="logoImage" ref="logoImage"/>
          <span>ABCDΞsign</span>
        </router-link>
      </li>

      <li>
        <router-link to="/company">{{ $t('company') }}</router-link>
      </li>

      <li>
        <router-link to="/projects">{{ $t('projects') }}</router-link>
      </li>

      <li>
        <router-link to="/contacts">{{ $t('contacts') }}</router-link>
      </li>

      <li class="global-view">
        <theme-switcher />

        <span class="lang-wrapper">
          <lang-switcher />
        </span>
      </li>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue';
import LangSwitcher from './LangSwitcher.vue'
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  border-bottom: 1px solid var(--shadow);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 0;

  height: 12vh;
  margin: 0;


  li {
    height: 12vmin;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
  }

  li:not(.global-view) {
    padding: 2vmin 3vmin;
  }

  .global-view {
    padding: 0;
    display: flex;
    flex-direction: column;

    & > * {
      display: inline-block;
      height: 6vmin;
      width: 10vmin;
    }

    .lang-wrapper {
      position: relative;
    }
  }
}

#logo_link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1vmin;
}

#logoImage {
  display: flex;
  height: 7vmin;
  width: 7vmin;

  background-image: var(--logo);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>