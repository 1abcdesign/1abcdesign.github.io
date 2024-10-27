<template>
  <footer>
    <section class="copy-right">
      &copy; {{ new Date().getFullYear() }}
      ABCDΞsign.one
    </section>

    <!-- | -->

    <section class="links">

      <a
        href="mailto:one.abcdesign@gmail.com" aria-label="e-mail"
        :title="$t('emailSend')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>

      <a
        href="http://t.me/abcdesign1"
        aria-label="telegram"
        :title="$t('chatDirect')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </a>

      <a
        href="tel:+380933789883"
        aria-label="phone"
        :title="$t('phoneUs')"
      >
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
          class="feather feather-phone"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: calc(5 * var(--usable-vh));
  display: flex;


  background: linear-gradient(0deg, var(--background), transparent 100%);

  position: fixed;
  bottom: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: calc(5 * var(--usable-vh));
  }

  a {
    height: calc(5 * var(--usable-vh));
  }

  span {
    display: inline-block;
    width: 33.33%;
    text-align: center;
  }

  .copy-right {
    position: relative;
    left: 0.5rem;
    text-align: left;
  }

  span:last-of-type {
    text-align: right;
  }

  .phone-icon {
    height: 2vh;
    width: 2vh;
  }
}
</style>