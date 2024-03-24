<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { useRouter } from 'vue-router';

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
    <div class="flex items-center mb-[60px] m:mb-[76px] w-[255px] m:w-full">
        <div
            class="cursor-pointer m:pl-[120px] m:pr-[76px]"
            @click="router.back()"
        >
            <img src="@/assets/svg/arrow-left.svg" />
        </div>

        <BaseButton
            :text="text"
            type="subtitle"
            ui="primary"
            color="var(--black-color)"
        />
    </div>
</template>
