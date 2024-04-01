<script setup lang="ts">
import { computed } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import Form from './Form.vue';
import Map from './Map.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const mobile = computed(() => width.value < 768);
const typoMobile = computed(() => (mobile.value ? 'body-m' : 'body'));
</script>

<template>
    <div
        class="flex flex-col l:flex-row px-10 l:px-0 l:gap-x-[240px] justify-center l:items-start mt-[40px] mb-[76px] l:max-w-[1362px] l:mx-auto"
    >
        <div class="flex flex-col">
            <BaseReturn text="Адрес РВМ" />

            <div class="flex items-center justify-center">
                <div class="flex flex-col gap-y-3 mb-[60px]">
                    <div class="flex items-center">
                        <img
                            src="@/assets/svg/icon_location.svg"
                            class="w-[27px] l:w-[46px]"
                        />

                        <div class="p-[10px]">
                            <BaseTypography
                                text="г. Санкт-Петербург, бизнес центр “СИТИ”,"
                                :type="typoMobile"
                            />

                            <BaseTypography
                                text="Садовая улица 12, офис 3"
                                :type="typoMobile"
                            />

                            <BaseTypography
                                text="3 минуты от ст. метро «Гостиный двор»"
                                :type="typoMobile"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col gap-y-5 l:flex-row l:items-center gap-x-3">
                        <a
                            href="tel:+78122070350"
                            class="flex items-center"
                        >
                            <img
                                src="@/assets/svg/icon_call.svg"
                                class="w-[27px] l:w-[46px]"
                            />

                            <div class="px-[15px] py-[10px]">
                                <BaseTypography
                                    text="+7 (812) 207-03-50"
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
                text="График работы офиса"
                :type="mobile ? 'subtitle-m' : 'subtitle'"
                ui="primary"
                padding-x="63.5"
                padding-y="11.5"
                color="var(--black-color)"
                class="mb-12"
            />

            <div class="flex flex-col gap-y-4">
                <BaseTypography
                    text="С понедельника по пятницу — с 10:00 до 18:00"
                    :type="typoMobile"
                />

                <BaseTypography
                    text="В выходные — по предварительной записи"
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
