<script setup lang="ts">
import { toRefs } from 'vue';
import MainPage from '@/components/Index/MainPage.vue';
import Index from '@/components/Index/Index.vue';
import { useGlobalStore } from '@/stores/global';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const globalStore = useGlobalStore();
const { getExcursions, getCategories } = globalStore;
const { categories, excursions } = toRefs(globalStore);

const onLoad = async () => {
    if (!excursions.value?.data.length) {
        await getExcursions();
    }

    if (!categories.value?.data.length) {
        await getCategories();
    }
};

onLoad();
</script>

<template>
    <Index v-if="width < 1024" />
    <MainPage v-else />
</template>
