<template>
  <div class="flex flex-col p-4">
    <h2 class="text-2xl font-bold mb-4">Featured Movies</h2>

    <!-- Loader -->
    <div v-if="loading" class="py-4 flex justify-center">
      <BaseLoader />
    </div>

    <!-- Movie grid -->
    <div v-else class="grid grid-cols-2">
      <MovieCard 
        v-for="item in featured" 
        :key="item.imdbID" 
        :movie="item" 
        class="mb-4 mr-4"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useOmdb } from '~/composables/useOmdb'
import BaseLoader from '@/components/Base/Loader.vue'

const { search } = useOmdb()
const featured = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    featured.value = await search('pokemon', 'movie')
  } catch (e) {
    console.error('Failed to fetch featured movies:', e)
  } finally {
    loading.value = false
  }
})
</script>

