<script setup lang="ts">
import { toRefs } from 'vue';
import TourDesktop from './TourDesktop.vue';
import TourMobile from './TourMobile.vue';
import { useGlobalStore } from '@/stores/global';

const store = useGlobalStore();
const { isMobile } = toRefs(store);
</script>

<template>
    <TourMobile v-if="isMobile" />
    <TourDesktop v-else />
</template>
