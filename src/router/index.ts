import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '@/views/MainPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: MainPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
