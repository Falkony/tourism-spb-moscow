<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const changeLanguage = (lang: string) => (locale.value = lang);
</script>

<template>
    <div class="flex flex-row gap-x-2">
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('ru')">Русский</button>
    </div>

    <p>{{ t('welcomeMsg') }}</p>
</template>

<style scoped></style>
