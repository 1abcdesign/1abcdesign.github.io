<template>
  <main>
    <p>
      {{ $t('aboutUs1') }}
    </p>

    <p>
      {{ $t('aboutUs2') }}
    </p>

    <section class="vip">
      <div class="person v">
        <img src="/photo_v.jpg" alt="V">

        <h3>{{ $t('lifeStyle1') }}</h3>

        <p>
          <em>
            {{ $t('lifeStyle2') }}
          </em>
        </p>
      </div>
      <div class="person a">
        <img src="/photo_a.jpg" alt="A">

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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon feather-user-plus"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>
    </router-link>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  text-align: left;

  p {
    text-indent: 3ch;
  }

  max-width: 70ch;

  h2, p {
    margin: 0;
  }

  p:last-of-type {
    text-align: center;
    text-indent: 0;
    margin-bottom: 1rem;
  }

  hr {
    width: 100%;
  }

  .vip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 1rem 0;

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
      padding: 0.5rem 2rem;

      img {
        height: 16vh;
        width: auto;
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
    justify-content: space-around;

    width: 25ch;
    gap: 0.5rem;

    border: 1px solid var(--color);

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
</style>