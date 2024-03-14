<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';

import { useI18n } from 'vue-i18n';
import BaseButton from '../common/BaseButton.vue';

const { t } = useI18n();
</script>

<template>
    <section class="header-section">
        <div class="contacts flex justify-end gap-x-10 mr-[214px] mb-[140px]">
            <a href="tel:+79112660098">
                <BaseTypography
                    text="+7 (911) 266-00-98"
                    type="footnote"
                    color="var(--base-white)"
                />
            </a>

            <a href="tel:+78122070350">
                <BaseTypography
                    text="+7 (812) 207-03-50"
                    type="footnote"
                    color="var(--base-white)"
                />
            </a>

            <a href="mailto:info@rvm-spb.ru">
                <BaseTypography
                    text="info@rvm-spb.ru"
                    type="footnote"
                    color="var(--base-white)"
                />
            </a>
        </div>

        <div class="px-[120px]">
            <BaseTypography
                :text="t('main-page.subtitle')"
                type="title2"
                color="var(--base-white)"
                class="mb-3"
            />

            <div class="mb-[140px]">
                <div class="mb-6">
                    <BaseTypography
                        text="Р"
                        type="headline"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="еализуем"
                        type="headline2"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>

                <div class="pl-[56px] mb-6">
                    <BaseTypography
                        text="В"
                        type="headline"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="аши"
                        type="headline2"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>

                <div class="pl-[112px]">
                    <BaseTypography
                        text="М"
                        type="headline"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="ечты"
                        type="headline2"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>
            </div>

            <BaseButton
                text="Оставить заявку"
                type="subtitle4"
                color="var(--base-white)"
                ui="secondary"
            />
        </div>
    </section>

    <section class="flex flex-col items-center justify-center">
        <div class="h-[860px] w-[1126px] mx-auto second-section relative my-[168px]">
            <div class="overlay"></div>
            <div class="horseman"></div>

            <BaseButton
                text="О компании"
                type="subtitle"
                color="var(--black-color)"
                ui="primary"
                class="mb-[108px]"
            />

            <div>
                <div>
                    <BaseTypography
                        text="РВМ - "
                        type="subtitle"
                        tag="span"
                    />

                    <BaseTypography
                        text="туроператор"
                        type="subtitle2"
                        tag="span"
                    />
                </div>

                <BaseTypography
                    text="по международному въездному и"
                    type="subtitle2"
                />

                <BaseTypography
                    text="внутреннему туризму"
                    type="subtitle2"
                />
            </div>
        </div>

        <div class="flex flex-col gap-y-16 mb-[168px]">
            <div class="flex flex-row gap-x-16">
                <div class="flex flex-col gap-y-10">
                    <div class="flex flex-row items-center gap-x-12">
                        <img
                            src="@/assets/svg/account_balance.svg"
                            class="h-[80px] w-[80px]"
                        />

                        <div class="flex flex-row gap-x-4">
                            <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                            <BaseTypography
                                text="Наш номер в Едином Федеральном Реестре Туроператоров – РТО 018270"
                                type="body"
                                class="max-w-[530px]"
                            />
                        </div>
                    </div>

                    <div class="flex flex-row items-center gap-x-12">
                        <img
                            src="@/assets/svg/union.svg"
                            class="h-[80px] w-[80px]"
                        />

                        <div class="flex flex-row gap-x-4">
                            <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                            <BaseTypography
                                text="Являемся членами Лиги туроператоров Санкт-Петербурга"
                                type="body"
                                class="max-w-[530px]"
                            />
                        </div>
                    </div>

                    <div class="flex flex-row items-center gap-x-12">
                        <img
                            src="@/assets/svg/safety.svg"
                            class="h-[80px] w-[80px]"
                        />

                        <div class="flex flex-row gap-x-4">
                            <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                            <BaseTypography
                                text="Имеем прямые договоры с музеями, транспортными компаниями и отелями самых разных категорий. Наши гиды профессиональны и надёжны"
                                type="body"
                                class="max-w-[530px]"
                            />
                        </div>
                    </div>

                    <div class="flex flex-row items-center gap-x-12">
                        <img
                            src="@/assets/svg/credibility.svg"
                            class="h-[80px] w-[80px]"
                        />

                        <div class="flex flex-row gap-x-4">
                            <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                            <BaseTypography
                                text="Соответствуем всем требованиям для участия в тендерах государственных и бюджетных организаций"
                                type="body"
                                class="max-w-[530px]"
                            />
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-y-10">
                    <img src="@/assets/images/tourism.png" />
                    <img src="@/assets/images/league_second.png" />
                </div>
            </div>

            <img
                src="@/assets/svg/arrow.svg"
                class="w-[400px] ml-auto mt-[-22px]"
            />
        </div>
    </section>
</template>

<style scoped>
.header-section {
    background-image: url('@/assets/images/bg-header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ccc;
    width: 100%;
    height: 100vh;
}

.contacts {
    margin-top: 170px;
}

.horseman {
    position: absolute;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/images/bronze_horseman.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    z-index: 30;
    width: 100%;
    height: 100%;
}

.overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent 50%, var(--primary-color) 50%);
    z-index: 20;
}
</style>
