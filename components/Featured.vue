<template>
  <div class="flex flex-col p-4">
    <h2 class="text-2xl font-bold mb-4">
      Featured {{ mediaType === 'movie' ? 'Movies' : 'Series' }}
    </h2>

    <!-- Loader -->
    <div v-if="loading" class="py-4 flex justify-center">
      <BaseLoader />
    </div>

    <!-- Grid -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-2">
      <MovieCard 
        v-for="item in featured" 
        :key="item.imdbID" 
        :movie="item" 
        class="mb-4 mr-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useOmdb } from '@/composables/useOmdb'
import BaseLoader from '@/components/Base/Loader.vue'
import type { OmdbSearchItem } from '@/composables/useOmdb'

const featured = ref<OmdbSearchItem[]>([])

const props = defineProps<{
  mediaType: 'movie' | 'series'
}>()

const loading = ref(true)
const { search } = useOmdb()

onMounted(async () => {
  try {
    // 💡 fixed query: 'pokemon' — mediaType determines if it's a movie or series
    featured.value = await search('pokemon', props.mediaType)
  } catch (e) {
    console.error(`Failed to fetch featured ${props.mediaType}s:`, e)
  } finally {
    loading.value = false
  }
})
</script>
