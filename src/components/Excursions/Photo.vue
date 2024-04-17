<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    excursion: any;
}>();

const strapiUrl = process.env.VUE_APP_STRAPI_URL;
</script>

<template>
    <div class="flex items-center justify-center h-[486px] w-[769px] relative">
        <div class="pl-[120px]">
            <div class="mt-[43px] h-[443px] w-[649px] relative">
                <div class="h-[363px] w-[469px] bg-[var(--primary-color)]"></div>

                <div class="absolute top-[50%] right-0 translate-y-[-50%]">
                    <img
                        :src="`${strapiUrl}${excursion?.data.attributes.img.data.attributes.url}`"
                        class="w-[585px] h-[363px] object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
