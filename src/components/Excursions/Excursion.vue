<script setup lang="ts">
import { toRefs } from 'vue';
import ExcursionDesktop from './ExcursionDesktop.vue';
import ExcursionMobile from './ExcursionMobile.vue';
import { useGlobalStore } from '@/stores/global';

const { isMobile } = toRefs(useGlobalStore());
</script>

<template>
    <ExcursionMobile v-if="isMobile" />
    <ExcursionDesktop v-else />
</template>
