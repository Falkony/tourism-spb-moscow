<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const router = useRouter();
const { t } = useI18n();
</script>

<template>
    <div class="flex items-center w-full mb-[76px] mt-[40px]">
        <div
            class="pl-[120px] pr-[76px] cursor-pointer"
            @click="router.back()"
        >
            <img src="@/assets/svg/arrow-left.svg" />
        </div>

        <BaseButton
            :text="t('about.title')"
            type="subtitle"
            ui="primary"
            color="var(--black-color)"
        />
    </div>

    <div class="flex gap-x-16 max-w-[1126px] mx-auto mb-[104px]">
        <div class="flex flex-col gap-y-[76px]">
            <div class="flex flex-col gap-y-6 w-[523px]">
                <BaseTypography
                    :text="t('about.text.first')"
                    type="body"
                />

                <BaseTypography
                    :text="t('about.text.second')"
                    type="body"
                />
            </div>

            <div>
                <div class="mb-3">
                    <BaseTypography
                        :text="t('about.tagline.text-1.first')"
                        type="title"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        :text="t('about.tagline.text-1.second')"
                        type="title2"
                        tag="span"
                        color="var(--black-color)"
                    />
                </div>

                <div class="pl-[56px] mb-3">
                    <BaseTypography
                        :text="t('about.tagline.text-2.first')"
                        type="title"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        :text="t('about.tagline.text-2.second')"
                        type="title2"
                        tag="span"
                        color="var(--black-color)"
                    />
                </div>

                <div class="pl-[112px]">
                    <BaseTypography
                        :text="t('about.tagline.text-3.first')"
                        type="title"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        :text="t('about.tagline.text-3.second')"
                        type="title2"
                        tag="span"
                        color="var(--black-color)"
                    />
                </div>
            </div>
        </div>

        <img
            src="@/assets/images/about/ship.png"
            class="w-[645px]"
        />
    </div>

    <div class="flex flex-col justify-center items-center max-w-[1126px] mx-auto">
        <img
            src="@/assets/images/veles.png"
            class="w-[101px] mb-[92px]"
        />

        <div
            class="flex flex-row items-center justify-center gap-x-[26px] px-[124px] border-[3px] border-[var(--primary-color)] h-[114px] w-full rounded-[100px] mb-[92px]"
        >
            <div class="flex items-center gap-x-[26px]">
                <img src="@/assets/svg/about/8.svg" />

                <BaseTypography
                    :text="t('about.labels.years')"
                    type="body3"
                />
            </div>

            <div class="flex items-center gap-x-[26px]">
                <img src="@/assets/svg/about/100.svg" />

                <BaseTypography
                    :text="t('about.labels.success')"
                    type="body3"
                />
            </div>

            <div class="flex items-center gap-x-[26px]">
                <img src="@/assets/svg/about/3.svg" />

                <BaseTypography
                    :text="t('about.labels.direction')"
                    type="body3"
                />
            </div>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center max-w-[1126px] mx-auto mb-[92px]">
        <div class="flex flex-col gap-y-10">
            <div class="flex flex-row items-center gap-x-4">
                <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>

                <div>
                    <BaseTypography
                        :text="t('about.list.text-1.first')"
                        type="body"
                        class="max-w-[777px]"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-1.second')"
                        type="body2"
                        class="max-w-[777px]"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-1.third')"
                        type="body"
                        class="max-w-[777px]"
                        tag="span"
                    />
                </div>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>

                <div class="max-w-[777px]">
                    <BaseTypography
                        :text="t('about.list.text-2.first')"
                        type="body"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-2.second')"
                        type="body2"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-2.third')"
                        type="body"
                        tag="span"
                    />
                </div>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>

                <div class="max-w-[777px]">
                    <BaseTypography
                        :text="t('about.list.text-3.first')"
                        type="body"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-3.second')"
                        type="body2"
                        tag="span"
                    />

                    <!-- TODO: добавить ссылки и разбить переводы -->
                    <BaseTypography
                        :text="t('about.list.text-3.third')"
                        type="body"
                        tag="span"
                        class="underline"
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="mb-[104px]">
        <img
            src="@/assets/svg/line-big.svg"
            class="w-[1366px] mx-auto"
        />
    </div>

    <div class="flex flex-col gap-y-[76px] max-w-[1126px] mx-auto">
        <div class="p-3">
            <BaseTypography
                :text="t('about.guarantee.title')"
                type="subtitle"
                color="var(--black-color)"
            />
        </div>

        <div class="flex gap-x-[104px] px-[83px] mb-[104px]">
            <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] w-[428px] py-[20px]">
                <div class="flex items-center justify-center">
                    <BaseTypography
                        :text="t('about.guarantee.clients.title')"
                        type="special-body"
                        color="var(--primary-color)"
                        class="h-[46px]"
                    />
                </div>

                <div class="py-[10px] pl-[60px] pr-[40px]">
                    <ul class="list-disc">
                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.clients.first')"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.clients.second')"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.clients.third')"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.clients.fourth')"
                                type="special-body4"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] w-[428px] py-[20px]">
                <div class="flex items-center justify-center">
                    <BaseTypography
                        :text="t('about.guarantee.partners.title')"
                        type="special-body"
                        color="var(--primary-color)"
                        class="h-[46px]"
                    />
                </div>

                <div class="py-[10px] pl-[60px] pr-[40px]">
                    <ul class="list-disc">
                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.partners.first')"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.partners.second')"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.partners.third')"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                :text="t('about.guarantee.partners.fourth')"
                                type="special-body4"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col max-w-[1366px] mx-auto mb-[104px]">
        <BaseTypography
            :text="t('about.team.title')"
            type="subtitle"
            class="var(--black-color) mb-[76px]"
        />

        <div
            class="relative flex flex-row justify-center gap-x-[79px] px-[52px] py-[50px] bg-[var(--primary-color)] w-full mb-[64px]"
        >
            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/adamovich.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            :text="t('about.team.first.post')"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        :text="t('about.team.first.name')"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/vigovska.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            :text="t('about.team.second.post')"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        :text="t('about.team.second.name')"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/sved.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            :text="t('about.team.third.post')"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        :text="t('about.team.third.name')"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/kritskaia.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            :text="t('about.team.fourth.post')"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        :text="t('about.team.fourth.name')"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>
        </div>

        <!-- ToDo: Возможно в будущем сделают переход -->
        <!-- <img
            src="@/assets/svg/arrow.svg"
            class="w-[400px] ml-auto mt-[-22px]"
        /> -->
    </div>

    <div class="relative flex flex-col max-w-[1126px] mx-auto mb-[104px]">
        <div class="p-3 mb-[104px]">
            <BaseTypography
                :text="t('about.awards.title')"
                type="subtitle"
                color="var(--black-color)"
            />
        </div>

        <div class="flex flex-row flex-wrap justify-center items-center gap-x-[320px] gap-y-9 mb-[64px]">
            <img
                src="@/assets/images/about/aword_1.png"
                class="w-[239px]"
            />
            <img
                src="@/assets/images/about/aword_2.png"
                class="w-[287px]"
            />
            <img
                src="@/assets/images/about/aword_3.png"
                class="w-[207px]"
            />
        </div>

        <!-- ToDo: Возможно в будущем сделают переход -->
        <!-- <img
            src="@/assets/svg/arrow.svg"
            class="w-[400px] ml-auto mt-[-22px]"
        /> -->
    </div>
</template>
