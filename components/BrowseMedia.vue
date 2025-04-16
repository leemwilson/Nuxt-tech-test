<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Browse {{ mediaType === 'movie' ? 'Movies' : 'Series' }}
    </h1>

    <BaseSearchBar @submit="handleSearch" class="text-black" />

    <div v-if="loading" class="text-center py-6 text-gray-500">
      <BaseLoader />
    </div>
    <div v-else-if="error" class="text-center py-6 text-red-500 font-bold">
      {{ error }}
    </div>

    <div 
      v-if="results.length && !loading" 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6"
    >
      <MovieCard
        v-for="movie in results"
        :key="movie.imdbID"
        :movie="movie"
      />
    </div>

    <BasePagination 
      v-if="results.length && !loading" 
      :current-page="currentPage" 
      @update:page="(page: number) => handleSearch(searchQuery, page)"
    />

    <div v-else-if="!loading && !error" class="text-center py-6 text-gray-400">
      Start searching to see results.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOmdb } from '@/composables/useOmdb'
import type { OmdbSearchItem } from '@/composables/useOmdb'

const props = defineProps<{
  mediaType: 'movie' | 'series'
}>()

const { search } = useOmdb()

const results = ref<OmdbSearchItem[]>([])
const loading = ref(false)
const error = ref('')
const searchQuery = ref('')
const currentPage = ref(1)

const handleSearch = async (query: string, page = 1) => {
  loading.value = true
  error.value = ''
  searchQuery.value = query
  currentPage.value = page

  try {
    results.value = await search(query, props.mediaType, page)
  } catch (err: any) {
    console.error(err)
    error.value = 'Something went wrong while fetching results.'
  } finally {
    loading.value = false
  }
}
</script>
