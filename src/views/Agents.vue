<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="flex-1 mt-[189px]">
        <div class="flex items-center w-full mb-[76px]">
            <div
                class="pl-[120px] pr-[76px] cursor-pointer"
                @click="router.back()"
            >
                <img src="@/assets/svg/arrow-left.svg" />
            </div>

            <BaseButton
                text="Агентам"
                type="subtitle"
                ui="primary"
                color="var(--black-color)"
            />
        </div>

        <div class="max-w-[1126px] mx-auto">
            <BaseTypography
                text="Страница в разработке"
                type="subtitle2"
            />
        </div>
    </div>
</template>
