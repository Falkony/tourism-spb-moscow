<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SlideItem from '@/components/common/SlideItem.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
    <div class="mt-[40px] px-10">
        <BaseReturn :text="t('tours.title')" />

        <div class="list">
            <SlideItem
                :title="t('tours.first.title')"
                :text="t('tours.first.text')"
                url="tours/tour_1.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'spb',
                        },
                        state: {
                            title: t('tours.first.title'),
                        },
                    })
                "
            />

            <SlideItem
                :title="t('tours.second.title')"
                :text="t('tours.second.text')"
                url="tours/tour_2.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'msk',
                        },
                        state: {
                            title: t('tours.second.title'),
                        },
                    })
                "
            />

            <SlideItem
                :title="t('tours.third.title')"
                :text="t('tours.third.text')"
                url="tours/tour_3.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'russia',
                        },
                        state: {
                            title: t('tours.third.title'),
                        },
                    })
                "
            />

            <SlideItem
                :title="t('tours.fourth.title')"
                :text="t('tours.fourth.text')"
                url="tours/tour_4.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'students',
                        },
                        state: {
                            title: t('tours.fourth.title'),
                        },
                    })
                "
            />

            <SlideItem
                :title="t('tours.fifth.title')"
                :text="t('tours.fifth.text')"
                url="tours/tour_5.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'active',
                        },
                        state: {
                            title: t('tours.fifth.title'),
                        },
                    })
                "
            />

            <SlideItem
                :title="t('tours.sixth.title')"
                :text="t('tours.sixth.text')"
                url="tours/tour_6.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'sport',
                        },
                        state: {
                            title: t('tours.sixth.title'),
                        },
                    })
                "
            />
        </div>
    </div>
</template>

<style scoped>
.list {
    @apply flex flex-wrap justify-center gap-y-[56px] gap-x-[104px] max-w-[1126px] mx-auto l:grid l:grid-cols-[428px_428px] l:mb-[104px];
}
</style>
