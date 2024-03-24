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
        class="grid grid-cols-[22px_auto] items-center gap-x-[10px] mb-10 cursor-pointer"
        @click="router.back()"
    >
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

        <div class="text">
            <BaseTypography
                :text="text"
                :type="width > 768 ? 'subtitle' : 'subtitle-m'"
                class="max-w-[191px] l:max-w-auto"
            />
        </div>
    </div>
</template>

<style scoped>
.arrow {
    @apply h-[22px] w-[22px];
}

.text {
    @apply flex items-center justify-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-9 py-3 w-full;
}
</style>
