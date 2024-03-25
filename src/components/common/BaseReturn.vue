<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import BaseTypography from './BaseTypography.vue';

const { width } = useWindowSize();

withDefaults(
    defineProps<{
        text?: string;
    }>(),
    {
        text: 'Назад',
    }
);

const router = useRouter();
</script>

<template>
    <div
        class="relative flex justify-center items-center gap-x-[10px] mb-10 cursor-pointer w-full"
        @click="router.back()"
    >
        <div class="text">
            <BaseTypography
                :text="text"
                :type="width > 768 ? 'subtitle' : 'subtitle-m'"
                class="max-w-[191px] l:max-w-auto"
            />

            <div class="arrow">
                <img
                    v-if="width > 768"
                    src="@/assets/svg/arrow-left.svg"
                />

                <img
                    v-else
                    src="@/assets/svg/mobile/shevron-left.svg"
                    class="w-[22px] h-[22px]"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.arrow {
    @apply h-[22px] w-[22px] absolute top-[50%] translate-y-[-50%] left-[-50px];
}

.text {
    @apply relative flex items-center justify-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-9 py-3 w-fit;
}
</style>
