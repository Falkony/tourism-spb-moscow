<script lang="ts" setup>
import MarkdownIt from 'markdown-it';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { defineProps } from 'vue';

const props = defineProps<{
    tour: any;
}>();

const md = new MarkdownIt();

const strapiUrl = process.env.VUE_APP_STRAPI_URL;
</script>

<template>
    <div
        class="relative flex flex-wrap gap-x-[45px] gap-y-[30px] items-center px-[20px] max-w-[1126px] mx-auto w-full mb-[104px]"
    >
        <!-- Day 1 -->
        <div class="block px-10 py-6">
            <div class="flex flex-col gap-y-3 w-full">
                <BaseTypography
                    :text="tour?.data.attributes.tourDescription[0].title"
                    type="special-body"
                    color="var(--primary-color)"
                />

                <div
                    class="pl-5"
                    v-html="tour ? md.render(props.tour?.data.attributes.tourDescription[0].dayDescription) : ''"
                />
            </div>
        </div>

        <div class="circle">
            <img
                :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[0].attributes.url}`"
                class="size-[148px] object-cover rounded-full"
            />
        </div>

        <div class="circle">
            <img
                :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[1].attributes.url}`"
                class="size-[148px] object-cover rounded-full"
            />
        </div>

        <!-- Day 2 -->
        <div class="block px-10 py-6">
            <div class="flex flex-col gap-y-3 w-full">
                <BaseTypography
                    :text="tour?.data.attributes.tourDescription[1].title"
                    type="special-body"
                    color="var(--primary-color)"
                />

                <div
                    class="pl-5"
                    v-html="tour ? md.render(props.tour?.data.attributes.tourDescription[1].dayDescription) : ''"
                />
            </div>
        </div>

        <div class="flex gap-x-[45px] mr-[150px] ml-auto items-center flex-row-reverse justify-end">
            <div class="circle">
                <img
                    :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[2].attributes.url}`"
                    class="size-[148px] object-cover rounded-full"
                />
            </div>

            <div class="circle">
                <img
                    :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[3].attributes.url}`"
                    class="size-[148px] object-cover rounded-full"
                />
            </div>

            <!-- Day 3 -->
            <div class="block px-10 py-6">
                <div class="flex flex-col gap-y-3 w-full">
                    <BaseTypography
                        :text="tour?.data.attributes.tourDescription[2].title"
                        type="special-body"
                        color="var(--primary-color)"
                    />

                    <div
                        class="pl-5"
                        v-html="tour ? md.render(props.tour?.data.attributes.tourDescription[2].dayDescription) : ''"
                    />
                </div>
            </div>
        </div>

        <div class="w-[250px]"></div>

        <div class="circle mt-[20px]">
            <img
                :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[4].attributes.url}`"
                class="size-[148px] object-cover rounded-full"
            />
        </div>

        <div class="circle mt-[20px]">
            <img
                :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[5].attributes.url}`"
                class="size-[148px] object-cover rounded-full"
            />
        </div>

        <!-- Day 4 -->
        <div class="block px-10 py-6 mt-[20px] !h-[222px]">
            <div class="flex flex-col gap-y-3 w-full">
                <BaseTypography
                    :text="tour?.data.attributes.tourDescription[3].title"
                    type="special-body"
                    color="var(--primary-color)"
                />

                <div
                    class="pl-5"
                    v-html="tour ? md.render(props.tour?.data.attributes.tourDescription[3].dayDescription) : ''"
                />
            </div>
        </div>

        <div class="flex gap-x-[45px] mr-[150px] ml-auto items-center flex-row-reverse justify-end">
            <div class="circle mt-[86px]">
                <img
                    :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[6].attributes.url}`"
                    class="size-[148px] object-cover rounded-full"
                />
            </div>

            <div class="circle mt-[86px]">
                <img
                    :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[7].attributes.url}`"
                    class="size-[148px] object-cover rounded-full"
                />
            </div>

            <div class="circle mt-[86px]">
                <img
                    :src="`${strapiUrl}${tour?.data.attributes.tourImgs.data[8].attributes.url}`"
                    class="size-[148px] object-cover rounded-full"
                />
            </div>

            <!-- Day 5 -->
            <div class="block px-10 py-6 mt-[86px] !h-[170px]">
                <div class="flex flex-col gap-y-3 w-full">
                    <BaseTypography
                        :text="tour?.data.attributes.tourDescription[4].title"
                        type="special-body"
                        color="var(--primary-color)"
                    />

                    <div
                        class="pl-5"
                        v-html="tour ? md.render(props.tour?.data.attributes.tourDescription[4].dayDescription) : ''"
                    />
                </div>
            </div>
        </div>

        <img
            src="@/assets/svg/curved-right.svg"
            class="absolute top-[150px] left-[150px]"
        />

        <img
            src="@/assets/svg/curved-left.svg"
            class="absolute top-[466px] left-0"
        />

        <img
            src="@/assets/svg/curved-right.svg"
            class="absolute top-[783px] left-[150px]"
        />
    </div>
</template>

<style scoped>
.block {
    @apply relative z-10 h-[300px] w-[300px] rounded-[50px] border-[3px] border-[var(--primary-color)] bg-[var(--base-white)];
}

.circle {
    @apply h-[148px] w-[148px] rounded-full bg-slate-200 z-10;
}

.circle > img {
    object-fit: cover;
    display: block;
    width: 100%;
}

ol {
    list-style-type: disc;
}
</style>
