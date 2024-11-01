<template>
  <header>
    <nav>
      <li class="logo_link">
        <router-link to="/" id="logo_link" :title="$t('mainPage')" >
          <svg
            id="logoImage"
            ref="logoImage"
            class="icon"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="200" y1="400" x2="200" y2="0" />
            <line x1="200" y1="0" x2="0" y2="200" />
            <line x1="0" y1="200" x2="200" y2="200" />
            <path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" />
            <circle cx="200" cy="200" r="186" fill="none" />
          </svg>
          <span><b>ABCDΞsign1</b></span>
        </router-link>
      </li>

      <li>
        <router-link to="/services" :title="$t('showcases')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon feather-briefcase"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>

          {{ $t('services') }}
        </router-link>
      </li>

      <li>
        <router-link to="/company" :title="$t('about')" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon feather-circle"
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
        <router-link to="/contacts" :title="$t('contactTip')" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon feather-at-sign"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
          </svg>

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
import ThemeSwitcher from './ThemeSwitcher.vue'
import LangSwitcher from './LangSwitcher.vue'
</script>

<style lang="scss">
header {
  width: 100%;
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
    text-align: center;
    a {
      width: 100%;
      height: calc(10 * var(--usable-vh) + 0.5rem);
    }

    a:link {
      text-decoration: none;
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

  .global-view {
    padding: 0 0.25rem;
    display: flex;
    gap: 0.25rem;
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

#logoImage {
  stroke-width: 28px;
  height: calc(8 * var(--usable-vh));
  width: calc(8 * var(--usable-vh));
}

@media (max-width: 400px) {
  .global-view {
    padding: 0;
  }
}
</style>
