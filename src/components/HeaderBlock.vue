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
            class="icon"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>ABCD-SIGN Logo</desc>
            <defs>
              <filter
                id="shadowInactive"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="6"
                  flood-color="var(--color-25)"
                  flood-opacity="1"
                />
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
          <!-- <svg
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
          </svg> -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            id="Delivery-Shipping-Fill--Streamline-Outlined-Fill-Expansion-Set"
            height="24"
            width="24"
          >
            <desc>
              Delivery Shipping Fill Streamline Icon: https://streamlinehq.com
            </desc>
            <g id="delivery-shipping-fill">
              <path
                id="Union"
                fill="currentColor"
                fill-rule="evenodd"
                d="M13.3765 11.1581C13.5814 11.363 13.8353 11.4655 14.1382 11.4655H22.6909C22.9938 11.4655 23.2477 11.363 23.4526 11.1581C23.6576 10.9532 23.76 10.6992 23.76 10.3964V1.8436C23.76 1.5407 23.6576 1.2868 23.4526 1.0819C23.2477 0.877 22.9938 0.7745 22.6909 0.7745H14.1382C13.8353 0.7745 13.5814 0.877 13.3765 1.0819C13.1715 1.2868 13.0691 1.5407 13.0691 1.8436V10.3964C13.0691 10.6992 13.1715 10.9531 13.3765 11.1581ZM16.2764 6.12H20.5527V4.0085H16.2764V6.12ZM0.24 23.2255V11.4655H4.5164V23.2255H0.24ZM6.6546 21.114V11.4655H8.3651C8.4898 11.4655 8.6146 11.4788 8.7393 11.5055C8.864 11.5323 8.9887 11.5635 9.1135 11.5991L16.5169 14.352C16.7663 14.4411 16.9668 14.6014 17.1183 14.8331S17.3455 15.3053 17.3455 15.5547C17.3455 15.9289 17.2163 16.2318 16.9579 16.4635C16.6995 16.6951 16.4011 16.8109 16.0625 16.8109H13.2562C13.1671 16.8109 13.1003 16.8064 13.0557 16.7976C13.0112 16.7887 12.9533 16.7663 12.882 16.7307L11.1715 16.0626L10.824 17.1049L12.882 17.8266C12.9176 17.8444 12.9711 17.8578 13.0424 17.8666C13.1137 17.8755 13.176 17.88 13.2295 17.88H20.5527C21.1229 17.88 21.6218 18.0849 22.0495 18.4947C22.4771 18.9045 22.6909 19.4123 22.6909 20.0182L14.1649 23.2255L6.6546 21.114Z"
                clip-rule="evenodd"
                stroke-width="1"
              ></path>
            </g>
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
          <!-- <svg
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
          </svg> -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            id="Friendship-Fill--Streamline-Outlined-Fill-Expansion-Set"
            height="24"
            width="24"
          >
            <desc>
              Friendship Fill Streamline Icon: https://streamlinehq.com
            </desc>
            <g id="friendship-fill">
              <path
                id="Union"
                fill="currentColor"
                fill-rule="evenodd"
                d="M8.472 4.944C7.8252 4.944 7.2715 4.7137 6.8109 4.2531C6.3503 3.7925 6.12 3.2388 6.12 2.592S6.3503 1.3915 6.8109 0.9309C7.2715 0.4703 7.8252 0.24 8.472 0.24S9.6725 0.4703 10.1331 0.9309C10.5937 1.3915 10.824 1.9452 10.824 2.592S10.5937 3.7925 10.1331 4.2531C9.6725 4.7137 9.1188 4.944 8.472 4.944ZM15.528 4.944C14.8812 4.944 14.3275 4.7137 13.8669 4.2531C13.4063 3.7925 13.176 3.2388 13.176 2.592S13.4063 1.3915 13.8669 0.9309C14.3275 0.4703 14.8812 0.24 15.528 0.24S16.7285 0.4703 17.1891 0.9309C17.6497 1.3915 17.88 1.9452 17.88 2.592S17.6497 3.7925 17.1891 4.2531C16.7285 4.7137 16.1748 4.944 15.528 4.944ZM6.12 23.76V15.528H3.768V8.472C3.768 7.8252 3.9983 7.2715 4.4589 6.8109C4.9195 6.3503 5.4732 6.12 6.12 6.12H17.88C18.5268 6.12 19.0805 6.3503 19.5411 6.8109C20.0017 7.2715 20.232 7.8252 20.232 8.472V15.528H17.88V23.76H13.176V9.648H10.824V23.76H6.12Z"
                clip-rule="evenodd"
                stroke-width="1"
              ></path>
            </g>
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
          <!-- <svg
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
          </svg> -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="-0.5 -0.5 24 24"
            id="Person-Pin-Fill--Streamline-Outlined-Fill-Material-Symbols"
            height="24"
            width="24"
          >
            <desc>
              Person Pin Fill Streamline Icon: https://streamlinehq.com
            </desc>
            <path
              fill="currentColor"
              d="m11.5 22.0417625 -2.8989583333333333 -2.8989583333333333H4.3125c-0.38333333333333336 0 -0.71875 -0.14375 -1.00625 -0.43125 -0.2875 -0.2875 -0.43125 -0.6229166666666667 -0.43125 -1.00625v-14.375c0 -0.39930875 0.14375 -0.738716875 0.43125 -1.0182291666666667 0.2875 -0.2795170833333333 0.6229166666666667 -0.41927083333333337 1.00625 -0.41927083333333337h14.375c0.38333333333333336 0 0.71875 0.13975374999999998 1.00625 0.41927083333333337 0.2875 0.2795122916666667 0.43125 0.6189204166666668 0.43125 1.0182291666666667v14.375c0 0.38333333333333336 -0.14375 0.71875 -0.43125 1.00625 -0.2875 0.2875 -0.6229166666666667 0.43125 -1.00625 0.43125h-4.288541666666666l-2.8989583333333333 2.8989583333333333Zm0.04791666666666667 -9.631250000000001c0.9263729166666667 0 1.70904375 -0.31946041666666664 2.347916666666667 -0.9583333333333334 0.6388729166666667 -0.6388729166666667 0.9583333333333334 -1.42154375 0.9583333333333334 -2.347916666666667 0 -0.9263729166666667 -0.31946041666666664 -1.70904375 -0.9583333333333334 -2.347916666666667 -0.6388729166666667 -0.6388729166666667 -1.42154375 -0.9583333333333334 -2.347916666666667 -0.9583333333333334 -0.9263729166666667 0 -1.70904375 0.31946041666666664 -2.347916666666667 0.9583333333333334 -0.6388729166666667 0.6388729166666667 -0.9583333333333334 1.42154375 -0.9583333333333334 2.347916666666667 0 0.9263729166666667 0.31946041666666664 1.70904375 0.9583333333333334 2.347916666666667 0.6388729166666667 0.6388729166666667 1.42154375 0.9583333333333334 2.347916666666667 0.9583333333333334ZM4.3125 17.705304166666668h14.375v-0.8864583333333335c-0.9583333333333334 -0.8944604166666668 -2.044460416666667 -1.6171875 -3.2583333333333333 -2.168229166666667 -1.2138729166666669 -0.5510416666666667 -2.5236270833333334 -0.8265625000000001 -3.9291666666666667 -0.8265625000000001 -1.4055395833333333 0 -2.71529375 0.2755208333333333 -3.9291666666666667 0.8265625000000001 -1.2138729166666669 0.5510416666666667 -2.3 1.2737687500000001 -3.2583333333333333 2.168229166666667v0.8864583333333335Z"
              stroke-width="1"
            ></path>
          </svg>

          {{ $t('contacts') }}
        </router-link>
      </li>

      <li class="global-view flex-col">
        <theme-switcher />

        <lang-switcher />
      </li>
    </menu>
  </header>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ThemeSwitcher = defineAsyncComponent(() => import('./ThemeSwitcher.vue'))
const LangSwitcher = defineAsyncComponent(() => import('./LangSwitcher.vue'))
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
  height: 3.33rem;
  width: 3.33rem;
  filter: url(#shadowInactive);
  overflow: visible;
}

#logoLink:hover #logoImage {
  animation: rotateY 5.25s linear;
}

.logo-strong {
  width: 3.33rem;
  height: 0.625rem;
  font-size: 0.625rem;
  line-height: 0.625rem;
  box-shadow: 0 0 0.125rem 0.0625rem var(--shadow);
  filter: drop-shadow(0 0 0.125ch var(--color-alt));
  -webkit-filter: drop-shadow(0 0 0.125ch var(--color-alt));
  border: 0.125rem solid transparent;
  margin-top: 0.5px;

  .logo-letter {
    padding-top: 0.1rem;
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

  .global-view {
    padding: 0.125rem 0.25rem;
    gap: 0.25rem;
    justify-content: space-between;
  }

  .global-view > * {
    align-self: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 1.25rem;
  }
}

@media (max-width: 400px) {
  .global-view {
    padding: 0.125rem 0;
  }
}
</style>
