<template>
  <header>
    <nav>
      <li class="logo_link">
        <router-link to="/" id="logo_link">
          <img src="/logo_light.png" alt="company logo image" id="logoImage" ref="logoImage"/>

          <span><b>ABCDΞsign.one</b></span>
        </router-link>
      </li>

      <li>
        <router-link to="/services">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>

          {{ $t('services') }}
        </router-link>
      </li>

      <li>
        <router-link to="/company">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="22" x2="12" y2="2" />
            <line x1="12" y1="2" x2="2" y2="12" />
            <line x1="2" y1="12" x2="12" y2="12" />
            <path d="M 12,2 A 5,5, 0 1 1 12,12" fill="none" />
          </svg>

          {{ $t('company') }}
        </router-link>
      </li>

      <li>
        <router-link to="/contacts">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>

          {{ $t('contacts') }}
        </router-link>
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
import ThemeSwitcher from './ThemeSwitcher.vue';
import LangSwitcher from './LangSwitcher.vue'
</script>


<style lang="scss">
header {
  width: 100%;
  box-shadow: 0 0 1rem 0.5rem var(--shadow);
  background: linear-gradient(180deg, var(--background), transparent 100%);
  position: fixed;
  top: 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  font-weight: bold;

  list-style: none;

  padding: 0;
  margin: 0;

  height: calc(10 * var(--usable-vh) + 0.5rem);


  li {
    height: calc(10 * var(--usable-vh) + 0.5rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border: 1px solid transparent;

    a {
      width: 100%;
      height: calc(10 * var(--usable-vh) + 0.5rem);
    }

    a:link,
    a:visited {
      text-decoration: none;
    }

    &:not(:has(#logo_link) , .global-view):hover {
      border: 1px solid var(--grey);
    }

    a:hover,
    a:active {
      text-decoration: underline;
    }
  }

  @media (min-width: 1000px) {
    nav {
      font-size: 133%;
    }
  }

  @media (min-width: 401px) and (max-width: 999px) {
    nav {
      font-size: 125%;
    }
  }

  @media (max-width: 400px) {
    nav {
      font-size: 10px;
    }
  }

  li:not(.logo_link, .global-view) > .router-link-active {
    background: var(--background);
  }

  .global-view {
    padding: 0 0.25rem;
    display: flex;
    flex-direction: column;

    & > * {
      height: calc(5 * var(--usable-vh));
      width: calc(5 * var(--usable-vh));
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
  text-decoration: none;
}

@media (max-width: 400px) {
  #logo_link {
    padding: 0;
  }

  .global-view {
    padding: 0;
  }
}

#logoImage {
  display: flex;
  height: calc(5 * var(--usable-vh));
  width: calc(5 * var(--usable-vh));

  background-image: var(--logo);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>