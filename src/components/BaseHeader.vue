<script setup lang="ts">
import LocaleSwitcher from './common/LocaleSwitcher.vue';
import NavMenu from './common/NavMenu.vue';
</script>

<template>
    <header class="header-navigation container-fluid">
        <router-link
            to="/"
            class="pl-[40px]"
        >
            <img
                class="max-w-[190px]"
                src="@/assets/images/logo.png"
                alt="Logo"
            />
        </router-link>
        <NavMenu class="flex-4" />
        <LocaleSwitcher class="ml-auto pr-[40px]" />
    </header>
</template>

<style scoped>
.header-navigation {
    background-color: var(--white-color);
    z-index: 20;
    display: flex;
    flex-direction: row;
    align-items: center;
    @apply absolute h-[--header-height] w-full top-0 left-0;
}

.header-navigation img {
    padding-bottom: calc(var(--header-height) - 124px);
}
</style>
