<template>
  <v-app>
    <v-card>
      <v-layout>
        <NavBar/>
        <v-main style="height: 100vh;">
          <MapBase/>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script lang="ts" setup>
  import MapBase from '@/components/MapBase.vue'
  import NavBar from '@/components/NavBar.vue'
</script>
