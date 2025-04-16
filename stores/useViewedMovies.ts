// stores/useViewedMovies.ts
import { defineStore } from 'pinia'

export const useViewedMovies = defineStore('viewedMovies', {
  state: () => ({
    viewed: [] as any[]
  }),

  actions: {
    addMovie(movie: any) {
      if (!this.viewed.find((m) => m.imdbID === movie.imdbID)) {
        this.viewed.unshift(movie) // add to start
        if (this.viewed.length > 10) this.viewed.pop() // limit to 10

        // persist to localStorage
        localStorage.setItem('viewedMovies', JSON.stringify(this.viewed))
      }
    },
    loadFromLocalStorage() {
      const stored = localStorage.getItem('viewedMovies')
      if (stored) {
        this.viewed = JSON.parse(stored)
      }
    }
  }
})
