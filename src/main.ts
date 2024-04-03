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
    apikey: '79568a14-1219-4ca9-b408-38d9bd05c8bd',
});

app.use(router).use(i18n).use(pinia).use(ymaps).mount('#app');
