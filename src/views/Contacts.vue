<template>
  <main class="contacts">
    <p>
      <strong>
        <em>{{ $t('contact_intro') }}</em>
      </strong>
    </p>

    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon feather-phone"
        aria-hidden="true"
        style="width: 1rem; height: 1rem; position: relative; top: 0.15rem"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        ></path>
      </svg>

      {{ $t('contact_phone') }}:

      <a href="tel:+380933789883" :title="$t('phoneUs')"> +380 93 378 9883 </a>
    </p>

    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon feather-send"
        style="width: 1rem; height: 1rem; position: relative; top: 0.15rem"
      >
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>

      {{ $t('contact_tg') }}:

      <a href="http://t.me/abcdesign1" :title="$t('chatDirect')">
        @abcdesign1
      </a>
    </p>

    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon feather-mail"
        style="width: 1rem; height: 1rem; position: relative; top: 0.15rem"
      >
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        ></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>

      {{ $t('contact_mail') }}:

      <a href="mailto:one.abcdesign@gmail.com" :title="$t('emailSend')">
        one.abcdesign@gmail.com
      </a>
    </p>

    <form
      @submit.prevent="submitForm"
      class="form flex-align box-shadow-1-05"
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
import emailjs from 'emailjs-com'
import { GoogleAutocomplete } from 'vue3-google-autocomplete'

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

const restrictPhoneInput = (event) => {
  // Remove all non-numeric characters except the plus sign
  let input = event.target.value.replace(/[^0-9+]/g, '').slice(0, 13);

  // Ensure the input starts with "+380" (or adds it if missing)
  if (!input.startsWith('+380')) {
    input = '+380' + input.replace('+380', '');
  }

  // Format the input as +380 99 999 9999
  input = input
    .replace(/^(\+380)(\d{0,2})$/, '$1 $2')
    .replace(/^(\+380)(\d{0,2})(\d{0,3})$/, '$1 $2 $3')
    .replace(/^(\+380)(\d{0,2})(\d{0,3})(\d{0,4})$/, '$1 $2 $3 $4')

  event.target.value = input;
  phone.value = input;
}

const clearIfOnlyPrepender = (event) => {
  const input = event.target.value;
  if (input === '+380' || input === '+380 ') {
    event.target.value = ''
    phone.value = ''
  }
}

const setPlace = ({ name, state, country }) => {
  place.value = [name, state, country].join(', ')
}

// Reset form fields
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

    // Show success message
    showSuccess.value = true
    showError.value = false
  } catch (error) {
    console.error('Error sending email:', error)

    // Show error message
    showSuccess.value = false
    showError.value = true
  }

  // Hide messages after 3 seconds
  setTimeout(() => {
    showSuccess.value = false
    showError.value = false
    resetFields()
  }, 5000)
}
</script>

<style lang="scss" scoped>
.contacts p {
  padding: 0 0.25rem;
  letter-spacing: 0.1ch;

  a {
    font-weight: bold;
    text-decoration: none;
    padding: 0 0.5ch;
    margin-left: -0.5ch;

    &:hover,
    &:active {
      background-color: var(--color);
      color: var(--background);
    }
  }
}

.form {
  flex-direction: column;
  color: var(--color);
  border: none;
  padding: 0.5rem;

  & * {
    width: 33ch;
    font-size: 1.1rem;
    letter-spacing: 0.1ch;
  }

  label {
    position: relative;
    padding: 0.4rem 0 0.1rem 0;
    border: none;

    &::before {
      position: absolute;
      content: attr(data-text);
      background: var(--background);
      left: 1ch;
      padding: 0 0.33ch 0 0.33ch;
      top: 0;
      font-weight: bold;
    }

    &:has(:required)::after {
      content: '*';
      color: red;
      position: absolute;
      left: -1ch;
      top: 0.5ch;
    }

    & > * {
      padding: 0.6rem 0.5rem 0.4rem;
      border-width: 2px;
      border-color: var(--color);
      caret-color: var(--color);
      font-weight: bold;

      &:placeholder-shown {
        font-weight: bold;
      }
    }
  }
}

*:focus {
  outline: var(--background);
}

.form *:not([type='submit']) {
  background: transparent;
  color: var(--color);

  &:focus {
    font-style: italic;
  }
}

button {
  height: 2.5rem;
  border: 2px solid var(--color);
  background: var(--background);
  color: var(--color);
  cursor: pointer;
  position: relative;
  padding: 0.75rem;
  font-weight: bold;

  &:hover {
    background: var(--color);
    color: var(--background);
  }
}

/* Change color of submit till form is valid */
:invalid button {
  background: var(--background); /* Set your invalid background color */
  color: var(--shadow); /* Set your invalid text color */
  border: 2px solid var(--shadow);

  &:hover {
    background: var(--shadow); /* Set your invalid background color */
    color: var(--background); /* Set your invalid text color */
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--color);
  box-shadow: inset 0 0 3rem 3rem var(--background);

  &::selection {
    -webkit-text-fill-color: var(--background);
  }
}

textarea {
  resize: none;
  height: 5rem;
}

/* Add styles for success and error messages */
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
  border: 2px solid green;
  color: green !important;
  background: var(--background) !important;

  &:hover {
    color: var(--background) !important;
    background: green !important;
  }
}
.error {
  border: 2px solid red;
  color: red !important;
  background: var(--background) !important;

  &:hover {
    color: var(--background) !important;
    background: red !important;
  }
}
</style>
