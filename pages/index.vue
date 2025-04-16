<template>
  <div class="flex flex-col">
    <RecentlyViewed v-if="hasRecentlyViewed" />
    <div class="flex flex-row">
    <MoviesFeaturedMovies class="w-1/2 pr-4" />
    <SeriesFeaturedSeries class="w-1/2 pl-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecentlyViewed from '@/components/RecentlyViewed.vue'
import MoviesFeaturedMovies from '@/components/Movies/FeaturedMovies.vue'
import SeriesFeaturedSeries from '@/components/Series/FeaturedSeries.vue'

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
