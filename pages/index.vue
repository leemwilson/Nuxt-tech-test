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
import { computed } from 'vue'
import { useRecentlyViewed } from '@/stores/useRecentlyViewed'

const viewedMoviesStore = useRecentlyViewed()

const hasRecentlyViewed = computed(() => viewedMoviesStore.viewed.length > 0)
</script>
