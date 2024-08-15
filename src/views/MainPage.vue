<script setup lang="ts">
import MainPage from '@/components/Index/MainPage.vue';
import Index from '@/components/Index/Index.vue';
import { useGlobalStore } from '@/stores/global';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const globalStore = useGlobalStore();
const { getExcursions, getCategories } = globalStore;

const onLoad = async () => {
    await getExcursions();
    await getCategories();
};

onLoad();
</script>

<template>
    <Index v-if="width < 1024" />
    <MainPage v-else />
</template>
