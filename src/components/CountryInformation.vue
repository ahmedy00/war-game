<template>
  <v-card :color="appStore.theme.mainColor" :style="{color: appStore.theme.oppositeColor}" width="400" height="600">
      <v-card-item>
        <v-card-title>This is a title</v-card-title>
        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>
      <v-card-text>
        This is content
      </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

</script>


<style scoped>

</style>
