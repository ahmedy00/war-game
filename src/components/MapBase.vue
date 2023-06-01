<template>
  <v-chart class="chart pr-16" :option="mapOptions" autoresize/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { use, registerMap } from 'echarts/core'
import { MapChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { TitleComponent, TooltipComponent, LegendComponent, VisualMapComponent, ToolboxComponent} from 'echarts/components'

import options from '@/world-map/map-options'
import worldMap from '@/world-map/world.json'

use([MapChart, CanvasRenderer, TitleComponent, TooltipComponent, LegendComponent, VisualMapComponent, ToolboxComponent])

// FIXME: Type Issue
// @ts-ignore
registerMap('world', worldMap)

const mapOptions = ref(options)

</script>

<style scoped>
  .chart {
    width: 100vw;
    height: 100vh;
  }
</style>
