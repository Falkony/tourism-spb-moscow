<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import Form from './Form.vue';
import Map from './Map.vue';

import { useRouter } from 'vue-router';
import BaseTypography from '../common/BaseTypography.vue';

const router = useRouter();
</script>

<template>
    <div class="flex gap-x-[240px] justify-center mt-[40px] mb-[76px] max-w-[1362px] mx-auto">
        <div class="flex flex-col">
            <div class="flex items-center w-full mb-[76px]">
                <div
                    class="pr-[76px] cursor-pointer"
                    @click="router.back()"
                >
                    <img src="@/assets/svg/arrow-left.svg" />
                </div>

                <BaseButton
                    text="Адрес РВМ"
                    type="subtitle"
                    ui="primary"
                    color="var(--black-color)"
                />
            </div>

            <div class="flex gap-x-[260px]">
                <div class="flex flex-col gap-y-5">
                    <div class="flex items-center">
                        <img
                            src="@/assets/svg/icon_location.svg"
                            class="w-[46px]"
                        />

                        <div class="p-[10px]">
                            <BaseTypography
                                text="г. Санкт-Петербург, бизнес центр “СИТИ”,"
                                type="body"
                            />

                            <BaseTypography
                                text="Садовая улица 12, офис 3"
                                type="body"
                            />

                            <BaseTypography
                                text="3 минуты от ст. метро «Гостиный двор»"
                                type="body"
                            />
                        </div>
                    </div>

                    <div class="flex items-center gap-x-3">
                        <a
                            href="tel:+78122070350"
                            class="flex items-center"
                        >
                            <img
                                src="@/assets/svg/icon_call.svg"
                                class="svg"
                            />

                            <div class="px-[15px] py-[10px]">
                                <BaseTypography
                                    text="+7 (812) 207-03-50"
                                    type="body"
                                />
                            </div>
                        </a>

                        <a
                            href="tel:+79112660098"
                            class="flex items-center"
                        >
                            <img
                                src="@/assets/svg/whatsapp.svg"
                                class="svg"
                            />

                            <div class="px-[15px] py-[10px]">
                                <BaseTypography
                                    text="+7 (911) 266-00-98"
                                    type="body"
                                />
                            </div>
                        </a>
                    </div>

                    <div class="flex items-center">
                        <img
                            src="@/assets/svg/icon_mail.svg"
                            class="w-[46px]"
                        />

                        <div class="p-[10px]">
                            <a href="mailto:info@rvm-spb.ru">
                                <BaseTypography
                                    text="info@rvm-spb.ru"
                                    type="footnote"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col">
            <BaseButton
                text="График работы офиса"
                type="subtitle"
                ui="primary"
                color="var(--black-color)"
                class="mb-[76px]"
            />

            <div class="flex flex-col gap-y-4">
                <BaseTypography
                    text="С понедельника по пятницу — с 10:00 до 18:00"
                    type="body"
                />

                <BaseTypography
                    text="В выходные — по предварительной записи"
                    type="body"
                />
            </div>
        </div>
    </div>

    <div class="flex">
        <Map class="w-auto" />

        <div class="w-[800px]">
            <Form />
        </div>
    </div>
</template>

<style scoped></style>
