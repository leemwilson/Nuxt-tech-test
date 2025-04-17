// stores/useTheme.ts
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state: () => ({
    isDark: false
  }),

  actions: {
    initTheme() {
      if (typeof window === 'undefined') return

      const storedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const shouldUseDark = storedTheme === 'dark' || (!storedTheme && prefersDark)

      this.isDark = shouldUseDark

      document.documentElement.classList.toggle('dark', this.isDark)

      // Save to localStorage for next load
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },

    toggleTheme() {
      if (typeof window === 'undefined') return

      this.isDark = !this.isDark

      document.documentElement.classList.toggle('dark', this.isDark)
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    }
  }
})
