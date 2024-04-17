<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import Slider from '@/components/common/Slider.vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="flex items-center justify-center relative mb-12">
            <BaseButton
                :text="t('main-page.excursion.title')"
                type="subtitle-m"
                padding-x="64"
                padding-y="12"
                color="var(--black-color)"
                ui="primary"
            />

            <!-- Router to tours -->
            <div
                class="absolute right-0 cursor-pointer"
                @click="router.push('/excursions')"
            >
                <img src="@/assets/svg/mobile/shevron_right.svg" />
            </div>
        </div>

        <Slider />
    </div>
</template>
