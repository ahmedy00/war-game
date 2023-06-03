<template>
  <v-bottom-navigation grow>
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>
      Recent
    </v-btn>
    <v-btn value="favorites">
      <v-icon>mdi-heart</v-icon>
      Favorites
    </v-btn>
    <v-btn value="nearby">
      <v-icon>mdi-map-marker</v-icon>
      Nearby
    </v-btn>
    <v-spacer/>
    <!-- TODO: Find a better way to make cursor pointer -->
    <v-menu class="cursor-pointer" :location="'top'">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon>mdi-theme-light-dark</v-icon>
            Change Theme
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
}

</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }

</style>
