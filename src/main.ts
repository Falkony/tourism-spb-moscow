import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createYmaps } from 'vue-yandex-maps';
import i18n from '../i18n';
import App from './App.vue';
import './assets/index.css';
import router from './router';

const pinia = createPinia();
const app = createApp(App);
const ymaps = createYmaps({
    apikey: '9fa90fbc-ce5f-4dc9-ae6d-433e0ec7338b',
});

app.use(router).use(i18n).use(pinia).use(ymaps).mount('#app');
