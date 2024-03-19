<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import BaseTypography from './BaseTypography.vue';

defineProps<{
    text: string;
}>();

const router = useRouter();
</script>

<template>
    <div
        class="flex gap-x-[76px] cursor-pointer"
        @click="router.back()"
    >
        <div>
            <img src="@/assets/svg/arrow-left.svg" />
        </div>

        <div class="max-w-[533px]">
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
