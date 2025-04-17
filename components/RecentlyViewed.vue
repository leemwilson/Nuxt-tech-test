<!-- Recently viewed shown at top of homepage -->
<template>
  <div v-if="viewedMoviesStore.viewed.length" class="mt-8">
    <h3 class="text-xl font-bold mb-4">Recently Viewed</h3>

    <div class="relative">
      <!-- Left Arrow -->
      <button
        @click="scrollLeft"
        :class="[
          'absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/20 dark:bg-white/80 rounded p-2 shadow hover:scale-105 transition xl:hidden block',
          canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-20 pointer-events-none'
        ]"
      >
        <i class="fas fa-chevron-left text-white dark:text-black text-lg"></i>
      </button>

      <!-- Right Arrow -->
      <button
        @click="scrollRight"
        :class="[
          'absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/20 dark:bg-white/80 rounded p-2 shadow hover:scale-105 transition xl:hidden block',
          canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-20 pointer-events-none'
        ]"
      >
        <i class="fas fa-chevron-right text-white dark:text-black text-lg"></i>
      </button>

      <!-- Scrollable Container -->
      <div
        ref="scrollContainer"
        @scroll="updateScrollState"
        class="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[60%] md:auto-cols-[33%] gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide lg:auto-cols-[25%] xl:grid-cols-8 xl:overflow-x-visible xl:auto-cols-auto"
      >
        <MovieCard 
          v-for="movie in viewedMoviesStore.viewed" 
          :key="movie.imdbID" 
          :movie="movie" 
          class="snap-start"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRecentlyViewed } from '@/stores/useRecentlyViewed'

const viewedMoviesStore = useRecentlyViewed()
const scrollContainer = ref<HTMLDivElement | null>(null)

const canScrollLeft = ref(false)
const canScrollRight = ref(false)

onMounted(() => {
  setTimeout(updateScrollState, 100)
})

const scrollLeft = () => {
  scrollContainer.value?.scrollBy({ left: -300, behavior: 'smooth' })
  setTimeout(updateScrollState, 300)
}

const scrollRight = () => {
  scrollContainer.value?.scrollBy({ left: 300, behavior: 'smooth' })
  setTimeout(updateScrollState, 300)
}

const updateScrollState = () => {
  const el = scrollContainer.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth
}
</script>
