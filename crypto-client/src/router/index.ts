import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../App.vue'
import ApiTesting from '../components/ApiTesting.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/api-testing', name: 'Api testing', component: ApiTesting },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
