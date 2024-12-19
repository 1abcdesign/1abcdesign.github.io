<template>
  <main class="company flex-align flex-col">
    <p class="first-letter">
      {{ $t('aboutUs1') }}
    </p>

    <p class="with-love first-letter">
      {{ $t('aboutUs21') }}<span class="heart">❤</span>{{ $t('aboutUs22') }}
    </p>

    <section class="vip">
      <div class="person v box-shadow-1-05 bg-texture">
        <img :src="photo" alt="V">

        <h3>
          <span class="life-style first-letter">{{ $t('lifeStyle1') }}</span>
          <span class="life-style first-letter">{{ $t('lifeStyle2') }}</span>
          <span class="life-style first-letter">{{ $t('lifeStyle3') }}</span>
          <span class="life-style first-letter">{{ $t('lifeStyle4') }}</span>
        </h3>

        <p>
          <em>
            {{ $t('lifeStyle5') }}
          </em>
        </p>
      </div>
    </section>

    <p class="first-letter">
      {{ $t('aboutUs3') }}
    </p>

    <hr>

    <p>
      <strong>
        {{ $t('aboutUs4') }}
      </strong>
    </p>

    <router-link
      to="/contacts"
      :title="$t('contactTip')"
      class="flex-center box-shadow-1-05 bg-texture"
    >
      <b>
        {{ $t('contacts') }}
      </b>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 16 16"
        id="Phone--Streamline-Flex"
        height="16"
        width="16"
      >
        <desc>Phone Streamline Icon: https://streamlinehq.com</desc>
        <g id="phone--android-phone-mobile-device-smartphone-iphone">
          <path
            id="Intersect"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.486857142857142 1.6914285714285713c0.8114285714285714 -0.681142857142857 2.0217142857142854 -0.5828571428571429 2.6365714285714286 0.27885714285714286 0.16457142857142856 0.2297142857142857 0.36 0.504 0.6971428571428571 0.9257142857142857a4.009142857142857 4.009142857142857 0 0 1 -0.006857142857142857 4.989714285714285c-0.8594285714285714 1.0651428571428572 -1.76 2.1405714285714286 -2.7680000000000002 3.1474285714285712 -1.008 1.008 -2.083428571428571 1.9085714285714284 -3.148571428571428 2.769142857142857a4.009142857142857 4.009142857142857 0 0 1 -4.989714285714285 0.005714285714285714c-0.4491428571428571 -0.3588571428571428 -0.7302857142857142 -0.5542857142857143 -0.968 -0.7245714285714285 -0.832 -0.5942857142857143 -0.9485714285714285 -1.76 -0.29828571428571427 -2.5485714285714285 0.5131428571428571 -0.6251428571428571 1.0857142857142856 -1.2194285714285713 1.6365714285714283 -1.8011428571428572 0.43885714285714283 -0.46285714285714286 1.1725714285714286 -0.49257142857142855 1.672 -0.09485714285714286 0.1337142857142857 0.10742857142857143 0.30057142857142854 0.248 0.6377142857142858 0.5645714285714285 1.657142857142857 -0.984 2.661714285714286 -2 3.628571428571428 -3.6274285714285712a10.297142857142857 10.297142857142857 0 0 1 -0.5702857142857143 -0.6445714285714285c-0.3977142857142857 -0.4982857142857143 -0.368 -1.2297142857142858 0.09714285714285714 -1.665142857142857 0.568 -0.5302857142857142 1.145142857142857 -1.074285714285714 1.744 -1.5748571428571427Z"
            stroke-width="1"
          ></path>
        </g>
      </svg>
    </router-link>
  </main>
</template>

<script setup>
const BASE_URL = import.meta.env.BASE_URL
const photo = `${BASE_URL}photo.webp`
</script>

<style lang="scss" scoped>
.company {
  padding: 1rem 0.5rem;
  text-align: left;
  font-size: max(1rem, calc(0.9 * var(--main-em)));

  p:not(.person p, :last-of-type)::first-letter {
    font-weight: bold;
  }

  max-width: 70ch;
  overflow: visible;

  h2, p {
    margin: 0;
  }

  p:last-of-type {
    text-align: center;
    text-indent: 0;
    margin-bottom: 0.5rem;
  }

  hr {
    width: 100%;

  }

  .vip {
    height: 27vh;
    float: inline-start;

    gap: 0.5rem;
    padding: 0.5rem 0;
    text-align: center;

    .person {
      height: 25vh;
      display: grid;
      grid-template-rows: auto auto auto;
      align-content: space-between;
      justify-items: center;
      padding: 0.5rem;

      img {
        max-width: 35vw;
        max-height: 15vh;
      }

      h3 {
        align-self: start;
      }

      h3, p {
        margin: 0;
      }
    }
  }

  a {
    padding: 0.25rem;
    width: 25ch;
    gap: 0.5rem;
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
  }
}

.heart {
  color: red !important;

  &::selection {
    color: red !important;
  }
  &::-moz-selection {
    color: red !important;
  }
  &::-webkit-selection {
    color: red !important;
  }
}
</style>