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
    path: '/projects',
    name: 'Projects',
    component: () => import('./views/Projects.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('./views/Contacts.vue'),
  },
  {
    path: '/ambience',
    name: 'Ambience',
    component: () => import('./views/Ambience.vue'),
  },
  {
    path: '/building',
    name: 'Building',
    component: () => import('./views/Building.vue'),
  },
  {
    path: '/crafting',
    name: 'Crafting',
    component: () => import('./views/Crafting.vue'),
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('./views/Design.vue'),
  },
  {
    path: '/loader',
    name: 'Loader',
    component: () => import('./components/LoaderView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router