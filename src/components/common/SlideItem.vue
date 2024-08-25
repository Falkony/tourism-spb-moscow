<script setup lang="ts">
import { defineProps, toRefs, ref } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import arrowRight from '@/assets/svg/arrow-right.svg';
import arrowRightGreen from '@/assets/svg/arrow-right-green.svg';
import { useGlobalStore } from '@/stores/global';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

defineProps<{
    id: string | number;
    title: string;
    text: string;
    url: string;
    price?: number;
}>();

const { isMobile } = toRefs(useGlobalStore());
const { t } = useI18n();
const router = useRouter();

const strapiUrl = process.env.VUE_APP_STRAPI_URL;
const isHoveredArrow = ref(false);
</script>

<template>
    <div class="item">
        <div class="w-full rounded-t-[50px] bg-slate-400 bg-cover">
            <img
                :src="`${strapiUrl}${url}`"
                class="w-[428px] h-[234px] object-cover rounded-t-[50px]"
            />
        </div>

        <div
            class="px-[30px] pt-3 border-x-[3px] border-b-[3px] border-x-[var(--primary-color)] border-b-[var(--primary-color)] border-t-none rounded-b-[50px]"
        >
            <div>
                <BaseTypography
                    :text="title"
                    :type="isMobile ? 'body2-m' : 'special-body'"
                    color="var(--primary-color)"
                    class="mb-3 min-h-[52px]"
                />

                <div class="h-[6px] rounded w-full bg-[var(--secondary-color)]" />
            </div>

            <div class="flex py-6 items-end">
                <div class="w-full">
                    <BaseTypography
                        :text="text"
                        :type="isMobile ? 'body3-m' : 'body3'"
                        color="var(--black-color)"
                        class="l:min-h-20"
                    />

                    <div class="flex">
                        <div
                            v-if="price"
                            class="mt-3"
                        >
                            <BaseTypography
                                :text="price.toString()"
                                :type="isMobile ? 'body-m' : 'special-body2'"
                                tag="span"
                                color="var(--secondary-color)"
                            />

                            <BaseTypography
                                :text="t('common.people')"
                                :type="isMobile ? 'body-m' : 'special-body2'"
                                tag="span"
                            />
                        </div>

                        <div class="ml-auto w-[46px] h-[46px] cursor-pointer">
                            <img
                                v-if="isMobile"
                                src="@/assets/svg/mobile/shevron_right.svg"
                                class="ml-auto"
                            />

                            <img
                                v-else
                                :src="isHoveredArrow ? arrowRightGreen : arrowRight"
                                class="ml-auto"
                                @mouseover="isHoveredArrow = true"
                                @mouseleave="isHoveredArrow = false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    position: relative;
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 900px) {
    .item {
        width: 428px;
        height: 455px;
    }
}
</style>
