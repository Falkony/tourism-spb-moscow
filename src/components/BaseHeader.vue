<script setup lang="ts">
import LocaleSwitcher from './common/LocaleSwitcher.vue';
</script>

<template>
    <header class="header-navigation">
        <div class="text-white w-full"></div>
        <LocaleSwitcher class="ml-auto" />
    </header>
</template>

<style scoped>
.header-navigation {
    background-color: var(--white-color);
    z-index: 20;
    display: flex;
    flex-direction: row;
    @apply absolute h-[149px] w-full top-0 left-0;
}
</style>
