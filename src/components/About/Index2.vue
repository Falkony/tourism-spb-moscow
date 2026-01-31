<script setup lang="ts">
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="relative mt-10">
        <div class="absolute top-[111px] right-[10px]">
            <img
                src="@/assets/images/mobile/ship.png"
                class="w-[200px]"
            />
        </div>

        <BaseReturn :text="t('about.title')" />

        <div class="flex flex-col gap-y-5 items-center justify-center py-3 max-w-[250px] mx-auto mb-12">
            <BaseTypography
                :text="t('about.text.first')"
                type="body-m"
            />

            <BaseTypography
                :text="t('about.text.second')"
                type="body-m"
            />
        </div>

        <div class="flex flex-col gap-y-5 px-6 mb-[60px]">
            <div class="px-[29px]">
                <BaseTypography
                    :text="t('about.tagline.text-1.first')"
                    type="headline-m"
                    tag="span"
                    color="var(--primary-color)"
                />

                <BaseTypography
                    :text="t('about.tagline.text-1.second')"
                    type="headline2-m"
                    tag="span"
                    color="var(--black-color)"
                />
            </div>

            <div class="px-[52px]">
                <BaseTypography
                    :text="t('about.tagline.text-2.first')"
                    type="headline-m"
                    tag="span"
                    color="var(--primary-color)"
                />

                <BaseTypography
                    :text="t('about.tagline.text-2.second')"
                    type="headline2-m"
                    tag="span"
                    color="var(--black-color)"
                />
            </div>

            <div class="px-[75px]">
                <BaseTypography
                    :text="t('about.tagline.text-3.first')"
                    type="headline-m"
                    tag="span"
                    color="var(--primary-color)"
                />

                <BaseTypography
                    :text="t('about.tagline.text-3.second')"
                    type="headline2-m"
                    tag="span"
                    color="var(--black-color)"
                />
            </div>
        </div>

        <div class="flex flex-col justify-center items-center">
            <img
                src="@/assets/images/veles.png"
                class="w-[101px] mb-12"
            />
        </div>

        <div class="flex flex-col items-center justify-center gap-y-8 mb-12">
            <div
                class="h-[112px] w-[116px] flex flex-col items-center justify-center border border-[var(--primary-color)] rounded-full px-[10px]"
            >
                <img
                    src="@/assets/svg/about/10.svg"
                    class="w-10"
                />

                <div class="text-center">
                    <BaseTypography
                        :text="t('about.labels.years')"
                        type="body3-m"
                    />
                </div>
            </div>

            <div
                class="h-[132px] w-[148px] flex flex-col items-center justify-center border border-[var(--primary-color)] rounded-full px-[10px]"
            >
                <img
                    src="@/assets/svg/about/3.svg"
                    class="w-10"
                />

                <div class="text-center">
                    <BaseTypography
                        :text="t('about.labels.direction')"
                        type="body3-m"
                    />
                </div>
            </div>

            <div
                class="h-[140px] w-[156px] flex flex-col items-center justify-center border border-[var(--primary-color)] rounded-full px-[10px]"
            >
                <img
                    src="@/assets/svg/about/100.svg"
                    class="w-[100px]"
                />

                <div class="text-center">
                    <BaseTypography
                        :text="t('about.labels.success')"
                        type="body3-m"
                    />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-y-6 px-[56px] py-4 mb-12">
            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div class="h-6 w-6 bg-[var(--secondary-color)] rounded-full" />

                <div class="max-w-[250px]">
                    <BaseTypography
                        :text="t('about.list.text-1.first')"
                        type="body-m"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-1.second')"
                        type="body2-m"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-1.third')"
                        type="body-m"
                        tag="span"
                    />
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div class="h-6 w-6 bg-[var(--secondary-color)] rounded-full" />

                <div class="max-w-[250px]">
                    <BaseTypography
                        :text="t('about.list.text-2.first')"
                        type="body-m"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-2.second')"
                        type="body2-m"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-2.third')"
                        type="body-m"
                        tag="span"
                    />
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div class="h-6 w-6 bg-[var(--secondary-color)] rounded-full" />

                <div class="max-w-[250px]">
                    <BaseTypography
                        :text="t('about.list.text-3.first')"
                        type="body-m"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('about.list.text-3.second')"
                        type="body2-m"
                        tag="span"
                    />
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div />

                <div class="max-w-[250px]">
                    <router-link to="/categories">
                        <BaseTypography
                            text="туры по Санкт-Петербургу и России,"
                            type="body-m"
                            class="underline"
                        />
                    </router-link>
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div />
                <div class="max-w-[250px]">
                    <router-link to="/excursions">
                        <BaseTypography
                            text="экскурсии и мероприятия (конференции, свадьбы и др.) в Санкт-Петербурге"
                            type="body-m"
                            class="underline"
                        />
                    </router-link>
                </div>
            </div>
        </div>

        <div class="h-[6px] bg-[var(--secondary-color)] mb-[60px]" />

        <div class="px-6 mb-12">
            <div class="flex flex-col">
                <div class="p-3 mb-12">
                    <BaseTypography
                        :text="t('about.guarantee.title')"
                        type="subtitle-m"
                    />
                </div>

                <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] py-[20px] mb-12">
                    <div class="flex items-center justify-center">
                        <BaseTypography
                            :text="t('about.guarantee.clients.title')"
                            type="body-m"
                            color="var(--primary-color)"
                        />
                    </div>

                    <div class="py-[10px] pl-[60px] pr-[40px]">
                        <ul class="list-disc">
                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.clients.first')"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.clients.second')"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.clients.third')"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.clients.fourth')"
                                    type="body3-m"
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] py-[20px]">
                    <div class="flex items-center justify-center">
                        <BaseTypography
                            :text="t('about.guarantee.partners.title')"
                            type="body-m"
                            color="var(--primary-color)"
                        />
                    </div>

                    <div class="py-[10px] pl-[60px] pr-[40px]">
                        <ul class="list-disc">
                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.partners.first')"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.partners.second')"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.partners.third')"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    :text="t('about.guarantee.partners.fourth')"
                                    type="body3-m"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="flex flex-col px-6">
                <div class="p-3 mb-12">
                    <BaseTypography
                        :text="t('about.team.title')"
                        type="subtitle-m"
                    />
                </div>
            </div>

            <div
                class="relative flex flex-col items-center justify-center gap-y-10 px-[52px] py-[50px] bg-[var(--primary-color)] w-full mb-[64px]"
            >
                <!-- 1 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/adamovich.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                :text="t('about.team.first.post')"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            :text="t('about.team.first.name')"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>

                <!-- 2 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/mosk.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                :text="t('about.team.second.post')"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            :text="t('about.team.second.name')"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
                <!-- 3 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/sved.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                :text="t('about.team.third.post')"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            :text="t('about.team.third.name')"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
                <!-- 4 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/nefed.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                :text="t('about.team.fourth.post')"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            :text="t('about.team.fourth.name')"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col px-6">
            <div class="p-3 mb-12">
                <BaseTypography
                    :text="t('about.awards.title')"
                    type="subtitle-m"
                />
            </div>

            <div class="grid grid-cols-2 items-center gap-x-6 gap-y-6 mb-[64px] justify-items-center">
                <img
                    src="@/assets/images/about/aword_1.png"
                    class="w-[116px]"
                />
                <img
                    src="@/assets/images/about/aword_2.png"
                    class="w-[116px]"
                />
                <img
                    src="@/assets/images/about/aword_3.png"
                    class="w-[116px] col-span-2"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
