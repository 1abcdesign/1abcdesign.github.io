<template>
  <main class="company">
    <p>
      {{ $t('aboutUs1') }}
    </p>

    <p class="with-love">
      {{ $t('aboutUs21') }}<span class="heart">❤</span>{{ $t('aboutUs22') }}
    </p>

    <section class="vip">
      <div class="person v">
        <img src="/photo_v.webp" alt="V">

        <h3>{{ $t('lifeStyle1') }}</h3>

        <p>
          <em>
            {{ $t('lifeStyle2') }}
          </em>
        </p>
      </div>
      <div class="person a">
        <img src="/photo_a.webp" alt="A">

        <h3>{{ $t('lifeStyle3') }}</h3>

        <p>
          <em>
            {{ $t('lifeStyle4') }}
          </em>
        </p>
      </div>
    </section>

    <p>
      {{ $t('aboutUs3') }}
    </p>

    <hr>

    <p>
      <strong>
        {{ $t('aboutUs4') }}
      </strong>
    </p>

    <router-link to="/contacts">
      {{ $t('contacts') }}

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

<script setup></script>

<style lang="scss">
main.company {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;

  text-align: left;

  p {
    text-indent: 2ch;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    justify-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;

    height: 27vh;
    width: 100%;

    .person {
      display: grid;
      grid-template-rows: 16vh repeat (2, 1fr);
      align-content: space-between;
      justify-items: center;

      text-align: center;

      height: 25vh;

      box-shadow: 0 0 1rem 0.5rem var(--shadow);
      padding: 0.5rem 1rem;

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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;

    width: 25ch;
    gap: 0.5rem;

    box-shadow: 0 0 1rem 0.5rem var(--shadow);

    &:hover {
      background: var(--color);
      color: var(--background);

      & svg {
        stroke: var(--background);
      }
    }
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
  }
}

.heart {
  color: red !important;
}
</style>