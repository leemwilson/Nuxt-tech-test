<template>
  <div class="flex flex-col">
    <RecentlyViewed v-if="hasRecentlyViewed" />
    <div class="flex flex-col md:flex-row">
    <Featured
      class="w-full md:w-1/2 pr-4" 
      mediaType="movie"
    />
    <Featured
      class="w-full md:w-1/2 pl-4" 
      mediaType="series"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const hasRecentlyViewed = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('recentlyViewed')
  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      hasRecentlyViewed.value = Array.isArray(parsed) && parsed.length > 0
    } catch (e) {
      console.warn('Failed to parse recently viewed:', e)
    }
  }
})
</script>
