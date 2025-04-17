<!-- Theme toggler light/dark -->
<template>
  <div
    class="absolute top-4 left-4 flex items-center gap-3 border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-800 shadow-md md:w-40 cursor-pointer select-none"
  >
    <span 
      class="hidden md:block"
      :class="{ 'text-black': !themeStore.isDark, 'text-white': themeStore.isDark }"
    >
      Light
    </span>

    <button
      @click="themeStore.toggleTheme"
      aria-label="Theme toggle button"
      class="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300"
    >
      <span
        class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300"
        :class="{ 'translate-x-4': themeStore.isDark }"
      ></span>
    </button>

    <span 
      class="hidden md:block"
      :class="{ 'text-white': themeStore.isDark, 'text-black': !themeStore.isDark }"
    >
      Dark
    </span>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/stores/useTheme'

const themeStore = useTheme()
</script>
