<template>
  <v-app>
    <Notification/>
    <v-layout>
      <NavBar/>
      <v-main class="main">
        <BottomNavBar/>
        <Base/>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from '@/components/Navigators/NavBar.vue'
import Base from '@/components/Base.vue'
import BottomNavBar from '@/components/Navigators/BottomNavBar.vue'
import { onBeforeMount } from 'vue'
import { useAppStore } from '@/store/app'
import Notification from '@/components/Helpers/Notification.vue'

const appStore = useAppStore()
onBeforeMount(() => {
  appStore.initializeTheme()
})

</script>

<style scoped>
  .main {
    height: 100vh
  }
</style>
