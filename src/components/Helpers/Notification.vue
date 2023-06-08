<template>
  <v-snackbar
    location="top"
    :absolute="true"
    transition="scroll-y-transition"
    v-model="appStore.notification.show"
    :timeout="appStore.notification.timeOut"
  >
    <span>{{ appStore.notification.text }}</span>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()


</script>

<style scoped>

</style>
