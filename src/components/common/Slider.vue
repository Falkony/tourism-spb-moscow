<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SliderItem from './SlideItem.vue';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

defineProps<{
    slides: any[];
}>();
</script>

<template>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="24"
        :modules="[Scrollbar]"
        centeredSlides
        :scrollbar="{ draggable: true }"
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
</style>
