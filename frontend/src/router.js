import { createRouter, createWebHistory } from 'vue-router'
import DataInput from '@/components/DataInput.vue'
import ResultDisplay from '@/components/ResultDisplay.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataInput
  },
  {
    path: '/results',
    name: 'ResultDisplay',
    component: ResultDisplay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
