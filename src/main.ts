/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Vue Echarts
import VueEcharts from 'vue-echarts'

const app = createApp(App)

registerPlugins(app)

app.component('v-chart', VueEcharts)
app.mount('#app')
