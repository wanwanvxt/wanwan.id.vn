import './assets/main.css';
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';

export const createApp = ViteSSG(App, {
  routes: [{ path: '/', component: () => import('./pages/Home.vue') }]
});
