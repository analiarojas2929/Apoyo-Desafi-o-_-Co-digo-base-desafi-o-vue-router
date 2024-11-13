import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// Lazy load para los componentes
const ProductosView = () => import('../views/ProductosView.vue');
const ContactoView = () => import('../views/ContactoView.vue');
const AboutView = () => import('../views/AboutView.vue');

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { 
    path: '/productos',
    name: 'productos',
    component: ProductosView,
    props: route => ({
      nombre: route.query.nombre,
      descripcion: route.query.descripcion,
      precio: route.query.precio,
      cantidad: route.query.cantidad
    })
  },
  { path: '/contacto', name: 'contacto', component: ContactoView },
  { path: '/about', name: 'about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
