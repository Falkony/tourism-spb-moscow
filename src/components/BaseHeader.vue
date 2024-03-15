<script setup lang="ts">
import { toRefs } from 'vue';
import { useGlobalStore } from '@/stores/global';
import LocaleSwitcher from './common/LocaleSwitcher.vue';
import NavMenu from './common/NavMenu.vue';

const globalStore = useGlobalStore();
const { isMainPage } = toRefs(globalStore);
</script>

<template>
    <header
        class="header-navigation container-fluid py-[33px]"
        :class="{ 'bg-[var(--bg-color)] border-b': !isMainPage }"
    >
        <router-link to="/">
            <img
                v-if="isMainPage"
                src="@/assets/images/logo.png"
            />

            <img
                v-else
                src="@/assets/images/logo_btm.png"
            />
        </router-link>

        <NavMenu />

        <LocaleSwitcher
            class="ml-auto"
            :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
        />
    </header>
</template>

<style scoped>
.header-navigation {
    @apply flex flex-row items-center gap-x-10 absolute top-0 left-0 w-full bg-[var(--white-color)];
}
</style>
