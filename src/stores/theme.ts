import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'default',
  }),
  getters: {
    getTheme(state) {
      return state.theme
    },
  },
  actions: {
    setTheme(newTheme: string) {
      this.theme = newTheme
    },
  },
})
