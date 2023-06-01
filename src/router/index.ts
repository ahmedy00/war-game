// Composables
import { createRouter, createWebHistory } from 'vue-router'

import MapBase from '@/components/MapBase.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeBase.vue'),
    children: [
      {
        path: '',
        name: 'MapBase',
        component: MapBase,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
