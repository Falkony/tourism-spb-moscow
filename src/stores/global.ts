import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';

export const useGlobalStore = defineStore('global', () => {
    const router = useRouter();
    const { width } = useWindowSize();

    const isMainPage = computed(() => router.currentRoute.value.fullPath === '/');
    const isMobile = computed(() => width.value < 768);

    return {
        isMainPage,
        isMobile,
    };
});
