
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('../pages/LoginView.vue') },
      { path: '/todas-categorias',  component: () => import('../pages/TodasCategoriasView.vue')},
      { path: '/sacola',  component: () => import('../pages/SacolaPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]

export default routes
