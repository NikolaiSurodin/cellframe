import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { path: '/certificates', component: () => import('../components/pages/Certificates.vue') },
        { path: '/wallet', component: () => import('../components/pages/Wallet.vue') },
        { path: '/dex', component: () => import('../components/pages/Dex.vue') },
        { path: '/tx_explorer', component: () => import('../components/pages/Explorer.vue') },
        { path: '/tokens', component: () => import('../components/pages/Tokens.vue') },
      ]
    },
    {
      path: '/about',
      name: 'about',
    },
  ]
} )
router.beforeEach( ( to, from ) => {
  if( to.path === '/' ) {
    return {
      path: '/certificates',
    }
  }
} )

export default router
