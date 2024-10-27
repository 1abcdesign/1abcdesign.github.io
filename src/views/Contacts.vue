<template>
  <main>
    {{ $t('contact_phone') }}:
    <a href="tel:+380933789883">
      +380 933 789 883
    </a>
    <br>
    {{ $t('contact_tg') }}:
    <a href="http://t.me/abcdesign1">
      @abcdesign1
    </a>
    <br>
    {{ $t('contact_mail') }}:
    <a href="mailto:one.abcdesign@gmail.com">
      one.abcdesign@gmail.com
    </a>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
main {
  font-size: larger;
}
</style>