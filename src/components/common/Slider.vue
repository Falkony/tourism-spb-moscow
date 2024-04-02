<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SliderItem from './SlideItem.vue';
import { Pagination } from 'swiper/modules';
import { useWindowSize } from '@vueuse/core';
import 'swiper/css';
import 'swiper/css/scrollbar';

const { width } = useWindowSize();

defineProps<{
    slides: any[];
}>();
</script>

<template>
    <swiper
        :slidesPerView="width >= 768 ? 2.5 : 'auto'"
        :spaceBetween="24"
        pagination
        :modules="[Pagination]"
        grab-cursor
    >
        <swiper-slide
            v-for="(slide, i) in slides"
            :key="i"
        >
            <SliderItem
                :text="slide.text"
                :title="slide.title"
                :price="slide.price"
                :url="slide.url"
            />
        </swiper-slide>
    </swiper>
</template>

<style scoped>
.swiper {
    height: 100%;
    width: 100%;
    padding: 50px 0;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    height: 450px;
    width: 100%;
}

@media screen and (min-width: 900px) {
    .swiper {
        padding: 50px 0;
    }

    .swiper-slide {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: max-content;
        height: 550px;
        padding: 30px 0;
    }
}
</style>
