<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import BaseButton from '@/components/common/BaseButton.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="flex items-center justify-center relative mb-12">
            <BaseButton
                text="Туры"
                type="subtitle-m"
                padding-x="64"
                padding-y="12"
                color="var(--black-color)"
                ui="primary"
            />

            <!-- Router to tours -->
            <div class="absolute right-0 cursor-pointer">
                <img src="@/assets/svg/mobile/shevron_right.svg" />
            </div>
        </div>

        <swiper
            effect="coverflow"
            :slides-per-view="2"
            :modules="[Pagination, EffectCoverflow]"
            :coverflowEffect="{
                rotate: 75,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }"
            centeredSlides
            grab-cursor
            pagination
            class="mb-[56px]"
        >
            <SwiperSlide>
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/msk.png" />
                    </div>

                    <BaseTypography
                        text="Москва"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/spb.png" />
                    </div>

                    <BaseTypography
                        text="Санкт-Петербург"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/russia.png" />
                    </div>

                    <BaseTypography
                        text="Россия"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>
        </swiper>

        <div class="flex justify-center mb-[56px]">
            <BaseLine width="127" />
        </div>

        <swiper
            effect="coverflow"
            :slides-per-view="2"
            :modules="[Pagination, EffectCoverflow]"
            :coverflowEffect="{
                rotate: 75,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }"
            centeredSlides
            grab-cursor
            pagination
        >
            <SwiperSlide>
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/school.png" />
                    </div>

                    <BaseTypography
                        text="Туры для школьников"
                        type="subtitle2-m"
                        class="whitespace-nowrap"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/medicine.png" />
                    </div>

                    <BaseTypography
                        text="Оздоровительный отдых"
                        type="subtitle2-m"
                        class="text-center"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/active.png" />
                    </div>

                    <BaseTypography
                        text="Активный отдых"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>
        </swiper>
    </div>
</template>

<style scoped>
.circle {
    border: 3px solid var(--primary-color);
    border-radius: 100%;

    @apply flex items-center h-[150px] w-[150px] py-10 px-4;
}

.swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 56px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 270px;
}
</style>
