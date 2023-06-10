<template>
  <v-container :style="{background: appStore.theme.mainColor}" class="d-flex flex-row" fluid>
    <MapBase/>
    <CountryInformation/>
  </v-container>
</template>

<script setup lang="ts">
import MapBase from '@/components/MapBase.vue'
import CountryInformation from '@/components/CountryInformation.vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

</script>


<style scoped>

</style>
