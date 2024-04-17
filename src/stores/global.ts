import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import axios from 'axios';

export const useGlobalStore = defineStore('global', () => {
    const router = useRouter();
    const { width } = useWindowSize();

    const tours = ref<any>();
    const excursions = ref<any>();

    const isMainPage = computed(() => router.currentRoute.value.fullPath === '/');
    const isMobile = computed(() => width.value < 768);

    const BASE_URL = process.env.VUE_APP_API_WEB_URL;
    const TOKEN = process.env.VUE_APP_STRAPI_TOKEN;

    const headers = {
        Authorization: TOKEN,
        'Content-Type': 'application/json',
    };

    const getExcursions = async () => {
        const { data } = await axios.get(`${BASE_URL}/ekskursiis?populate=*`, {
            headers,
        });

        excursions.value = data;
        return data;
    };

    const getTours = async () => {
        const { data } = await axios.get(`${BASE_URL}/tours?populate=*`, {
            headers,
        });
        tours.value = data;
        return data;
    };

    const getTour = async (id: number) => {
        const { data } = await axios.get(`${BASE_URL}/tours/${id}?populate=*`, {
            headers,
        });

        return data;
    };

    const getExcursion = async (id: number) => {
        const { data } = await axios.get(`${BASE_URL}/ekskursiis/${id}?populate=*`, {
            headers,
        });

        return data;
    };

    return {
        isMainPage,
        isMobile,
        tours,
        excursions,
        getExcursions,
        getTours,
        getTour,
        getExcursion,
    };
});
