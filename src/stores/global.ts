import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import axios from 'axios';

export const useGlobalStore = defineStore('global', () => {
    const router = useRouter();
    const { width } = useWindowSize();

    const categories = ref();
    const category = ref();
    const categoryTitle = ref();
    const tours = ref();
    const excursions = ref();

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

    const getExcursion = async (id: number) => {
        const { data } = await axios.get(`${BASE_URL}/ekskursiis/${id}?populate=*`, {
            headers,
        });

        return data;
    };

    const getCategories = async () => {
        const { data } = await axios.get(`${BASE_URL}/kategoriis?populate=*`, {
            headers,
        });

        categories.value = data;
        return data;
    };

    const getCategory = async (id: number) => {
        const { data } = await axios.get(`${BASE_URL}/tours?filters[category][id][$eq]=${id}&populate=*`, {
            headers,
        });

        category.value = data;
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
        const { data } = await axios.get(`${BASE_URL}/tours/${id}?populate=tourDescription.dayImgs`, {
            headers,
        });

        return data;
    };

    return {
        isMainPage,
        isMobile,
        tours,
        excursions,
        categories,
        category,
        categoryTitle,
        getExcursions,
        getCategories,
        getCategory,
        getTours,
        getTour,
        getExcursion,
    };
});
