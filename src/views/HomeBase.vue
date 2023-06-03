<template>
  <v-app>
    <v-card>
      <v-layout>
        <NavBar/>
        <v-main class="main">
          <BottomNavBar/>
          <Base/>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from '@/components/Navigators/NavBar.vue'
import Base from '@/components/Base.vue'
import BottomNavBar from '@/components/Navigators/BottomNavBar.vue'

</script>

<style scoped>
  .main {
    height: 100vh
  }
</style>
