// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedTheme: ''
  }),
  actions: {
    changeTheme (theme: string) {
      this.selectedTheme = theme
    }
  }
})
