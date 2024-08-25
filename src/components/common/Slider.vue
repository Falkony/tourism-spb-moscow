<script setup lang="ts">
import { toRefs } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SlideItem from './SlideItem.vue';
import { Pagination } from 'swiper/modules';
import { useWindowSize } from '@vueuse/core';
import { useGlobalStore } from '@/stores/global';
import { useRouter } from 'vue-router';
import 'swiper/css';
import 'swiper/css/scrollbar';

const router = useRouter();

const globalStore = useGlobalStore();
const { excursions } = toRefs(globalStore);

const { width } = useWindowSize();
</script>

<template>
    <swiper
        v-if="excursions"
        :slidesPerView="width >= 768 ? 2.5 : 'auto'"
        :spaceBetween="24"
        pagination
        :modules="[Pagination]"
        grab-cursor
    >
        <swiper-slide
            v-for="(slide, i) in excursions?.data"
            :key="i"
        >
            <SlideItem
                :text="slide.attributes.subtitle"
                :title="slide.attributes.title"
                :price="slide.attributes.summForGroup"
                :url="slide.attributes.img.data?.attributes.url"
                :id="slide.id"
                @click="
                    router.push({
                        name: 'excursion',
                        params: { id: slide.id },
                    })
                "
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
