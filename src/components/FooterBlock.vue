<template>
  <footer>
    <span>
      &copy; {{ new Date().getFullYear() }} ABCDΞsign.one
    </span>
    <span>
      ||
    </span>
    <span>
      {{ $t('copyright') }}
    </span>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--shadow);

  position: fixed;
  bottom: 0;

  span {
    display: inline-block;
    width: 33.33%;
    text-align: center;
  }

  span:first-of-type {
    text-align: left;
  }

  span:last-of-type {
    text-align: right;
  }
}
</style>