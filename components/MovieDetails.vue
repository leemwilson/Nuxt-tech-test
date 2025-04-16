<template>
  <div class="flex flex-col md:flex-row gap-6 border rounded bg-dark dark:bg-light">
    <img
      :src="movie.Poster !== 'N/A' ? movie.Poster : placeholder"
      :alt="movie.Title"
      class="w-full md:w-64 h-auto object-cover rounded p-2"
    />

    <div class="flex-1 pt-0 md:pt-8 p-8">
      <h1 class="text-3xl font-bold mb-2 text-light dark:text-dark">{{ movie.Title }}</h1>
      <p class="text-gray-400 dark:text-gray-600 mb-1"><strong>Year:</strong> {{ movie.Year }}</p>
      <p class="text-gray-400 dark:text-gray-600 mb-1"><strong>Genre:</strong> {{ movie.Genre }}</p>
      <p class="text-gray-400 dark:text-gray-600 mb-1"><strong>Director:</strong> {{ movie.Director }}</p>
      <p class="text-gray-400 dark:text-gray-600 mb-1"><strong>Actors:</strong> {{ movie.Actors }}</p>
      <p class="text-gray-400 dark:text-gray-600 mb-1"><strong>IMDb Rating: {{ movie.imdbRating }}</strong></p>
      <p class="text-gray-400 dark:text-gray-600 mt-4"><strong>Synopsis:</strong> {{ movie.Plot }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const placeholder = '/images/movie-placeholder.png'

defineProps<{
  movie: any
}>()
</script>