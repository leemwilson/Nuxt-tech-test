<template>
  <div class="flex flex-col">
    <client-only>
      <RecentlyViewed />
    </client-only>
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
import { ref, onMounted, computed } from 'vue'
import { useRecentlyViewed } from '@/stores/useRecentlyViewed'

const viewedMoviesStore = ref()
const hasRecentlyViewed = computed(() => {
  return viewedMoviesStore.value?.recentlyViewed?.length > 0
})


onMounted(() => {
  viewedMoviesStore.value = useRecentlyViewed()
})
</script>
