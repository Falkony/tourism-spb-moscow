<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import BaseTypography from './BaseTypography.vue';

const { t, locale } = useI18n();

const changeLanguage = (lang: string) => (locale.value = lang);
</script>

<template>
    <div class="flex flex-row gap-x-2">
        <button @click="changeLanguage('ru')">
            <BaseTypography
                text="РУ"
                type="footnote"
                color="var(--base-white)"
            />
        </button>

        <button @click="changeLanguage('en')">
            <BaseTypography
                text="EN"
                type="footnote"
                color="var(--base-white)"
            />
        </button>
    </div>
</template>
