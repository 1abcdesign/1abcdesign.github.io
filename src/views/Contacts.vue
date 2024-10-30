<template>
  <main>
    <p>
      <strong>
        <em>{{ $t('contact_intro') }}</em>
      </strong>
      </p>
    <p>{{ $t('contact_phone') }}: <a href="tel:+380933789883">+380 93 378 9883</a></p>
    <p>{{ $t('contact_tg') }}: <a href="http://t.me/abcdesign1">@abcdesign1</a></p>
    <p>{{ $t('contact_mail') }}: <a href="mailto:one.abcdesign@gmail.com">one.abcdesign@gmail.com</a></p>

    <form @submit.prevent="submitForm" class="form" autocomplete="on">
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
          v-model="phone"
          required
          aria-label="phone-input"
          pattern="^\+380[0-9]{9}$"
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

      <label :data-text="$t('form_budget')">
        <input
          type="number"
          placeholder="100000"
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

      <button type="submit">
        {{ $t('form_send') }}
        <span class="success" v-if="showSuccess">{{ $t('success') }}</span>
        <span class="error" v-if="showError">{{ $t('try_again') }}</span>
      </button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const name = ref('')
const phone = ref('')
const project = ref('')
const budget = ref('')
const comment = ref('')
const showSuccess = ref(false)
const showError = ref(false)

const prependCountryCode = (event) => {
  if (!event.target.value.startsWith('+380')) {
    event.target.value = '+380'
  }
}

const restrictPhoneInput = (event) => {
  const input = event.target.value.replace(/[^0-9+]/g, '').slice(0, 13)
  event.target.value = input.startsWith('+380') ? input : '+380' + input.slice(4)
  phone.value = event.target.value
}

const {
  VITE_EMAILER_SERVICE_ID: SERVICE_ID,
  VITE_EMAILER_TEMPLATE_ID: TEMPLATE_ID,
  VITE_EMAILER_USER_KEY: USER_KEY
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
      Budget: ${budget.value}
      Comment: ${comment.value}
    `.trim(),
  }

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_KEY)
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

  // Reset form fields
  name.value = ''
  phone.value = ''
  project.value = ''
  budget.value = ''
  comment.value = ''

  // Hide messages after 3 seconds
  setTimeout(() => {
    showSuccess.value = false
    showError.value = false
  }, 3000)
}
</script>

<style lang="scss" scoped>
main p {
  padding: 0 0.5rem;
}

main * {
  font-size: 115%;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color);
  border: 1px solid var(--background);
  box-shadow: 0 0 1rem 0.5rem var(--shadow);
  padding: 2rem;

  & * {
    width: 66.6vmin;
  }

  label {
    position: relative;
    font-weight: 300;
    padding: 0.5rem 0;
    border: 1px solid var(--background);

    &::before {
      position: absolute;
      content: attr(data-text);
      background: var(--background);
      left: 0.5ch;
      padding: 0 0.25ch;
      top: -0.5ch;
      letter-spacing: 0.15ch;
    }

    &:has(:required)::after {
      content: '*';
      color: red;
      position: absolute;
      left: -1.5ch;
      top: -0.33ch;
    }

    &>* {
      padding: 1rem;
      border-width: 1px;
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
  height: 5rem;
  border: 1px solid var(--color);
  background: var(--background);
  color: var(--color);
  cursor: pointer;
  position: relative;

  &:hover {
    background: var(--color);
    color: var(--background);
  }
}

/* Change color of submit till form is valid */
:invalid button {
  background: var(--background); /* Set your invalid background color */
  color: var(--shadow); /* Set your invalid text color */
  border: 1px solid var(--shadow);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--color);
  box-shadow: inset 0 0 3rem 3rem var(--background);
}

textarea {
  resize: none;
}

/* Add styles for success and error messages */
.success,
.error {
  position: absolute;
  top: -1px;
  left: -1px;
  height: 5rem;
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success {
  border: 1px solid green;
  color: green !important;
  background: var(--background) !important;

  &:hover {
    color: var(--background) !important;
    background: green !important;
  }
}
.error {
  border: 1px solid red;
  color: red !important;
  background: var(--background) !important;

  &:hover {
    color: var(--background) !important;
    background: red !important;
  }
}
</style>
