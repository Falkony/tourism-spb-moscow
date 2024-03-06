import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import About from '@/views/About.vue';
import Tours from '@/views/Tours.vue';
import Excursions from '@/views/Excursions.vue';
import Contacts from '@/views/Contacts.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: MainPage,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/tours',
        name: 'tours',
        component: Tours,
    },
    {
        path: '/excursions',
        name: 'excursions',
        component: Excursions,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
