<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseContainer from '@/components/common/BaseContainer.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import { useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { width } = useWindowSize();
const { t } = useI18n();

const paragraphs = computed(() => [
    {
        items: [t('policy.text.1'), t('policy.text.2'), t('policy.text.3'), t('policy.text.4')],
    },
    {
        items: [
            t('policy.text.5'),
            t('policy.text.6'),
            t('policy.text.7'),
            t('policy.text.8'),
            t('policy.text.9'),
            t('policy.text.10'),
            t('policy.text.11'),
            t('policy.text.12'),
            t('policy.text.13'),
            t('policy.text.14'),
            t('policy.text.15'),
            t('policy.text.16'),
            t('policy.text.17'),
            t('policy.text.18'),
            t('policy.text.19'),
        ],
    },
    {
        items: [t('policy.text.20'), t('policy.text.21'), t('policy.text.22')],
    },
    {
        items: [t('policy.text.23'), t('policy.text.24'), t('policy.text.25'), t('policy.text.26')],
    },
    {
        items: [
            t('policy.text.27'),
            t('policy.text.28'),
            t('policy.text.29'),
            t('policy.text.30'),
            t('policy.text.31'),
            t('policy.text.32'),
            t('policy.text.33'),
            t('policy.text.34'),
        ],
    },
    {
        items: [
            t('policy.text.35'),
            t('policy.text.36'),
            t('policy.text.37'),
            t('policy.text.38'),
            t('policy.text.39'),
            t('policy.text.40'),
            t('policy.text.41'),
            t('policy.text.42'),
        ],
    },
    {
        items: [
            t('policy.text.43'),
            t('policy.text.44'),
            t('policy.text.45'),
            t('policy.text.46'),
            t('policy.text.47'),
            t('policy.text.48'),
            t('policy.text.49'),
            t('policy.text.50'),
            t('policy.text.51'),
            t('policy.text.52'),
            t('policy.text.53'),
            t('policy.text.54'),
        ],
    },
    {
        items: [t('policy.text.55'), t('policy.text.56'), t('policy.text.57')],
    },
    {
        items: [t('policy.text.58'), t('policy.text.59'), t('policy.text.60')],
    },
    {
        items: [t('policy.text.61'), t('policy.text.62')],
    },
    {
        items: [t('policy.text.63'), t('policy.text.64'), t('policy.text.65'), t('policy.text.66')],
    },
]);
</script>

<template>
    <div class="mt-[40px] l:mb-[104px]">
        <BaseReturn :text="t('policy.title')" />

        <BaseContainer>
            <div
                v-for="(paragraph, i) in paragraphs"
                :key="i"
                class="mb-4"
            >
                <BaseTypography
                    v-for="(text, j) in paragraph.items"
                    :key="j"
                    :text="text"
                    :type="width > 768 ? 'body' : 'body-m'"
                    class="indent-8"
                />
            </div>
        </BaseContainer>
    </div>
</template>
