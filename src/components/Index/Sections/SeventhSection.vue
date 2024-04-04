<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import Slider from '@/components/common/Slider.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const slides = computed(() => [
    {
        title: t('main-page.excursion.third.title'),
        text: t('main-page.excursion.third.text'),
        url: 'excursions/excursion_3.png',
        price: '750',
    },
    {
        title: t('main-page.excursion.first.title'),
        text: t('main-page.excursion.first.text'),
        url: 'excursions/excursion_1.png',
        price: '1000',
    },
    {
        title: t('main-page.excursion.second.title'),
        text: t('main-page.excursion.second.text'),
        url: 'excursions/excursion_2.png',
        price: '1300',
    },
    {
        title: t('main-page.excursion.fourth.title'),
        text: t('main-page.excursion.fourth.text'),
        url: 'excursions/excursion_4.png',
        price: '900',
    },
    {
        title: t('main-page.excursion.fifth.title'),
        text: t('main-page.excursion.fifth.text'),
        url: 'excursions/excursion_5.png',
        price: '2000',
    },
]);
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

        <Slider :slides="slides" />
    </div>
</template>
