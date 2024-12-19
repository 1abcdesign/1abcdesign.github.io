<template>
  <main class="main contacts">
    <p>
      <strong>
        <em>{{ $t('contact_intro') }}</em>
      </strong>
    </p>

    <p>
      {{ $t('contact_phone') }}:

      <a href="tel:+380933789883" :title="$t('phoneUs')" target="_blank">
        +380 93 378 9883
      </a>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="0 0 16 16"
        id="Phone--Streamline-Flex"
        height="16"
        width="16"
        style="width: 1rem; height: 1rem; position: relative; top: 0.2rem"
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
    </p>

    <p>
      {{ $t('contact_tg') }}:

      <a
        href="http://t.me/abcdesign1"
        :title="$t('chatDirect')"
        target="_blank"
      >
        @abcdesign1
      </a>

      <svg
        viewBox="-0.5 -0.5 16 16"
        class="icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="Telegram--Streamline-Iconoir"
        height="16"
        width="16"
        style="width: 1rem; height: 1rem; position: relative; top: 0.2rem"
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
    </p>

    <p>
      {{ $t('contact_mail') }}:

      <a
        :href="`mailto:one.abcdesign@gmail.com?subject=${$t('email_subject')}`"
        :title="$t('emailSend')"
        target="_blank"
      >
        one.abcdesign@gmail.com
      </a>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="none"
        viewBox="-0.5 -0.5 16 16"
        id="Google-Mail-Logo--Streamline-Logos"
        height="16"
        width="16"
        style="width: 1rem; height: 1rem; position: relative; top: 0.2rem"
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
    </p>

    <form
      @submit.prevent="submitForm"
      class="form flex-align flex-col box-shadow-1-05 bg-texture"
      autocomplete="on"
    >
      <label :data-text="$t('form_name')">
        <input
          autocomplete="name"
          type="text"
          :placeholder="$t('form_name_ph')"
          v-model="name"
          required
          aria-label="name-input"
        />
      </label>

      <label :data-text="$t('form_phone')">
        <input
          autocomplete="tel"
          type="tel"
          placeholder="+380 99 999 9999"
          @focus="prependCountryCode"
          @input="restrictPhoneInput"
          @blur="clearIfOnlyPrepender"
          v-model="phone"
          required
          aria-label="phone-input"
          pattern="^\+380 \d{2} \d{3} \d{4}$"
          :title="$t('form_phone_tip')"
        />
      </label>

      <label :data-text="$t('form_project')">
        <input
          type="text"
          :placeholder="$t('form_project_ph')"
          v-model="project"
          required
          aria-label="project-input"
        />
      </label>

      <label :data-text="$t('form_location')">
        <GoogleAutocomplete
          :api-key="API_KEY"
          @set="setPlace"
          :placeholder="$t('form_location_ph')"
          required
        />
      </label>

      <label :data-text="$t('form_budget')">
        <input
          type="number"
          placeholder="100000"
          min="10000"
          v-model="budget"
          aria-label="budget-input"
        />
      </label>

      <label :data-text="$t('form_comment')">
        <textarea
          v-model="comment"
          :placeholder="$t('form_comment_ph')"
        ></textarea>
      </label>

      <button
        type="submit"
        :title="
          isFormValid ? $t('form_send_valid_tip') : $t('form_send_invalid_tip')
        "
      >
        {{ $t('form_send') }}
        <span class="success flex-center" v-if="showSuccess" aria-live="polite">
          {{ $t('success') }}
        </span>

        <span class="error flex-center" v-if="showError" aria-live="polite">
          {{ $t('try_again') }}
        </span>
      </button>
    </form>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { GoogleAutocomplete } from 'vue3-google-autocomplete'
import emailjs from 'emailjs-com'

const API_KEY = computed(() => import.meta.env.VITE_GMAPS_API_KEY)

const name = ref('')
const phone = ref('')
const project = ref('')
const place = ref('')
const budget = ref('')
const comment = ref('')

const showSuccess = ref(false)
const showError = ref(false)

// Computed property to determine if the form is valid
const isFormValid = computed(() => {
  return name.value && phone.value && project.value && place.value
})

const prependCountryCode = event => {
  if (!event.target.value.startsWith('+380')) {
    event.target.value = '+380'
  }
}

const restrictPhoneInput = event => {
  // Remove all non-numeric characters except the plus sign
  let input = event.target.value.replace(/[^0-9+]/g, '').slice(0, 13)

  // Ensure the input starts with "+380" (or adds it if missing)
  if (!input.startsWith('+380')) {
    input = '+380' + input.replace('+380', '')
  }

  // Format the input as +380 99 999 9999
  input = input
    .replace(/^(\+380)(\d{0,2})$/, '$1 $2')
    .replace(/^(\+380)(\d{0,2})(\d{0,3})$/, '$1 $2 $3')
    .replace(/^(\+380)(\d{0,2})(\d{0,3})(\d{0,4})$/, '$1 $2 $3 $4')

  event.target.value = input
  phone.value = input
}

const clearIfOnlyPrepender = event => {
  const input = event.target.value
  if (input === '+380' || input === '+380 ') {
    event.target.value = ''
    phone.value = ''
  }
}

const setPlace = ({ name, state, country }) => {
  place.value = [name, state, country].join(', ')
}

const resetFields = () => {
  name.value = ''
  phone.value = ''
  project.value = ''
  place.value = ''
  budget.value = ''
  comment.value = ''
}

const {
  VITE_EMAILER_SERVICE_ID: SERVICE_ID,
  VITE_EMAILER_TEMPLATE_ID: TEMPLATE_ID,
  VITE_EMAILER_USER_KEY: USER_KEY,
} = import.meta.env

const submitForm = async () => {
  const templateParams = {
    name: name.value,
    phone: phone.value,
    project: project.value,
    message: `
      Name: ${name.value}
      Phone: ${phone.value}
      Project: ${project.value}
      Place: ${place.value}
      Budget: ${budget.value}
      Comment: ${comment.value}
    `.trim(),
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_KEY
    )
    console.log('Email sent successfully!', response)
    showSuccess.value = true
    showError.value = false
  } catch (error) {
    console.error('Error sending email:', error)
    showSuccess.value = false
    showError.value = true
  }

  setTimeout(() => {
    showSuccess.value = false
    showError.value = false
    resetFields()
  }, 5000)
}
</script>

<style lang="scss" scoped>
.contacts {
  font-size: calc(var(--main-cent) * 2.5);

  p {
    letter-spacing: 0.1ch;
    padding: 0 0.5rem;
  }

  a {
    padding: 0.25rem 1ch;
    margin-left: -1ch;
    font-weight: bold;
    text-decoration: none;
  }
}

.form {
  gap: 0.1rem;
  padding: 0.5rem;
  color: var(--color);
  border: none;

  & * {
    width: 33ch;
    font-size: calc(var(--main-cent) * 2.5);
    letter-spacing: 0.1ch;
  }

  label {
    position: relative;
    margin: 0.4rem 0 0.1rem 0;
    border: none;

    &::before {
      content: attr(data-text);
      position: absolute;
      top: -1ch;
      left: 0.5ch;
      display: inline-flex;
      padding: 0 0.15ch 0 0.35ch;
      background: var(--bg);
      font-weight: bold;
      z-index: 1;
    }

    &:has(:required)::after {
      content: '*';
      color: red;
      position: absolute;
      left: -1ch;
      top: -0.5ch;
    }

    & > * {
      padding: 0.6rem 0.5rem 0.4rem;
      border-width: 2px;
      border-color: var(--color);
      caret-color: var(--color);
      font-weight: bold;

      background: var(--bg);

      &:placeholder-shown {
        font-weight: bold;
      }
    }
  }
}

*:focus {
  outline: var(--bg);
}

.form *:not([type='submit']) {
  color: var(--color);

  &:focus {
    font-style: italic;
  }
}

button {
  position: relative;
  height: 2.5rem;
  padding: 0.75rem;
  background: var(--bg);
  color: var(--color);
  border: 2px solid var(--color);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: var(--color);
    color: var(--bg);
  }
}

:invalid button {
  background: var(--bg);
  color: var(--shadow);
  border: 2px solid var(--shadow);

  &:hover {
    background: var(--shadow);
    color: var(--bg);
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--color);
  box-shadow: inset 0 0 3rem 3rem var(--bg);

  &::selection {
    -webkit-text-fill-color: var(--bg);
  }
}

textarea {
  height: 5rem;
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: var(--grey);
}

.success,
.error {
  position: absolute;
  top: -2px;
  left: -2px;
  height: 2.5rem;
  font-size: inherit;
  font-weight: bold;
}

.success {
  background: var(--bg) !important;
  color: green !important;
  border: 2px solid green;

  &:hover {
    background: green !important;
    color: var(--bg) !important;
  }
}

.error {
  background: var(--bg) !important;
  color: red !important;
  border: 2px solid red;

  &:hover {
    background: red !important;
    color: var(--bg) !important;
  }
}
</style>
