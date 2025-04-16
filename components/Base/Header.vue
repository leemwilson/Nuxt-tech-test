<template>
  <header class="flex flex-col sticky top-0 items-center bg-light dark:bg-dark py-8 text-dark dark:text-light border-b-2 w-full select-none z-50">
    <ThemeToggle />

    <!-- Logo Placeholder -->
    <div class="mb-6">
      <NuxtLink to="/" class="hover:text-gray-400 transition">
        <div class="bg-gray-800 flex items-center justify-center rounded">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            class="w-[80px] md:w-[120px] object-contain" 
          />
        </div>
      </NuxtLink>
    </div>

    <!-- Navigation -->
    <nav class="text-xl font-bold flex items-center space-x-4">
      <template v-for="(link, index) in navLinks" :key="link.to">
        <NuxtLink :to="link.to" class="hover:text-gray-400 transition">
          {{ link.label }}
        </NuxtLink>
        <!-- Add separator unless it's the last link -->
        <span
          v-if="index < navLinks.length - 1"
          class="flex justify-center text-dark dark:text-light"
        >
          <i class="fas fa-circle text-[8px] mx-2"></i>
        </span>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from './ThemeToggler.vue'

const navLinks = [
  { label: 'Movies', to: '/movies' },
  { label: 'Series', to: '/series' },
  { label: 'Contact', to: '/contact' }
]
</script>