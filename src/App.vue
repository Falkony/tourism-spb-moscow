<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import CookieAgreement from '@/components/common/CookieAgreement.vue';
</script>

<template>
    <div
        class="tailwind-root app-root"
        style="min-height: 100vh"
    >
        <BaseHeader />

        <router-view />

        <BaseFooter />

        <CookieAgreement />
    </div>
</template>

<style scoped>
.app-root {
    @apply flex flex-col relative;
}
</style>
