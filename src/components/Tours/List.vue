<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';

import { useRouter } from 'vue-router';
import SlideItem from '../common/SlideItem.vue';

const router = useRouter();
</script>

<template>
    <div class="mt-[40px] mb-[104px]">
        <div class="flex items-center w-full mb-[76px]">
            <div
                class="pl-[120px] pr-[76px] cursor-pointer"
                @click="router.back()"
            >
                <img src="@/assets/svg/arrow-left.svg" />
            </div>

            <BaseButton
                text="Туры"
                type="subtitle"
                ui="primary"
                color="var(--black-color)"
            />
        </div>

        <div class="flex flex-wrap justify-center gap-y-[56px] gap-x-[104px] max-w-[1126px] mx-auto">
            <SlideItem
                title="Туры в Санкт-Петербург"
                text="Культурная столица: дворцы, мосты и каналы"
                url="tours/tour_1.png"
                @click="
                    router.push({
                        name: 'general_tour',
                        params: {
                            slug: 'spb',
                        },
                        state: {
                            title: 'Туры в Санкт-Петербург',
                        },
                    })
                "
            />

            <SlideItem
                title="Туры в Москву"
                text="Сердце России: Кремлевская площадь, Собор Василия Блаженного и ВДНХ"
                url="tours/tour_2.png"
            />

            <SlideItem
                title="Туры по России"
                text="Мурманск и северное сияние, Казань и Казанский кремль"
                url="tours/tour_3.png"
            />

            <SlideItem
                title="Туры для школьников"
                text="Культурная программа для детей и подростков"
                url="tours/tour_4.png"
            />

            <SlideItem
                title="Оздоровительные туры"
                text="Спа-комплексы и санатории: совмещение приятного с полезным"
                url="tours/tour_5.png"
            />

            <SlideItem
                title="Туры для активного отдыха"
                text="Экотропы и спортивные развлечения"
                url="tours/tour_6.png"
            />
        </div>
    </div>
</template>

<style scoped></style>
