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
      this.theme.mainColor = name === 'Dark' ? '#2c302d' : '#d3ded6'
      this.theme.oppositeColor = name === 'Dark' ? '#d3ded6' :'#2c302d'

      localStorage.setItem('theme', JSON.stringify(this.theme))
    },
    initializeTheme () {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        this.theme = JSON.parse(storedTheme)
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
