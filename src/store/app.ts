// Utilities
import { defineStore } from 'pinia'
import { StateType } from '@/types'

export const useAppStore = defineStore('app', {

  state: () => ({
    theme: {
      name: '',
      mainColor: '',
      oppositeColor: ''
    },
    notification: {
      text: '',
      show: false,
      timeOut: 1000
    }
  }) as StateType,
  actions: {
    changeTheme (name: string) {
      this.theme.name = name
      this.theme.mainColor = name === 'Dark' ? '#333' : '#f5f5f5'
      this.theme.oppositeColor = name === 'Dark' ? '#f5f5f5' :'#333'

      localStorage.setItem('theme', JSON.stringify(this.theme))
    },
    initializeTheme () {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        this.theme = JSON.parse(storedTheme)
      } else {
        this.changeTheme('Light')
      }
    },
    showNotification (text: string, isVisible: boolean, timeout: number) {
      this.notification.text = text
      this.notification.show = isVisible
      this.notification.timeOut = timeout
    }
  },
  getters: {
    getTheme: (state) => {
      state.theme
    }
  }
})
