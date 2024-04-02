<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { useGlobalStore } from '@/stores/global';

defineProps<{
    title: string;
    text: string;
    url: string;
    price?: string;
}>();

const { isMobile } = toRefs(useGlobalStore());
</script>

<template>
    <div class="item">
        <div class="w-full rounded-t-[50px] bg-slate-400 bg-cover">
            <img :src="require(`@/assets/images/${url}`)" />
        </div>

        <div
            class="px-[30px] pt-3 border-x-[3px] border-b-[3px] border-x-[var(--primary-color)] border-b-[var(--primary-color)] border-t-none rounded-b-[50px]"
        >
            <div>
                <BaseTypography
                    :text="title"
                    :type="isMobile ? 'body-m' : 'body'"
                    color="var(--primary-color)"
                    class="mb-3"
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

                    <div
                        v-if="price"
                        class="mt-3"
                    >
                        <BaseTypography
                            text="от "
                            :type="isMobile ? 'body2-m' : 'body2'"
                            tag="span"
                        />

                        <BaseTypography
                            :text="price"
                            :type="isMobile ? 'body2-m' : 'body2'"
                            tag="span"
                            color="var(--secondary-color)"
                        />

                        <BaseTypography
                            text=" ₽/чел"
                            :type="isMobile ? 'body2-m' : 'body2'"
                            tag="span"
                        />
                    </div>
                </div>

                <div class="absolute bottom-2 right-4 l:relative w-[46px] h-[46px] cursor-pointer">
                    <img
                        v-if="isMobile"
                        src="@/assets/svg/mobile/shevron_right.svg"
                        class="ml-auto"
                    />

                    <img
                        v-else
                        src="@/assets/svg/arrow-right.svg"
                        class="ml-auto"
                    />
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
</style>
