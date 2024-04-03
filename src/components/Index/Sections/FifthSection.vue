<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, EffectCoverflow } from 'swiper/modules';
// ToDo: оптимизировать...
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="flex items-center justify-center relative mb-12">
            <BaseButton
                :text="t('main-page.tours.title')"
                type="subtitle-m"
                padding-x="64"
                padding-y="12"
                color="var(--black-color)"
                ui="primary"
            />

            <!-- Router to tours -->
            <div
                class="absolute right-0 cursor-pointer"
                @click="router.push('/tours')"
            >
                <img src="@/assets/svg/mobile/shevron_right.svg" />
            </div>
        </div>

        <swiper
            effect="coverflow"
            :slides-per-view="3"
            :modules="[Pagination, EffectCoverflow]"
            :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false,
            }"
            centeredSlides
            grab-cursor
            pagination
        >
            <SwiperSlide v-slot="{ isActive }">
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/msk.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.moscow')"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide v-slot="{ isActive }">
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/spb.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.spb')"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide v-slot="{ isActive }">
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/russia.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.russia')"
                        type="subtitle2-m"
                    />
                </div>
            </SwiperSlide>
        </swiper>

        <div class="flex justify-center">
            <BaseLine width="127" />
        </div>

        <swiper
            effect="coverflow"
            :slides-per-view="3"
            :modules="[Pagination, EffectCoverflow]"
            :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false,
            }"
            centeredSlides
            grab-cursor
            pagination
        >
            <SwiperSlide v-slot="{ isActive }">
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/school.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.school')"
                        type="subtitle2-m"
                        class="whitespace-nowrap"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide v-slot="{ isActive }">
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/medicine.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.medicine')"
                        type="subtitle2-m"
                        class="text-center"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide v-slot="{ isActive }">
                <div class="flex flex-col w-[150px] gap-y-6 items-center justify-center">
                    <div class="circle">
                        <img src="@/assets/images/active.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.active')"
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

    @apply flex items-center bg-[var(--bg-color)] h-[150px] w-[150px] py-10 px-4;
}

.swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 56px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 350px;

    @apply m:h-[350px];
}
</style>
