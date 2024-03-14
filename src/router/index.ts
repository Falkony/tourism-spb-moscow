import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import About from '@/views/About.vue';
import Tours from '@/views/Tours.vue';
import Excursions from '@/views/Excursions.vue';
import Contacts from '@/views/Contacts.vue';
import How from '@/views/How.vue';
import Policy from '@/views/Policy.vue';
import Agents from '@/views/Agents.vue';

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
    {
        path: '/how',
        name: 'how',
        component: How,
    },
    {
        path: '/policy',
        name: 'policy',
        component: Policy,
    },
    {
        path: '/agents',
        name: 'agents',
        component: Agents,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
