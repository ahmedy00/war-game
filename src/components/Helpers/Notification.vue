<template>
  <v-snackbar
    top
    absolute
    transition="scroll-y-transition"
    v-model="appStore.notification.show"
    :timeout="appStore.notification.timeOut"
  >
    <span>text</span>
    <template v-slot:actions="{ attrs }">
      <v-btn @click="closeNotification" v-bind="attrs">
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const closeNotification = () => {
  console.log('close')
}

</script>

<style scoped>

</style>
