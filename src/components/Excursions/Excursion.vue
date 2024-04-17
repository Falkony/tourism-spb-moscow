<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
import ExcursionDesktop from './ExcursionDesktop.vue';
import ExcursionMobile from './ExcursionMobile.vue';
import { useGlobalStore } from '@/stores/global';

const { isMobile } = toRefs(useGlobalStore());
const router = useRouter();

const id = +router.currentRoute.value.params.id;
</script>

<template>
    <ExcursionMobile
        v-if="isMobile"
        :id="id"
    />

    <ExcursionDesktop
        v-else
        :id="id"
    />
</template>
