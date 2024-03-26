<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
</script>

<template>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :modules="[Scrollbar]"
        centeredSlides
        :scrollbar="{ draggable: true }"
        grab-cursor
    >
        <SwiperSlide>
            <img
                src="@/assets/images/admiral.png"
                class="w-full object-cover rounded-[50px]"
            />
        </SwiperSlide>

        <SwiperSlide>
            <img
                src="@/assets/images/smolniy.png"
                class="w-full object-cover rounded-[50px]"
            />
        </SwiperSlide>

        <SwiperSlide>
            <img
                src="@/assets/images/cremlin.png"
                class="w-full object-cover rounded-[50px]"
            />
        </SwiperSlide>

        <SwiperSlide>
            <img
                src="@/assets/images/pushka.png"
                class="w-full object-cover rounded-[50px]"
            />
        </SwiperSlide>

        <SwiperSlide>
            <img
                src="@/assets/images/murmansk.png"
                class="w-full object-cover rounded-[50px]"
            />
        </SwiperSlide>

        <SwiperSlide>
            <img
                src="@/assets/images/ledocol.png"
                class="w-full object-cover rounded-[50px]"
            />
        </SwiperSlide>
    </swiper>
</template>

<style scoped>
.swiper {
    width: 100%;
    height: 300px;

    @apply h-max py-10;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    height: 215px;
    width: 80%;

    @apply m:h-auto;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
