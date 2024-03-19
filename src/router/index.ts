import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import About from '@/views/About.vue';
import Tours from '@/views/Tours.vue';
import Tour from '@/components/Tours/Tour.vue';
import Excursions from '@/views/Excursions.vue';
import Excursion from '@/components/Excursions/Excursion.vue';
import Contacts from '@/views/Contacts.vue';
import How from '@/views/How.vue';
import Policy from '@/views/Policy.vue';
import Agents from '@/views/Agents.vue';
import Consent from '@/views/Consent.vue';

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
        path: '/tours/:id',
        name: 'tour',
        component: Tour,
    },
    {
        path: '/excursions',
        name: 'excursions',
        component: Excursions,
    },
    {
        path: '/excursion/:id',
        name: 'excursion',
        component: Excursion,
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
        path: '/consent',
        name: 'consent',
        component: Consent,
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
    scrollBehavior() {
        document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
    },
});

export default router;
