<script setup lang="ts">
import { defineProps } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';

defineProps<{
    text: string;
    list: string[];
    last?: boolean;
}>();
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="border-x-[3px] border-t-[3px] border-[var(--primary-color)] rounded-t-[50px] px-[56px] py-10">
            <BaseTypography
                :text="text"
                type="body-m"
                color="var(--primary-color)"
                class="mb-5"
            />

            <ul class="list-disc pl-5">
                <li
                    v-for="item in list"
                    :key="item"
                >
                    <BaseTypography
                        :text="item"
                        type="body3-m"
                    />
                </li>
            </ul>
        </div>

        <img src="@/assets/images/mobile/vaski.png" />

        <div
            v-if="!last"
            class="flex justify-center mt-[27px]"
        >
            <BaseLine
                width="60"
                class="rotate-90"
            />
        </div>
    </div>
</template>
