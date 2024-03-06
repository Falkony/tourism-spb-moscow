<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const changeLanguage = (lang: string) => (locale.value = lang);
</script>

<template>
    <div class="flex flex-row gap-x-2">
        <button @click="changeLanguage('ru')">РУ</button>
        <button @click="changeLanguage('en')">EN</button>
    </div>
</template>

<style scoped></style>
