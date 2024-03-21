<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseTypography from '../common/BaseTypography.vue';

const router = useRouter();

const title = computed(() => history.state?.title);
</script>

<template>
    <div class="mt-[179px] mb-[104px]">
        <div class="flex items-center w-full mb-[76px]">
            <div
                class="pl-[120px] pr-[76px] cursor-pointer"
                @click="router.back()"
            >
                <img src="@/assets/svg/arrow-left.svg" />
            </div>

            <BaseButton
                :text="title"
                type="subtitle"
                ui="primary"
                color="var(--black-color)"
            />
        </div>

        <div class="max-w-[1126px] mx-auto w-full items-center justify-center">
            <div class="flex flex-col justify-center items-center mb-[52px]">
                <BaseTypography
                    text="Вы можете выбрать уже готовую программу или отправить заявку на персональную"
                    type="subtitle3"
                />

                <BaseTypography
                    text="программу, которую мы составим в соответствии с вашими желаниями."
                    type="subtitle3"
                />

                <BaseTypography
                    text="Постройте свой идеальный отдых!"
                    type="subtitle3"
                />
            </div>

            <div class="flex justify-center items-center py-[10px] mb-[104px]">
                <BaseButton
                    text="Оставить заявку"
                    type="subtitle4"
                    ui="primary-with-back"
                    color="var(--base-white)"
                />
            </div>

            <div class="flex flex-col gap-y-[76px]">
                <div class="flex gap-x-[98px]">
                    <div class="flex gap-x-8">
                        <div class="h-[72px] w-[72px] rounded-full bg-[--secondary-color]" />

                        <div class="w-full max-w-[757px]">
                            <div class="border-b-[3px] border-b-[var(--secondary-color)] mb-10">
                                <BaseTypography
                                    text="Бессмертная классика"
                                    type="subtitle2"
                                    color="var(--primary-color)"
                                    class="mb-3"
                                />
                            </div>

                            <BaseTypography
                                text="Знакомство с Санкт-Петербургом: обзор знаковых музеев и дворцов, которые никого не оставят равнодушным."
                                type="body3"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col items-end">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[35.5px] py-5 mb-10"
                        >
                            <BaseTypography
                                text="5 дней"
                                type="subtitle2"
                                class="whitespace-nowrap"
                            />
                        </div>

                        <img
                            src="@/assets/svg/arrow-right.svg"
                            class="w-[43px] cursor-pointer"
                        />
                    </div>
                </div>

                <div class="flex gap-x-[98px]">
                    <div class="flex gap-x-8">
                        <div class="h-[72px] w-[72px] rounded-full bg-[--secondary-color]" />

                        <div class="w-full max-w-[757px]">
                            <div class="border-b-[3px] border-b-[var(--secondary-color)] mb-10">
                                <BaseTypography
                                    text="Для опытных туристов"
                                    type="subtitle2"
                                    color="var(--primary-color)"
                                    class="mb-3"
                                />
                            </div>

                            <BaseTypography
                                text="В Санкт-Петербурге  всегда есть на что посмотреть! Даже завсегдатай города найдет для себя, что посмотреть."
                                type="body3"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col items-end">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[35.5px] py-5 mb-10"
                        >
                            <BaseTypography
                                text="5 дней"
                                type="subtitle2"
                                class="whitespace-nowrap"
                            />
                        </div>

                        <img
                            src="@/assets/svg/arrow-right.svg"
                            class="w-[43px] cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
