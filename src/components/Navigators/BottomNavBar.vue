<template>
  <v-bottom-navigation
    :style="{background: appStore.theme.mainColor}"
    grow>
    <v-btn
      :color="appStore.theme.oppositeColor"
      value="recent">
      <v-icon :color="appStore.theme.oppositeColor">mdi-history</v-icon>
      <span :style="{color: appStore.theme.oppositeColor}">Recent</span>
    </v-btn>
    <v-btn
      :color="appStore.theme.oppositeColor"
      value="favorites">
      <v-icon :color="appStore.theme.oppositeColor">mdi-heart</v-icon>
      <span :style="{color: appStore.theme.oppositeColor}">Favorites</span>
    </v-btn>
    <v-btn
      :color="appStore.theme.oppositeColor"
      value="nearby">
      <v-icon :color="appStore.theme.oppositeColor">mdi-map-marker</v-icon>
      <span :style="{color: appStore.theme.oppositeColor}">Nearby</span>
    </v-btn>
    <v-spacer/>
    <!-- TODO: Find a better way to make cursor pointer -->
    <v-menu class="cursor-pointer" :location="'top'">
      <template v-slot:activator="{ props }">
        <v-btn
          :color="appStore.theme.oppositeColor"
          v-bind="props">
          <v-icon :color="appStore.theme.oppositeColor">mdi-theme-light-dark</v-icon>
            <span :style="{color: appStore.theme.oppositeColor}">Change Theme: {{ appStore.theme.name }}</span>
        </v-btn>
      </template>
        <v-list dense>
          <v-list-item v-for="(themeName, index) in themeNames" :key="index">
            <v-list-item-title @click="changeTheme(themeName)">
              {{ themeName }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>
</v-bottom-navigation>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/store/app'


const appStore = useAppStore()
console.log('color', appStore.theme)

const themeNames = ref(['Light', 'Dark'])

const changeTheme = (themeName: string) => {
  appStore.changeTheme(themeName)
  appStore.showNotification('ThemeChanged', true, 4000)
}

</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }

</style>
