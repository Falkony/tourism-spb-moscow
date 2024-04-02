<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full">
        <div class="flex flex-col gap-y-[3px] p-[10px] text-center">
            <BaseTypography
                :text="t('main-page.fourth-section.first')"
                type="title-m"
            />

            <BaseLine width="156" />
        </div>

        <div class="flex flex-col gap-y-[3px] p-[10px] text-center">
            <BaseTypography
                :text="t('main-page.fourth-section.second')"
                type="title-m"
            />

            <BaseLine width="220" />
        </div>

        <div class="flex flex-col gap-y-[3px] p-[10px] text-center">
            <BaseTypography
                :text="t('main-page.fourth-section.third')"
                type="title-m"
            />

            <BaseLine width="291" />
        </div>
    </div>
</template>
