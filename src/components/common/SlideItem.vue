<script setup lang="ts">
import { defineProps } from 'vue';
import BaseTypography from './BaseTypography.vue';

defineProps<{
    title: string;
    text: string;
    url: string;
    price?: string;
}>();
</script>

<template>
    <div class="item">
        <div class="h-[234px] w-full rounded-t-[50px] bg-slate-400">
            <img :src="require(`@/assets/images/${url}`)" />
        </div>

        <div
            class="px-[30px] pt-3 border-x-[3px] border-b-[3px] border-x-[var(--primary-color)] border-b-[var(--primary-color)] border-t-none rounded-b-[50px]"
        >
            <div>
                <BaseTypography
                    :text="title"
                    type="special-body"
                    color="var(--primary-color)"
                    class="mb-3"
                />

                <div class="h-[6px] rounded w-full bg-[var(--secondary-color)]" />
            </div>

            <div class="flex py-6 items-end">
                <div class="w-full">
                    <BaseTypography
                        :text="text"
                        type="special-body3"
                        color="var(--black-color)"
                        class="pr-3"
                    />

                    <div
                        v-if="price"
                        class="mt-[40px]"
                    >
                        <BaseTypography
                            text="от "
                            type="special-body2"
                            tag="span"
                        />

                        <BaseTypography
                            :text="price"
                            type="special-body2"
                            tag="span"
                            color="var(--secondary-color)"
                        />

                        <BaseTypography
                            text=" ₽/чел"
                            type="special-body2"
                            tag="span"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-end w-[46px] h-[46px]">
                    <img
                        src="@/assets/svg/arrow-right.svg"
                        class="cursor-pointer ml-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 428px;
}
</style>
