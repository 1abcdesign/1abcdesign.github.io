import { createRouter, createWebHistory } from 'vue-router';

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
];

const assets = [
  'https://1abcdesign.github.io/a01.webp',
  'https://1abcdesign.github.io/a02.webp',
  'https://1abcdesign.github.io/a03.webp',
  'https://1abcdesign.github.io/a04.webp',
  'https://1abcdesign.github.io/a05.webp',
  'https://1abcdesign.github.io/a06.webp',
  'https://1abcdesign.github.io/a07.webp',
  'https://1abcdesign.github.io/a08.webp',
  'https://1abcdesign.github.io/a09.webp',
  'https://1abcdesign.github.io/a10.webp',
  'https://1abcdesign.github.io/b01.webp',
  'https://1abcdesign.github.io/b02.webp',
  'https://1abcdesign.github.io/b03.webp',
  'https://1abcdesign.github.io/b04.webp',
  'https://1abcdesign.github.io/b05.webp',
  'https://1abcdesign.github.io/b06.webp',
  'https://1abcdesign.github.io/b07.webp',
  'https://1abcdesign.github.io/b08.webp',
  'https://1abcdesign.github.io/b09.webp',
  'https://1abcdesign.github.io/b10.webp',
  'https://1abcdesign.github.io/c01.webp',
  'https://1abcdesign.github.io/c02.webp',
  'https://1abcdesign.github.io/c03.webp',
  'https://1abcdesign.github.io/c04.webp',
  'https://1abcdesign.github.io/c05.webp',
  'https://1abcdesign.github.io/c06.webp',
  'https://1abcdesign.github.io/c07.webp',
  'https://1abcdesign.github.io/c08.webp',
  'https://1abcdesign.github.io/c09.webp',
  'https://1abcdesign.github.io/c10.webp',
  'https://1abcdesign.github.io/d01.webp',
  'https://1abcdesign.github.io/d02.webp',
  'https://1abcdesign.github.io/d03.webp',
  'https://1abcdesign.github.io/d04.webp',
  'https://1abcdesign.github.io/d05.webp',
  'https://1abcdesign.github.io/d06.webp',
  'https://1abcdesign.github.io/d07.webp',
  'https://1abcdesign.github.io/d08.webp',
  'https://1abcdesign.github.io/d09.webp',
  'https://1abcdesign.github.io/d10.webp',
];

const photos = [
  'https://1abcdesign.github.io/photo_v.webp',
  'https://1abcdesign.github.io/photo_a.webp',
];

function preload3D() {
  const logo3dsrc = 'https://1abcdesign.github.io/logo3d.glb';
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'fetch';
  link.href = logo3dsrc;
  document.head.appendChild(link);
}

function preloadImages(images) {
  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        // Scroll to the specific section within the .main block
        const mainBlock = document.querySelector('.main');
        mainBlock.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
        return; // Prevent default behavior
      }
    }
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    preload3D();
  } else if (to.path === '/services') {
    preloadImages(assets);
  } else if (to.path === '/company') {
    preloadImages(photos);
  }

  // Check if `navigation_history` exists and is a valid JSON string
  let history;
  try {
    history = JSON.parse(sessionStorage.getItem('navigation_history')) || [];
  } catch (error) {
    // If parsing fails, initialize history as an empty array
    history = [];
  }

  // Add the current route path to history
  if (from.path) {
    history.push(to.path);
  }

  // Store the updated history back in sessionStorage as a JSON string
  sessionStorage.setItem('navigation_history', JSON.stringify(history));

  next()
});

export default router;
