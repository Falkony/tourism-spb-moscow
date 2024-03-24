<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import Slider from '@/components/common/Slider.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const slides = [
    {
        title: 'Петербургский треугольник',
        text: 'Пешеходная экскурсия',
        url: 'excursions/excursion_1.png',
        price: '1000',
    },
    {
        title: 'Крепость, хранимая ангелом',
        text: 'Пешеходная экскурсия',
        url: 'excursions/excursion_2.png',
        price: '1300',
    },
    {
        title: 'О чем молчат дворы Васильевского острова',
        text: 'Пешеходная экскурсия',
        url: 'excursions/excursion_3.png',
        price: '750',
    },
    {
        title: 'Путешествие в эпоху Просвещения',
        text: 'Экскурсия в Российскую Национальную Библиотеку',
        url: 'excursions/excursion_4.png',
        price: '900',
    },
    {
        title: 'Любимая чашка',
        text: 'Экскурсия в Императорский фарфоровый завод и мастер класс',
        url: 'excursions/excursion_5.png',
        price: '2000',
    },
];
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="flex items-center justify-center relative mb-12">
            <BaseButton
                text="Экскурсии"
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

        <Slider
            :slides="slides"
            class="mb-16"
        />
    </div>
</template>

<style scoped></style>
