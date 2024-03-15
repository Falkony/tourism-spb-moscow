<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SliderItem from './SlideItem.vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

defineProps<{
    slides: any[];
}>();

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
        navigation
        :modules="[Navigation]"
        @slideChange="onSlideChange"
    >
        <swiper-slide
            v-for="(slide, i) in slides"
            :key="i"
        >
            <SliderItem
                :text="slide.text"
                :title="slide.title"
                :price="slide.price"
            />
        </swiper-slide>
    </swiper>
</template>

<style scoped></style>
