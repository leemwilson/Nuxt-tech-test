import { defineStore } from 'pinia'

// Contains data for recently viewed to persist through refresh
export const useRecentlyViewed = defineStore('viewedMovies', {
  state: () => ({
    viewed: [] as any[]
  }),

  actions: {
    addMovie(movie: any) {
      if (!this.viewed.find((m) => m.imdbID === movie.imdbID)) {
        this.viewed.unshift(movie)
        if (this.viewed.length > 10) this.viewed.pop()
      }
    }
  },

  persist: true
})
