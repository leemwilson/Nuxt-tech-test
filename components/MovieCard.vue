<!-- Movie card for viewing in search results/featured -->
<template>
  <NuxtLink
    :to="`/details/${movie.imdbID}`"
    class="block rounded border border-gray-300 dark:border-gray-600 overflow-hidden shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
  >
    <img
      :src="movie.Poster === 'N/A' ? placeholder : movie.Poster"
      :alt="movie.Title"
      class="w-full h-60 object-cover"
    />
    <div class="p-2">
      <h3 class="font-semibold text-md text-black dark:text-white truncate">
        {{ movie.Title }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ movie.Year }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const placeholder = '/images/movie-placeholder.png'

defineProps<{
  movie: {
    Title: string
    Year: string
    imdbID: string
    Poster: string
  }
}>()
</script>