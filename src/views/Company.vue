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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon feather-phone-call">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
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

  p:not(.person p)::first-letter {
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