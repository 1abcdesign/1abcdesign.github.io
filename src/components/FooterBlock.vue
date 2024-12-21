<template>
  <footer class="footer box-shadow-1-05 bg-texture">
    <section class="copy-right flex-align">
      &copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;vadim4web.github.io
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
          class="icon"
          fill="none"
          viewBox="-0.5 -0.5 16 16"
          id="Google-Mail-Logo--Streamline-Logos"
          height="16"
          width="16"
        >
          <desc>
            Google Mail Logo Streamline Icon: https://streamlinehq.com
          </desc>
          <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m0.9375 5.15 3.125 2.3093749999999997m-3.125 -2.31V12.1875h3.125v-4.728125m-3.125 -2.31V4.0625a1.25 1.25 0 0 1 1.25 -1.25h0.48875a1.25 1.25 0 0 1 0.7206250000000001 0.22875l0.6656249999999999 0.47m0 3.948125L7.5 10l3.4375 -2.5406250000000004m-6.875 0V3.5112500000000004m6.875 3.948125 3.125 -2.31m-3.125 2.31V12.1875h3.125V5.15m-3.125 2.3093749999999997V3.5112500000000004m3.125 1.638125V4.0625a1.25 1.25 0 0 0 -1.25 -1.25h-0.48875a1.25 1.25 0 0 0 -0.7206250000000001 0.22875l-0.6656249999999999 0.47m-6.875 0L7.5 5.9375l3.4375 -2.42625"
            stroke-width="1"
          ></path>
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
          viewBox="-0.5 -0.5 16 16"
          class="icon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="Telegram--Streamline-Iconoir"
          height="16"
          width="16"
        >
          <desc>Telegram Streamline Icon: https://streamlinehq.com</desc>
          <path
            d="M14.3121875 2.1219375 0.6878125 7.5l5.0195 0.7170624999999999m8.604875 -6.095125 -1.7926875 10.756125 -6.8121875 -4.6610000000000005m8.604875 -6.095125L5.7073125000000005 8.217062499999999m0 0v3.9439374999999997l2.329625 -2.3499375000000002"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          ></path>
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
      </a>
    </section>
  </footer>
</template>

<style lang="scss">
.footer {
  bottom: 0;
  line-height: 2.75rem;
  display: grid;
  grid-template-columns: calc(50% - 0.25rem + 1px) calc(50% + 0.25rem - 1px);

  .links {
    height: 2.75rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .copy-right {
    padding-top: max(0.066svh, 0.066rem);
    position: relative;
    left: 1.5vmax;
    font-size: 1rem;
    word-spacing: -0.075ch;
    text-align: left;
  }
}
</style>
