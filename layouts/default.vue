<template>
  <div>
    <ThemeLoader v-if="showLoader" />

    <div class="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <Header />
      <main class="px-8 md:px-16 lg:px-32 select-none pb-10">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from '@/stores/useTheme'
import Header from '@/components/Base/Header.vue'
import ThemeLoader from '@/components/Base/LoaderOverlay.vue'

const showLoader = ref(true)
let themeStore: ReturnType<typeof useTheme>

onMounted(() => {
  themeStore = useTheme()
  themeStore.initTheme()

  setTimeout(() => {
    showLoader.value = false
  }, 600)
})
</script>
