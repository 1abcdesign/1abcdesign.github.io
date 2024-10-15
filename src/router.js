import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('./views/Company.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('./views/Services.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('./views/Contacts.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Adds smooth scrolling
      };
    }
    return savedPosition || { top: 0 };
  },
})

export default router