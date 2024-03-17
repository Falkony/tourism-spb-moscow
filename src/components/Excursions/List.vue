<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import SlideItem from '@/components/common/SlideItem.vue';

import { useRouter } from 'vue-router';

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
                text="Экскурсии"
                type="subtitle"
                ui="primary"
                color="var(--black-color)"
            />
        </div>

        <div class="flex flex-wrap justify-center gap-y-[56px] gap-x-[104px] max-w-[1126px] mx-auto">
            <SlideItem
                title="Петербургский треугольник"
                text="Пешеходная экскурсия"
                url="excursions/excursion_1.png"
                price="1000"
            />

            <SlideItem
                title="Крепость, хранимая ангелом"
                text="Пешеходная экскурсия"
                url="excursions/excursion_2.png"
                price="1300"
            />

            <SlideItem
                title="О чем молчат дворы Васильевского острова"
                text="Пешеходная экскурсия"
                url="excursions/excursion_3.png"
                price="750"
            />

            <SlideItem
                title="Путешествие в эпоху Просвещения"
                text="Экскурсия в Российскую Национальную Библиотеку"
                url="excursions/excursion_4.png"
                price="900"
            />

            <SlideItem
                title="Любимая чашка"
                text="Экскурсия в Императорский фарфоровый завод и мастер класс"
                url="excursions/excursion_5.png"
                price="2000"
                class="self-start"
            />
        </div>
    </div>
</template>
