<template>
  <v-app>
    <v-card>
      <v-layout>
        <NavBar/>
        <v-main class="main d-flex flex-row">
          <MapBase/>
          <CountryInformation/>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import MapBase from '@/components/MapBase.vue'
import NavBar from '@/components/NavBar.vue'
import CountryInformation from '@/components/CountryInformation.vue'

</script>

<style scoped>
  .main {
    height: 100vh
  }
</style>
