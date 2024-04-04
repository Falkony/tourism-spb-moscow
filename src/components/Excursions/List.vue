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
        <BaseReturn :text="t('excursion.title')" />

        <div class="list">
            <SlideItem
                :title="t('excursion.third.title')"
                :text="t('excursion.third.text')"
                url="excursions/excursion_3.png"
                price="750"
                @click="
                    router.push({
                        name: 'excursion',
                        params: {
                            id: '3',
                        },
                    })
                "
            />

            <SlideItem
                :title="t('excursion.first.title')"
                :text="t('excursion.first.text')"
                url="excursions/excursion_1.png"
                price="1000"
                @click="
                    router.push({
                        name: 'excursion',
                        params: {
                            id: '1',
                        },
                    })
                "
            />

            <SlideItem
                :title="t('excursion.second.title')"
                :text="t('excursion.second.text')"
                url="excursions/excursion_2.png"
                price="1300"
                @click="
                    router.push({
                        name: 'excursion',
                        params: {
                            id: '2',
                        },
                    })
                "
            />

            <SlideItem
                :title="t('excursion.fourth.title')"
                :text="t('excursion.fourth.text')"
                url="excursions/excursion_4.png"
                price="900"
                @click="
                    router.push({
                        name: 'excursion',
                        params: {
                            id: '4',
                        },
                    })
                "
            />

            <SlideItem
                :title="t('excursion.fifth.title')"
                :text="t('excursion.fifth.text')"
                url="excursions/excursion_5.png"
                price="2000"
                @click="
                    router.push({
                        name: 'excursion',
                        params: {
                            id: '5',
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
