<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue';
import BaseFooter from './components/BaseFooter.vue';
</script>

<template>
    <div
        class="tailwind-root app-root"
        style="min-height: 100vh"
    >
        <BaseHeader />
        <router-view />
        <BaseFooter />
    </div>
</template>

<style scoped>
.app-root {
    @apply flex flex-col relative;
}
</style>
