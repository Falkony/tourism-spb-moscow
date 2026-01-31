<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useWindowSize } from '@vueuse/core';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import Form from './Form.vue';
import Map from './Map.vue';

const { width } = useWindowSize();
const { t } = useI18n();

const mobile = computed(() => width.value < 768);
const typoMobile = computed(() => (mobile.value ? 'body-m' : 'body'));
</script>

<template>
    <div
        class="flex flex-col l:flex-row px-10 l:px-0 l:gap-x-[240px] justify-center l:items-start mt-[40px] mb-[76px] l:max-w-[1362px] l:mx-auto"
    >
        <div class="flex flex-col">
            <BaseReturn :text="t('contacts.title')" />

            <div class="flex items-center justify-center">
                <div class="flex flex-col gap-y-3 mb-[60px]">
                    <div class="flex items-center">
                        <img
                            src="@/assets/svg/icon_location.svg"
                            class="w-[27px] l:w-[46px]"
                        />

                        <div class="p-[10px]">
                            <BaseTypography
                                :text="t('contacts.address.first')"
                                :type="typoMobile"
                            />

                            <BaseTypography
                                :text="t('contacts.address.second')"
                                :type="typoMobile"
                            />

                            <BaseTypography
                                :text="t('contacts.address.third')"
                                :type="typoMobile"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col gap-y-5 l:flex-row l:items-center gap-x-3">
                        <a
                            href="mailto:reserv@rvm-spb.ru"
                            class="flex items-center"
                        >
                            <img
                                src="@/assets/svg/icon_mail.svg"
                                class="w-[27px] l:w-[46px]"
                            />

                            <div class="px-[15px] py-[10px]">
                                <BaseTypography
                                    text="reserv@rvm-spb.ru"
                                    :type="typoMobile"
                                />
                            </div>
                        </a>

                        <a
                            href="tel:+79112660098"
                            class="flex items-center"
                        >
                            <img
                                src="@/assets/svg/whatsapp.svg"
                                class="w-[27px] l:w-[46px]"
                            />

                            <div class="px-[15px] py-[10px]">
                                <BaseTypography
                                    text="+7 (911) 266-00-98"
                                    :type="typoMobile"
                                />
                            </div>
                        </a>
                    </div>

                    <div class="flex items-center">
                        <img
                            src="@/assets/svg/icon_mail.svg"
                            class="w-[27px] l:w-[46px]"
                        />

                        <div class="p-[10px]">
                            <a href="mailto:info@rvm-spb.ru">
                                <BaseTypography
                                    text="info@rvm-spb.ru"
                                    :type="typoMobile"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center flex-col">
            <BaseButton
                :text="t('contacts.subtitle')"
                :type="mobile ? 'subtitle-m' : 'subtitle'"
                ui="primary"
                padding-x="63.5"
                padding-y="11.5"
                color="var(--black-color)"
                class="mb-12"
            />

            <div class="flex flex-col gap-y-4">
                <BaseTypography
                    :text="t('contacts.schedule.first')"
                    :type="typoMobile"
                />

                <BaseTypography
                    :text="t('contacts.schedule.second')"
                    :type="typoMobile"
                />
            </div>
        </div>
    </div>

    <div class="flex flex-col l:grid l:grid-cols-[auto_800px] gap-y-[60px] l:mb-[104px]">
        <Map class="m:h-[600px] w-full" />
        <Form class="l:h-[600px] l:w-[800px]" />
    </div>
</template>
