// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedTheme: '',
    themeMainColor: '',
    themeOppositeColor: '',
    notification: {
      text: '',
      show: false,
      timeOut: 1000
    }
  }),
  actions: {
    changeTheme (theme: string) {
      this.selectedTheme = theme
      this.themeMainColor = theme === 'Dark' ? '#2c302d' : '#d3ded6'
      this.themeOppositeColor = theme === 'Dark' ? '#d3ded6' :'#2c302d'
    },
    showNotification (text: string, isVisible: boolean, timeout: number) {
      this.notification.text = text
      this.notification.show = isVisible
      this.notification.timeOut = timeout
    }
  }
})
