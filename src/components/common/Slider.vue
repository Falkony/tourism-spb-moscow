<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SliderItem from './SlideItem.vue';
import 'swiper/css';

const onSwiper = (swiper) => {
    console.log(swiper);
};

const onSlideChange = () => {
    console.log('slide change');
};
</script>

<template>
    <swiper
        :slides-per-view="2"
        :space-between="104"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide>
            <SliderItem />
        </swiper-slide>

        <swiper-slide>
            <SliderItem />
        </swiper-slide>
        <swiper-slide>
            <SliderItem />
        </swiper-slide>
        <swiper-slide>
            <SliderItem />
        </swiper-slide>
        <swiper-slide>
            <SliderItem />
        </swiper-slide>
        <swiper-slide>
            <SliderItem />
        </swiper-slide>
    </swiper>
</template>

<style scoped></style>
