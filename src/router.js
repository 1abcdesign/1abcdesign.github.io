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
    component: () => import('@/views/404.vue'),
  },
];

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
  if (to.path === '/services') {
    preloadImages();
  } else if (to.path === '/company') {
    preloadPhotos()
  }
  next();
});

function preloadImages() {
  const images = [
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

  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

function preloadPhotos() {
  const photos = [
    'https://1abcdesign.github.io/photo_v.webp',
    'https://1abcdesign.github.io/photo_a.webp',
  ];

  photos.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

export default router;
