<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { defineProps } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';

defineProps<{
    text: string;
    list: string[];
    last?: boolean;
    img: string;
}>();

const md = new MarkdownIt();

const strapiUrl = process.env.VUE_APP_STRAPI_URL;
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="border-x-[3px] border-t-[3px] border-[var(--primary-color)] rounded-t-[50px] px-[56px] py-10">
            <BaseTypography
                :text="text"
                type="body2-m"
                color="var(--primary-color)"
                class="mb-5"
            />

            <div v-html="list ? md.render(list) : ''" />
        </div>

        <!-- <img src="@/assets/images/mobile/vaski.png" /> -->

        <img
            :src="`${strapiUrl}${img}`"
            class="rounded-b-[50px] h-[125px] object-cover"
        />

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
