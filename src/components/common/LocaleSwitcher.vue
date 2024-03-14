<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseTypography from './BaseTypography.vue';

withDefaults(
    defineProps<{
        color: string;
    }>(),
    {
        color: 'var(--base-white)',
    }
);

const { locale } = useI18n();

const changeLanguage = (lang: string) => (locale.value = lang);
</script>

<template>
    <div class="flex flex-row gap-x-2">
        <button @click="changeLanguage('ru')">
            <BaseTypography
                text="РУ"
                type="footnote"
                :color="color"
            />
        </button>

        <button @click="changeLanguage('en')">
            <BaseTypography
                text="EN"
                type="footnote"
                :color="color"
            />
        </button>
    </div>
</template>
