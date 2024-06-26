<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/global';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import Form from './Form.vue';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const toggle = ref<boolean>(false);

const toggleForm = () => (toggle.value = !toggle.value);

const title = computed(() => history.state?.title);
const isSpb = computed(() => route.params.slug === 'spb');
const { isMobile } = toRefs(useGlobalStore());
</script>

<template>
    <div class="mt-[223px] mb-[104px]">
        <div
            v-if="toggle"
            class="fixed inset-0 z-30 bg-black/50"
        />

        <BaseReturn
            :text="title"
            class="!px-10"
        />

        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-col justify-center items-center text-center mb-10 px-10 l:max-w-[1126px] l:mx-auto">
                <BaseTypography
                    :text="t('tours.general.subtext')"
                    :type="isMobile ? 'subtitle3-m' : 'subtitle3'"
                />
            </div>

            <div class="flex justify-center items-center p-[10px] mb-[60px]">
                <BaseButton
                    :text="t('tours.general.submit')"
                    :type="isMobile ? 'subtitle4-m' : 'subtitle4'"
                    ui="primary-with-back"
                    padding-x="61"
                    padding-y="18"
                    color="var(--base-white)"
                    @click="toggleForm"
                />
            </div>

            <div
                class="show fixed inset-0 z-30 l:top-[30%] l:left-[50%] l:translate-x-[-50%] l:translate-y-[-30%]"
                v-if="toggle"
            >
                <Form @close="toggleForm" />
            </div>

            <div
                v-if="isSpb && isMobile"
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
                                title: t('tours.first.title'),
                            },
                        })
                    "
                >
                    <div class="grid grid-cols-[12px_auto] items-center gap-x-3 mb-6">
                        <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                        <div class="flex flex-col">
                            <BaseTypography
                                :text="t('tours.general.spb.title-1')"
                                :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
                                color="var(--primary-color)"
                                class="mb-3"
                            />

                            <BaseLine :width="isMobile ? '299' : '757'" />
                        </div>
                    </div>

                    <div class="pl-6 mb-6">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[24.5px] py-[10px] w-fit"
                        >
                            <BaseTypography
                                :text="t('tours.general.spb.days')"
                                :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
                                class="whitespace-nowrap"
                            />
                        </div>
                    </div>

                    <div class="pl-6 pr-8 relative">
                        <BaseTypography
                            :text="t('tours.general.spb.text-1')"
                            :type="isMobile ? 'body3-m' : 'body3'"
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
                                :text="t('tours.general.spb.title-2')"
                                :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
                                color="var(--primary-color)"
                                class="mb-3"
                            />

                            <BaseLine :width="isMobile ? '299' : '757'" />
                        </div>
                    </div>

                    <div class="pl-6 mb-6">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[24.5px] py-[10px] w-fit"
                        >
                            <BaseTypography
                                :text="t('tours.general.spb.days')"
                                :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
                                class="whitespace-nowrap"
                            />
                        </div>
                    </div>

                    <div class="pl-6 pr-8 relative">
                        <BaseTypography
                            :text="t('tours.general.spb.text-2')"
                            :type="isMobile ? 'body3-m' : 'body3'"
                        />

                        <img
                            src="@/assets/svg/mobile/shevron_right.svg"
                            class="absolute bottom-0 right-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div
                v-if="isSpb && !isMobile"
                class="flex flex-col gap-y-[76px]"
            >
                <div
                    class="flex gap-x-[98px]"
                    @click="
                        router.push({
                            name: 'tour',
                            params: {
                                slug: 'spb',
                                id: '1',
                            },
                            state: {
                                title: t('tours.first.title'),
                            },
                        })
                    "
                >
                    <div class="flex gap-x-8">
                        <div class="h-[72px] w-[72px] rounded-full bg-[--secondary-color]" />

                        <div class="w-full max-w-[757px]">
                            <div class="border-b-[3px] border-b-[var(--secondary-color)] mb-10">
                                <BaseTypography
                                    :text="t('tours.general.spb.title-1')"
                                    type="subtitle2"
                                    color="var(--primary-color)"
                                    class="mb-3"
                                />
                            </div>

                            <BaseTypography
                                :text="t('tours.general.spb.text-1')"
                                type="body3"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col items-end">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[35.5px] py-5 mb-10"
                        >
                            <BaseTypography
                                :text="t('tours.general.spb.days')"
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
                                    :text="t('tours.general.spb.title-2')"
                                    type="subtitle2"
                                    color="var(--primary-color)"
                                    class="mb-3"
                                />
                            </div>

                            <BaseTypography
                                :text="t('tours.general.spb.text-2')"
                                type="body3"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col items-end">
                        <div
                            class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[35.5px] py-5 mb-10"
                        >
                            <BaseTypography
                                :text="t('tours.general.spb.days')"
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

            <div v-if="!isSpb">
                <BaseTypography
                    text="Страница в разработке"
                    :type="isMobile ? 'subtitle2-m' : 'subtitle2'"
                />
            </div>
        </div>
    </div>
</template>
