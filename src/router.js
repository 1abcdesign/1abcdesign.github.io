import { createRouter, createWebHistory } from 'vue-router'
import { state } from '@/store.js'
// import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/Company.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/Services.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Зберігаємо стандартну поведінку для збереження позиції
    return savedPosition || { top: 0 };
  },
})

router.beforeEach((to, from, next) => {

  state.setShowLoader(true)

  // Check if `navigation_history` exists and is a valid JSON string
  let history
  try {
    history = JSON.parse(sessionStorage.getItem('navigation_history')) || []
  } catch (error) {
    // If parsing fails, initialize history as an empty array
    history = []
  }

  // Add the current route path to history
  if (from.path) {
    history.push(to.path)
  }

  // Store the updated history back in sessionStorage as a JSON string
  sessionStorage.setItem('navigation_history', JSON.stringify(history))

  next()
})

router.afterEach(() => {
  if (!sessionStorage.getItem('once_loaded')) {
    setTimeout(() => {
      sessionStorage.setItem('once_loaded', true)
      state.setShowLoader(false)
    }, 3310)
  } else {
    setTimeout(() => {
      state.setShowLoader(false)
    }, 1170)
  }
})

export default router
