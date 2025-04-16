<template>
  <div v-if="recentlyViewed.length" class="mt-8">
    <h3 class="text-xl font-bold mb-4">Recently Viewed</h3>
    <div class="grid grid-cols-8 gap-4">
      <MovieCard 
        v-for="movie in recentlyViewed" 
        :key="movie.imdbID" 
        :movie="movie" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const recentlyViewed = ref<any[]>([])

onMounted(() => {
  const stored = localStorage.getItem('recentlyViewed')
  if (stored) {
    recentlyViewed.value = JSON.parse(stored)
  }
})
</script>
