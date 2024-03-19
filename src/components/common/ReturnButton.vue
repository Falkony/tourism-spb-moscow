<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps, computed, withDefaults } from 'vue';
import BaseTypography from './BaseTypography.vue';

const props = withDefaults(
    defineProps<{
        text: string;
        maxWidth?: number;
    }>(),
    {
        maxWidth: 533,
    }
);

const router = useRouter();

const dynamicClass = computed(() => ({
    [`max-w-[${props.maxWidth}px]`]: !!props.maxWidth,
}));
</script>

<template>
    <div
        class="flex gap-x-[76px] cursor-pointer"
        @click="router.back()"
    >
        <div>
            <img src="@/assets/svg/arrow-left.svg" />
        </div>

        <div :class="dynamicClass">
            <BaseTypography
                :text="text"
                type="subtitle"
                color="var(--primary-color)"
                class="mb-3"
            />

            <div class="h-[6px] bg-[var(--secondary-color)] rounded-[6px]"></div>
        </div>
    </div>
</template>
