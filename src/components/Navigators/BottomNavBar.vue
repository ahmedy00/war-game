<template>
  <v-bottom-navigation :style="{background: appStore.theme.mainColor}" grow>
    <v-btn :color="appStore.theme.oppositeColor" value="recent">
      <v-icon>mdi-history</v-icon>
      Recent
    </v-btn>
    <v-btn :color="appStore.theme.oppositeColor" value="favorites">
      <v-icon>mdi-heart</v-icon>
      Favorites
    </v-btn>
    <v-btn :color="appStore.theme.oppositeColor" value="nearby">
      <v-icon>mdi-map-marker</v-icon>
      Nearby
    </v-btn>
    <v-spacer/>
    <!-- TODO: Find a better way to make cursor pointer -->
    <v-menu class="cursor-pointer" :location="'top'">
      <template v-slot:activator="{ props }">
        <v-btn :color="appStore.theme.oppositeColor" v-bind="props">
          <v-icon>mdi-theme-light-dark</v-icon>
            Change Theme: {{ appStore.theme.name }}
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
