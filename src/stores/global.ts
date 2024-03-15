import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export const useGlobalStore = defineStore('global', () => {
    const router = useRouter();

    const isMainPage = computed(() => router.currentRoute.value.fullPath === '/');

    return {
        isMainPage,
    };
});
