import { createRouter, createWebHistory } from 'vue-router'
import { loaderState } from '@/store.js'

const ASSETS_DIR = import.meta.env.VITE_ASSETS_DIR || '/'

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

const assets = [
  `${ASSETS_DIR}/a01.webp`,
  `${ASSETS_DIR}/a02.webp`,
  `${ASSETS_DIR}/a03.webp`,
  `${ASSETS_DIR}/a04.webp`,
  `${ASSETS_DIR}/a05.webp`,
  `${ASSETS_DIR}/a06.webp`,
  `${ASSETS_DIR}/a07.webp`,
  `${ASSETS_DIR}/a08.webp`,
  `${ASSETS_DIR}/a09.webp`,
  `${ASSETS_DIR}/a10.webp`,
  `${ASSETS_DIR}/b01.webp`,
  `${ASSETS_DIR}/b02.webp`,
  `${ASSETS_DIR}/b03.webp`,
  `${ASSETS_DIR}/b04.webp`,
  `${ASSETS_DIR}/b05.webp`,
  `${ASSETS_DIR}/b06.webp`,
  `${ASSETS_DIR}/b07.webp`,
  `${ASSETS_DIR}/b08.webp`,
  `${ASSETS_DIR}/b09.webp`,
  `${ASSETS_DIR}/b10.webp`,
  `${ASSETS_DIR}/c01.webp`,
  `${ASSETS_DIR}/c02.webp`,
  `${ASSETS_DIR}/c03.webp`,
  `${ASSETS_DIR}/c04.webp`,
  `${ASSETS_DIR}/c05.webp`,
  `${ASSETS_DIR}/c06.webp`,
  `${ASSETS_DIR}/c07.webp`,
  `${ASSETS_DIR}/c08.webp`,
  `${ASSETS_DIR}/c09.webp`,
  `${ASSETS_DIR}/c10.webp`,
  `${ASSETS_DIR}/d01.webp`,
  `${ASSETS_DIR}/d02.webp`,
  `${ASSETS_DIR}/d03.webp`,
  `${ASSETS_DIR}/d04.webp`,
  `${ASSETS_DIR}/d05.webp`,
  `${ASSETS_DIR}/d06.webp`,
  `${ASSETS_DIR}/d07.webp`,
  `${ASSETS_DIR}/d08.webp`,
  `${ASSETS_DIR}/d09.webp`,
  `${ASSETS_DIR}/d10.webp`,
]

const cursors = [
  `${ASSETS_DIR}/scissors-black.cur`,
  `${ASSETS_DIR}/scissors-white.cur`,
]

const photos = [
  `${ASSETS_DIR}/photo_v.webp`,
  `${ASSETS_DIR}/photo_a.webp`,
]

const logo3dSrc = `${ASSETS_DIR}/logo3d.glb`

// function preload3D(logo3dSrc) {
//   const link = document.createElement('link')
//   link.rel = 'preload'
//   link.as = 'fetch'
//   link.href = logoSrc
//   link.crossOrigin = 'anonymous' // Add crossorigin attribute here
//   document.head.appendChild(link)
// }

// function preloadImages(images) {
//   images.forEach(src => {
//     const link = document.createElement('link')
//     link.rel = 'preload'
//     link.as = 'image'
//     link.href = src
//     link.crossOrigin = 'anonymous' // Add crossorigin attribute here
//     document.head.appendChild(link)
//   })
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const container = document.querySelector('.main') || window;
        container.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
        return;
      }
    }
    return savedPosition || { top: 0 };
  }
})

// // Initialize the preload worker
// const preloadWorker = new Worker(new URL('@/worker.js', import.meta.url), { type: 'module' })

import PreloadWorker from '@/worker.js?worker';

// Create the worker instance
const preloadWorker1 = new PreloadWorker();
const preloadWorker2 = new PreloadWorker();
const preloadWorker3 = new PreloadWorker();

router.beforeEach((to, from, next) => {
  // Show the loader when preloading starts
  loaderState.setShowLoader(true)

    // Keep track of workers' completion states
    let workerCompletion

    const checkAllWorkersDone = () => {
      if (workerCompletion.every((status) => status)) {
        // All workers are done, hide the loader
        loaderState.setShowLoader(false);
      }
    };

    // Listen for worker completion messages
    const handleWorkerMessage = (workerIndex) => {
      return (e) => {
        if (e.data === 'done') {
          workerCompletion[workerIndex] = true;
          checkAllWorkersDone();
        }
      };
    };

    preloadWorker1.onmessage = handleWorkerMessage(0);
    preloadWorker2.onmessage = handleWorkerMessage(1);
    preloadWorker3.onmessage = handleWorkerMessage(2);

    if (to.path === '/') {
      workerCompletion = [false, false, false]
      preloadWorker1.postMessage({ action: 'preloadImages', assets: assets })
      preloadWorker2.postMessage({ action: 'preload3D' , assets: logo3dSrc })
      preloadWorker3.postMessage({ action: 'preloadImages', assets: cursors })
    } else if (to.path === '/services') {
      workerCompletion = [false]
      preloadWorker1.postMessage({ action: 'preloadImages', assets: assets })
    } else if (to.path === '/company') {
      workerCompletion = [false]
      preloadWorker1.postMessage({ action: 'preloadImages', assets: photos })
    }

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

export default router
