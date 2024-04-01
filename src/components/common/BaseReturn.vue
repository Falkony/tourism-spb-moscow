<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import BaseTypography from './BaseTypography.vue';

withDefaults(
    defineProps<{
        text?: string;
    }>(),
    {
        text: 'Назад',
    }
);

const { width } = useWindowSize();
const router = useRouter();
</script>

<template>
    <div
        class="return"
        @click="router.back()"
    >
        <div class="text">
            <BaseTypography
                :text="text"
                :type="width > 768 ? 'subtitle' : 'subtitle-m'"
                class="max-w-[191px] l:max-w-max"
            />

            <div class="arrow">
                <img
                    v-if="width > 768"
                    src="@/assets/svg/arrow-left.svg"
                />

                <img
                    v-else
                    src="@/assets/svg/mobile/shevron-left.svg"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.return {
    @apply relative flex items-center l:items-start justify-center l:justify-start gap-x-[10px] mb-10 cursor-pointer w-full max-w-[1126px] mx-auto px-4 l:px-6;
}

.arrow {
    @apply h-[22px] w-[22px] l:h-[43px] l:w-[43px] absolute top-[50%] translate-y-[-50%] left-[-50px] l:left-[-100px];
}

.text {
    @apply relative flex items-center justify-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-9 py-3 w-fit;
}
</style>
