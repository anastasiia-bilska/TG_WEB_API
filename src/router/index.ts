import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomeView.vue')
    },
    {
      path: '/haptic',
      name: 'haptic',
      component: () => import('@/components/HapticFeedback/HapticFeedback.vue')
    },
    {
      path: '/main-button',
      name: 'main-button',
      component: () => import('@/components/MainButton/MainButton.vue')
    },
    {
      path: '/nfc',
      name: 'nfc',
      component: () => import('@/components/NFC/NFC.vue')
    },
    {
      path: '/face-liveliness',
      name: 'face-liveliness',
      component: () => import('@/components/FaceLiveliness/FaceLiveliness.vue')
    }
  ]
});

export default router
