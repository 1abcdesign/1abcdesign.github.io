<template>
  <header class="box-shadow-1-05 bg-texture">
    <menu class="header-menu">
      <li class="logo_li flex-align">
        <router-link
          to="/"
          id="logoLink"
          class="flex-center flex-col"
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
            <desc>ABCD-SIGN Logo</desc>
            <defs>
              <filter id="shadowInactive" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="var(--metallic)" flood-opacity="1" />
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

          <strong class="logo-strong grid-9">
            <span class="logo-letter flex-center">A</span>
            <span class="logo-letter flex-center">B</span>
            <span class="logo-letter flex-center">C</span>
            <span class="logo-letter flex-center">D</span>
            <span class="logo-letter flex-center">Ξ</span>
            <span class="logo-letter flex-center">S</span>
            <span class="logo-letter flex-center">I</span>
            <span class="logo-letter flex-center">G</span>
            <span class="logo-letter flex-center">N</span>
            <!-- ABCDΞSIGN -->
          </strong>
        </router-link>
      </li>

      <li class="flex-align">
        <router-link
          to="/services"
          :title="$t('showcases')"
          class="flex-center flex-col"
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
          class="flex-center flex-col"
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
          class="flex-center flex-col"
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

      <li class="global flex-center">
        <div class="global-view flex-col">
          <theme-switcher />

          <span class="lang-wrapper">
            <lang-switcher />
          </span>
        </div>

        <!-- <span class="color-wrapper">
          <color-switcher />
        </span> -->
      </li>
    </menu>
  </header>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ThemeSwitcher = defineAsyncComponent(() => import('./ThemeSwitcher.vue'))
const LangSwitcher = defineAsyncComponent(() => import('./LangSwitcher.vue'))
// const ColorSwitcher = defineAsyncComponent(() => import('./ColorSwitcher.vue'))
</script>

<style lang="scss">
@keyframes rotateY {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}

header {
  width: 100%;
  top: 0;
  font-size: 1.1rem;
  font-weight: bold;
}

#logoImage {
  stroke: currentColor;
  stroke-width: 28px;
  height: 4rem;
  width: 4rem;
  filter: url(#shadowInactive);
  overflow: visible;
}

#logoLink:hover #logoImage {
  animation: rotateY 5.25s linear;
}

.logo-strong {
  width: 4rem;
  height: 0.75rem;
  font-size: 0.75rem;
  line-height: 0.75rem;
  box-shadow: 0 0 0.125rem 0.0625rem var(--shadow);
  filter: drop-shadow(0 0 0.125ch var(--color-alt));
  -webkit-filter: drop-shadow(0 0 0.125ch var(--color-alt));
  border: 0.125rem solid transparent;
  margin-top: 0.5px;

  .logo-letter {
    padding-top: 0.166rem;
    line-height: 0.375rem;
  }
}

.header-menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  #logo_li {
    padding: 0 1vmin;
  }

  a {
    width: 100%;
    height: 5.5rem;
  }

  a:not(#logoLink) {
    padding: 0.5rem;
  }

  a:link {
    text-decoration: none;
  }

  a:not(#logoLink):hover,
  a:not(#logoLink):active {
    text-decoration: underline;
  }

  .global {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    padding: 0.125rem 0.25rem;

    .global-view {
      flex-wrap: wrap;
      gap: 0.25rem;
      justify-content: space-between;
      align-content: flex-end;

    }

    .lang-wrapper,
    .color-wrapper {
      position: relative;
    }

    .color-wrapper {
      align-self: center;
    }

    .global-view > *,
    .color-switcher {
      align-self: center;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 1.25rem;
    }
  }
}

@media (max-width: 400px) {
  .global-view {
    padding: 0.125rem 0;
  }
}
</style>
