<script setup lang="ts">
import MainPage from '@/components/Index/MainPage.vue';
import Index from '@/components/Index/Index.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<template>
    <Index v-if="width < 960" />
    <MainPage v-else />
</template>
