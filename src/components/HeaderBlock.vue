<template>
  <header class="box-shadow-1-05">
    <menu>
      <li class="logo_link flex-align">
        <router-link
          to="/"
          id="logoLink"
          class="flex-center"
          :class="{ active: $route.path === '/' }"
          :title="$t('mainPage')"
        >
          <svg
            id="logoImage"
            ref="logoImage"
            class="icon"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            >
            <!-- :filter="`url(#${$route.path === '/' ? 'shadowActive' : 'shadowInactive'})`" -->
            <defs>
              <!-- Filter для активної лінки -->
              <filter id="shadowActive" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="var(--background)" flood-opacity="1" />
              </filter>
              <!-- Filter для неактивної лінки -->
              <filter id="shadowInactive" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="var(--color)" flood-opacity="1" />
              </filter>
            </defs>
            <!-- Vertical line -->
            <line x1="200" y1="386" x2="200" y2="14" />

            <!-- Diagonal line from center to top-left -->
            <line x1="200" y1="14" x2="14" y2="200" />

            <!-- Horizontal line from left to center -->
            <line x1="14" y1="200" x2="200" y2="200" />

            <!-- Arc from top-center to center -->
            <path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" />

            <!-- Outer circle -->
            <circle cx="200" cy="200" r="186" fill="none" />
          </svg>

          <strong class="logo-strong grid-10">
            <span class="logo-letter flex-center">A</span>
            <span class="logo-letter flex-center">B</span>
            <span class="logo-letter flex-center">C</span>
            <span class="logo-letter flex-center">D</span>
            <span class="logo-letter flex-center">Ξ</span>
            <span class="logo-letter flex-center">S</span>
            <span class="logo-letter flex-center">I</span>
            <span class="logo-letter flex-center">G</span>
            <span class="logo-letter flex-center">N</span>
            <span class="logo-letter flex-center">1</span>
          </strong>
        </router-link>
      </li>

      <li class="flex-align">
        <router-link
          to="/services"
          :title="$t('showcases')"
          class="flex-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
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

      <li class="flex-align">
        <router-link
          to="/company"
          :title="$t('about')"
          class="flex-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon feather-circle"
          >
            <circle cx="12" cy="12" r="10.5"></circle>
            <line x1="12" y1="22" x2="12" y2="2" />
            <line x1="12" y1="2" x2="2" y2="12" />
            <line x1="2" y1="12" x2="12" y2="12" />
            <path d="M 12,2 A 5,5, 0 1 1 12,12" fill="none" />
          </svg>

          {{ $t('company') }}
        </router-link>
      </li>

      <li class="flex-align">
        <router-link
          to="/contacts"
          :title="$t('contactTip')"
          class="flex-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
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

      <li class="global-view flex-align">
        <theme-switcher />

        <span class="lang-wrapper">
          <lang-switcher />
        </span>
      </li>
    </menu>
  </header>
</template>

<script setup>
import ThemeSwitcher from './ThemeSwitcher.vue'
import LangSwitcher from './LangSwitcher.vue'
</script>

<style lang="scss">
header {
  width: 100%;
  top: 0;
  font-size: 1.1rem;
}

menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 5.5rem99;

  li {
    height: 5.5rem;
    width: 100%;

    a {
      width: 100%;
      height: 5.5rem;
    }

    a:link {
      text-decoration: none;
    }

    a:not(#logoLink):hover,
    a:not(#logoLink):active {
      text-decoration: underline;
    }
  }

  @media (min-width: 1000px) {
    menu {
      font-size: 133%;
    }
  }

  @media (min-width: 401px) and (max-width: 999px) {
    menu {
      font-size: 125%;
    }
  }

  .global-view {
    padding: 0.125rem 0.25rem;
    flex-direction: column;
    justify-content: space-between;

    & > * {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 1.25rem;
    }

    .lang-wrapper {
      position: relative;
    }
  }
}

#logo_link {
  flex-direction: column;
  padding: 0 1vmin;
  text-decoration: none;
}

#logoImage {
  stroke-width: 28px;
  height: 4rem;
  width: 4rem;

  filter: drop-shadow(0 0 2px var(--background));
  -webkit-filter: drop-shadow(0 0 2px var(--background));
}

@media (max-width: 400px) {
  .global-view {
    padding: 0.125rem 0;
  }
}

.logo-strong {
  position: relative;
  padding-top: 0.18rem;
  width: 4rem;
  height: 0.73rem;
  font-size: 0.73rem;
  line-height: 0.73rem;
  box-shadow: 0 0 0.25rem 0.125rem var(--shadow);
  filter: drop-shadow(0 0 0.1rem var(--color));
  -webkit-filter: drop-shadow(0 0 0.1rem var(--color));

  .logo-letter {
    width: 100%;
    align-self: center;
    justify-self: center;
  }
}

a.router-link-active .logo-strong,
a:not(.router-link-active):hover .logo-strong {
  text-shadow: 0 0 0.12ch var(--color);
  /* Cross-browser filters */
  filter: drop-shadow(0 0 0.024rem var(--background));
  -webkit-filter: drop-shadow(0 0 0.024rem var(--background));

  background: var(--background);
  color: var(--color);
}

a.router-link-active #logoImage,
a:not(.router-link-active):hover #logoImage {
  filter: url(#shadowActive);
}

a:not(.router-link-active) .logo-strong {
  text-shadow: 0 0 0.12ch var(--background);
  /* Cross-browser filters */
  filter: drop-shadow(0 0 0.024rem var(--color));
  -webkit-filter: drop-shadow(0 0 0.024rem var(--color));

  background: var(--color);
  color: var(--background);
}

a:not(.router-link-active) #logoImage {
  filter: url(#shadowInactive);
}

@keyframes rotateY {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}

#logoLink:hover #logoImage {
  animation: rotateY 5.25s linear;
}
</style>
