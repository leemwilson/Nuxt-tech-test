<template>
  <form @submit.prevent="onSearch" class="flex items-center gap-2 w-full max-w-xl mx-auto">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search for a movie or series..."
      class="flex-grow p-2 border border-gray-300 rounded shadow-sm focus:outline-none"
    />
    <button
      type="submit"
      class="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
    >
      Search
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit', query: string): void
}>()

const searchTerm = ref('')

const onSearch = () => {
  if (searchTerm.value.trim()) {
    emit('submit', searchTerm.value.trim())
  }
}
</script>