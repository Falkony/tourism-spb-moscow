<script setup lang="ts">
import { useRouter } from 'vue-router';
import SlideItem from '@/components/common/SlideItem.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';

const router = useRouter();
</script>

<template>
    <div class="mt-[40px] px-10">
        <BaseReturn text="Экскурсии" />

        <div class="list">
            <SlideItem
                title="Петербургский треугольник"
                text="Пешеходная экскурсия"
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
                title="Крепость, хранимая ангелом"
                text="Пешеходная экскурсия"
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
                title="О чем молчат дворы Васильевского острова"
                text="Пешеходная экскурсия"
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
                title="Путешествие в эпоху Просвещения"
                text="Экскурсия в Российскую Национальную Библиотеку"
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
                title="Любимая чашка"
                text="Экскурсия в Императорский фарфоровый завод и мастер класс"
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
