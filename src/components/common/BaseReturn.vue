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

const onNavigate = async (path: string) => router.push({ path });

const goBack = () => {
    const currentRoute = router.currentRoute.value.path;
    const rootPath = '/';

    if (currentRoute === rootPath) {
        return;
    }

    const newPath = currentRoute.substring(0, currentRoute.lastIndexOf('/'));

    const finalPath = newPath !== '' ? newPath : rootPath;

    return onNavigate(finalPath);
};
</script>

<template>
    <div
        class="return"
        @click="goBack()"
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
    @apply relative flex items-start justify-start gap-x-[10px] mb-10 cursor-pointer l:w-full max-w-[1126px] px-4 l:px-6 ml-8 l:mx-auto;
}

.arrow {
    @apply h-[22px] w-[22px] l:h-[43px] l:w-[43px] absolute top-[50%] translate-y-[-50%] left-[-50px] l:left-[-100px];
}

.text {
    @apply relative flex items-center justify-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-9 py-3 w-fit;
}
</style>
