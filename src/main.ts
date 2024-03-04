import { createApp } from 'vue';
import i18n from '../i18n';
import App from './App.vue';
import './assets/index.css';
import router from './router';

const app = createApp(App);

app.use(router).use(i18n).mount('#app');
