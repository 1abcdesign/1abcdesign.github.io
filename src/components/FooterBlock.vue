<template>
  <footer class="footer box-shadow-1-05 bg-texture">
    <section class="copy-right flex-align">
      &nbsp;&nbsp;&nbsp;&nbsp;&copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;abcdesign1.com
    </section>

    <section class="links">
      <a
        :href="`mailto:one.abcdesign@gmail.com?subject=${$t('email_subject')}`"
        target="_blank"
        aria-label="e-mail"
        :title="$t('emailSend')"
        class="flex-center"
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
          class="icon feather-mail"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          ></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>

      <a
        href="http://t.me/abcdesign1"
        target="_blank"
        aria-label="telegram"
        :title="$t('chatDirect')"
        class="flex-center"
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
          class="icon feather-send"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </a>

      <a
        href="tel:+380933789883"
        target="_blank"
        aria-label="Call us"
        :title="$t('phoneUs')"
        class="flex-center"
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
          class="icon feather-phone"
          aria-hidden="true"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          ></path>
        </svg>
      </a>
    </section>
  </footer>
</template>

<style lang="scss">
.footer {
  bottom: 0;
  line-height: 2.75rem;
  display: grid;
  grid-template-columns: calc(50% + 0.25rem + 1px) calc(50% + 0.25rem - 1px);

  .links {
    height: 2.75rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .copy-right {
    padding-top: max(0.066svh, 0.066rem);
    margin-left: 1vmax;
    font-size: 1.25rem;
    word-spacing: -0.075ch;
    text-align: left;
  }
}
</style>
