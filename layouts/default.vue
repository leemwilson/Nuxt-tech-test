<template>
  <div>
    <ThemeLoader v-if="showLoader" />

    <div class="min-h-screen bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300">
      <Header />
      <main class="px-32 select-none pb-10">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Header from '@/components/Base/Header.vue'
import ThemeLoader from '@/components/Base/LoaderOverlay.vue'

const showLoader = ref(true)

onMounted(() => {
  const storedTheme = localStorage.theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const shouldUseDark = storedTheme === 'dark' || (!storedTheme && prefersDark)
  document.documentElement.classList.toggle('dark', shouldUseDark)

  // Hide loader after transition
  setTimeout(() => {
    showLoader.value = false
  }, 600)
})
</script>