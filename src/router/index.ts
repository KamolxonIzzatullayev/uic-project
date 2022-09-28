import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthView from '../views/Auth/AuthView.vue';
import HomeView from '../views/Home/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/main',
    name: 'main',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
