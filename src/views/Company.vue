<template>
  <main>
    <h2>
      {{ $t('about') }}
    </h2>

    <p>
      {{ $t('aboutUs1') }}
    </p>

    <p>
      {{ $t('aboutUs2') }}
    </p>

    <section class="vip">
      <div class="person v">
        <img src="" alt="V" style="width: 25vmin; height: 25vmnin;">

        <h3>{{ $t('lifeStyle1') }}</h3>

        <p>{{ $t('lifeStyle2') }}</p>
      </div>
      <div class="person a">
        <img src="" alt="A" style="width: 25vmin; height: 25vmnin;">

        <h3>{{ $t('lifeStyle1') }}</h3>

        <p>{{ $t('lifeStyle2') }}</p>
      </div>
    </section>

    <p>
      {{ $t('aboutUs3') }}
    </p>

    <p>
      {{ $t('aboutUs4') }}
    </p>

    <router-link to="/contacts">{{ $t('contacts') }}</router-link>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1vmax 3vmax;

  .vip {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    .person {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 35vmin;
    }
  }
}
</style>