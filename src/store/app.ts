// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedTheme: '',
    themeMainColor: ''
  }),
  actions: {
    changeTheme (theme: string) {
      this.selectedTheme = theme
      this.themeMainColor = theme === 'Dark' ? '#2c302d' : '#d3ded6'
    }
  }
})
