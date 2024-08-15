<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { useGlobalStore } from '@/stores/global';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const router = useRouter();
const { t } = useI18n();

const globalStore = useGlobalStore();
const { categories } = toRefs(globalStore);

const fbCategories = computed(() => categories.value.data?.slice(0, 3));
const sbCaterories = computed(() => categories.value.data?.slice(3));

const onCategory = (id: number) => {
    router.push({
        name: 'category',
        params: { id },
    });
};
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="flex items-center justify-center relative mb-4">
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
                @click="router.push('/categories')"
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
                <div
                    class="flex flex-col w-[150px] gap-y-6 items-center justify-center"
                    @click="onCategory(fbCategories[0].id)"
                >
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
                <div
                    class="flex flex-col w-[150px] gap-y-6 items-center justify-center"
                    @click="onCategory(fbCategories[1].id)"
                >
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

            <SwiperSlide v-slot="{ isActive }">
                <div
                    class="flex flex-col w-[150px] gap-y-6 items-center justify-center"
                    @click="onCategory(fbCategories[2].id)"
                >
                    <div class="circle">
                        <img src="@/assets/images/globe.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.foreign')"
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
                <div
                    class="flex flex-col w-[150px] gap-y-6 items-center justify-center"
                    @click="onCategory(sbCaterories[0].id)"
                >
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
                <div
                    class="flex flex-col w-[150px] gap-y-6 items-center justify-center"
                    @click="onCategory(sbCaterories[2].id)"
                >
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
                <div
                    class="flex flex-col w-[150px] gap-y-6 items-center justify-center"
                    @click="onCategory(sbCaterories[1].id)"
                >
                    <div class="circle">
                        <img src="@/assets/images/ships.png" />
                    </div>

                    <BaseTypography
                        v-if="isActive"
                        :text="t('main-page.tours.water')"
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
