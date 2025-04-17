<template>
  <div class="p-4 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>

    <form 
      @submit.prevent="handleSubmit" 
      class="space-y-4" 
      validate
    >
      <!-- Full Name -->
      <div>
        <label class="block font-semibold mb-1">Full Name *</label>
        <input
          v-model.trim="form.fullName"
          class="w-full p-2 border rounded focus:outline text-dark"
          :class="[
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          ]"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block font-semibold mb-1">Email *</label>
        <input
          v-model.trim="form.email"
          type="email"
          class="w-full p-2 border rounded focus:outline text-dark"
          :class="[
            errors.email ? 'border-red-500' : 'border-gray-300'
          ]"
        />
      </div>

      <!-- Contact Number (optional) -->
      <div>
        <label class="block font-semibold mb-1">Contact Number</label>
        <input
          v-model.trim="form.phone"
          type="tel"
          class="w-full p-2 border rounded border-gray-300 focus:outline text-dark"
        />
      </div>

      <!-- Message -->
      <div>
        <label class="block font-semibold mb-1">Message *</label>
        <textarea
          v-model.trim="form.message"
          rows="5"
          class="w-full p-2 border rounded focus:outline text-dark"
          :class="[
            errors.message ? 'border-red-500' : 'border-gray-300'
          ]"
        ></textarea>
      </div>

      <button
        type="submit"
        aria-label="Submit Contact Form"
        class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded w-full"
      >
        Submit
      </button>
    </form>

    <!-- Toast Notification -->
    <div
      v-if="toast.show"
      :class="[
        'fixed bottom-4 right-4 px-4 py-2 rounded shadow-md text-white z-50 transition-opacity duration-300',
        toast.success ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  message: ''
})

const errors = reactive({
  fullName: false,
  email: false,
  message: false
})

const toast = ref({ show: false, message: '', success: true })

// General validation for contact form, could do with being more refined with time
const validate = () => {
  const fullNameValid = /^[A-Za-z\s'-]+$/.test(form.fullName)
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const messageValid = form.message !== ''

  errors.fullName = !fullNameValid
  errors.email = !emailValid
  errors.message = !messageValid

  return fullNameValid && emailValid && messageValid
}

// Resets form on successful submit
const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.message = ''
  errors.fullName = false
  errors.email = false
  errors.message = false
}

// Shows overlay bottom right for success/failure
const showToast = (message: string, success = true) => {
  toast.value = { show: true, message, success }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

// Handles dummy subm
const handleSubmit = () => {
  const isValid = validate()

  if (isValid) {
    showToast('Form submitted successfully!', true)
    resetForm()
  } else if (errors.fullName) {
    showToast('Please make sure to enter a valid name, numbers are not allowed.', false)
  } else if (errors.email) {
    showToast('Please make sure to enter a valid email.', false)
  } else {
    showToast('Please make sure all mandatory fields are filled correctly.', false)
  }
}
</script>