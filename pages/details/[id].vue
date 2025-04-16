<template>
  <div class="p-4 mx-auto">
    <!-- Back Button -->
    <button
      @click="goBack"
      class="mb-4 text-sm bg-dark dark:bg-light text-gray-200 dark:text-gray-400 hover:bg-gray-600 dark:hover:bg-gray-200 font-semibold flex items-center gap-1 transition border rounded px-4 py-2"
    >
      <i class="fas fa-arrow-left"></i>
      Back
    </button>

    <!-- Loader -->
    <div v-if="loading" class="text-center text-gray-500 py-10">
      <BaseLoader />
    </div>

    <!-- Movie -->
    <MovieDetails v-else-if="movie" :movie="movie" />

    <!-- Not found -->
    <div v-else class="text-center text-red-500">Movie not found.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useOmdb } from '@/composables/useOmdb'
import type { OmdbMovieDetails  } from '@/composables/useOmdb'
import BaseLoader from '@/components/Base/Loader.vue'
import MovieDetails from '@/components/MovieDetails.vue'

const { getDetails } = useOmdb()
const route = useRoute()
const movie = ref<OmdbMovieDetails | null>(null)
const loading = ref(true)

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/') // fallback route if direct-linked
  }
} 

onMounted(async () => {
  try {
    const id = route.params.id as string
    const result = await getDetails(id) as OmdbMovieDetails

    if (result) {
      movie.value = result as OmdbMovieDetails

      // Save movies/series to localstorage
      const stored = localStorage.getItem('recentlyViewed')

      const viewed = (stored ? JSON.parse(stored) : []) as OmdbMovieDetails[]
      
      const exists = viewed.find((m: any) => m.imdbID === result.imdbID)
      if (!exists) {
        viewed.unshift(result)

        // Limit to 8 max
        const limited = viewed.slice(0, 8)

        localStorage.setItem('recentlyViewed', JSON.stringify(limited))
      }
    }
  } catch (err) {
    console.error('Failed to fetch movie details', err)
  } finally {
    loading.value = false
  }
})

</script>