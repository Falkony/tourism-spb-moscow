<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const changeLanguage = (lang: string) => (locale.value = lang);
</script>

<template>
    <div>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('ru')">Русский</button>
        <p>{{ t('welcomeMsg') }}</p>
    </div>
</template>

<style scoped></style>
