<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import Form from './Form.vue';

const router = useRouter();
const route = useRoute();

const toggle = ref<boolean>(false);

const toggleForm = () => (toggle.value = !toggle.value);

const title = computed(() => history.state?.title);
const isSpb = computed(() => route.params.slug === 'spb');
</script>

<template>
    <div class="mt-[223px] mb-[104px]">
        <BaseReturn :text="title" />

        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-col justify-center items-center text-center mb-10 px-10">
                <BaseTypography
                    text="Вы можете выбрать уже готовую программу или отправить заявку на персональную программу, которую мы составим в соответствии с вашими желаниями."
                    type="subtitle3-m"
                />
            </div>

            <div class="flex justify-center items-center p-[10px] mb-[60px]">
                <BaseButton
                    text="Оставить заявку"
                    type="subtitle4-m"
                    ui="primary-with-back"
                    padding-x="61"
                    padding-y="18"
                    color="var(--base-white)"
                    @click="toggleForm"
                />
            </div>

            <div
                class="show fixed inset-0 z-30"
                v-if="toggle"
            >
                <Form @close="toggleForm" />
            </div>

            <div
                v-if="isSpb"
                class="flex flex-col gap-y-[76px]"
            >
                <div
                    class="px-6"
                    @click="
                        router.push({
                            name: 'tour',
                            params: {
                                slug: 'spb',
                                id: '1',
                            },
                            state: {
                                title: 'Туры в Санкт-Петербург',
                            },
                        })
                    "
                >
                    <div class="grid grid-cols-[12px_auto] items-center gap-x-3 mb-6">
                        <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                        <div class="flex flex-col">
                            <BaseTypography
                                text="Бессмертная классика"
                                type="subtitle2-m"
                                color="var(--primary-color)"
                                class="mb-3"
                            />

                            <BaseLine width="299" />
                        </div>
                    </div>

                    <div class="pl-6 mb-6">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[24.5px] py-[10px] w-fit"
                        >
                            <BaseTypography
                                text="5 дней"
                                type="subtitle2-m"
                                class="whitespace-nowrap"
                            />
                        </div>
                    </div>

                    <div class="pl-6 pr-8 relative">
                        <BaseTypography
                            text="Знакомство с Санкт-Петербургом: обзор знаковых музеев и дворцов, которые никого не оставят равнодушным."
                            type="body3-m"
                        />

                        <img
                            src="@/assets/svg/mobile/shevron_right.svg"
                            class="absolute bottom-0 right-0 cursor-pointer"
                        />
                    </div>
                </div>

                <div class="px-6">
                    <div class="grid grid-cols-[12px_auto] items-center gap-x-3 mb-6">
                        <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                        <div class="flex flex-col">
                            <BaseTypography
                                text="Для опытных туристов"
                                type="subtitle2-m"
                                color="var(--primary-color)"
                                class="mb-3"
                            />

                            <BaseLine width="299" />
                        </div>
                    </div>

                    <div class="pl-6 mb-6">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[24.5px] py-[10px] w-fit"
                        >
                            <BaseTypography
                                text="5 дней"
                                type="subtitle2-m"
                                class="whitespace-nowrap"
                            />
                        </div>
                    </div>

                    <div class="pl-6 pr-8 relative">
                        <BaseTypography
                            text="В Санкт-Петербурге  всегда есть на что посмотреть! Даже завсегдатай города найдет для себя, что посмотреть."
                            type="body3-m"
                        />

                        <img
                            src="@/assets/svg/mobile/shevron_right.svg"
                            class="absolute bottom-0 right-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div v-else>
                <BaseTypography
                    text="Страница в разработке"
                    type="subtitle2-m"
                />
            </div>
        </div>
    </div>
</template>
