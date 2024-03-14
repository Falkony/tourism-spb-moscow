<script setup lang="ts">
import LocaleSwitcher from './common/LocaleSwitcher.vue';
import NavMenu from './common/NavMenu.vue';
</script>

<template>
    <header class="header-navigation container-fluid py-[33px]">
        <router-link to="/">
            <img
                class="logo"
                src="@/assets/images/logo.png"
            />
        </router-link>

        <NavMenu />
        <LocaleSwitcher class="ml-auto" />
    </header>
</template>

<style scoped>
.header-navigation {
    /* temp */
    background-color: black;
    @apply flex flex-row items-center gap-x-10 absolute top-0 left-0 w-full;
}

/* .header-navigation {
    background-color: var(--white-color);
    z-index: 20;
    display: flex;
    flex-direction: row;
    align-items: center;
    @apply absolute h-[--header-height] w-full top-0 left-0;
}

.header-navigation img {
    padding-bottom: calc(var(--header-height) - 124px);
} */
</style>
