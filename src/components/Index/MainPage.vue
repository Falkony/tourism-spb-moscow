<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';

import { useI18n } from 'vue-i18n';
import BaseButton from '../common/BaseButton.vue';
import Slider from '../common/Slider.vue';

const { t } = useI18n();

const slides = [
    {
        title: 'О чем молчат дворы Васильевского острова',
        text: 'Пешеходная экскурсия',
        price: '750',
    },
    {
        title: 'Путешествие в эпоху Просвещения',
        text: 'Экскурсия в Российскую Национальную Библиотеку',
        price: '900',
    },
    {
        title: 'Путешествие в эпоху Просвещения',
        text: 'Экскурсия в Российскую Национальную Библиотеку',
        price: '900',
    },
    {
        title: 'Путешествие в эпоху Просвещения',
        text: 'Экскурсия в Российскую Национальную Библиотеку',
        price: '900',
    },
];
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

                        <div class="flex flex-row gap-x-4 items-center">
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

                        <div class="flex flex-row gap-x-4 items-center">
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

                        <div class="flex flex-row gap-x-4 items-center">
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

                        <div class="flex flex-row gap-x-4 items-center">
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

    <section class="flex flex-col gap-y-4 items-center mb-[168px]">
        <div class="bridge-wrapper mb-[60px]">
            <div class="bridge-layout"></div>
            <img
                src="@/assets/images/bridge.png"
                class="bridge"
            />
        </div>

        <img
            src="@/assets/images/veles.png"
            class="w-[250px]"
        />
    </section>

    <section class="mb-[168px]">
        <div class="flex flex-col items-center justify-center w-full">
            <div class="p-[10px]">
                <BaseTypography
                    text="Организуем"
                    type="title"
                />
            </div>

            <img src="@/assets/svg/line-small.svg" />

            <div class="p-[10px]">
                <BaseTypography
                    text="туры и экскурсии"
                    type="title"
                />
            </div>

            <img src="@/assets/svg/line-middle.svg" />

            <div class="p-[10px]">
                <BaseTypography
                    text="по Санкт-Петербургу и России"
                    type="title"
                />
            </div>

            <img src="@/assets/svg/line-big.svg" />
        </div>
    </section>

    <section class="flex flex-col items-center justify-center">
        <div class="h-[860px] w-[1126px] mx-auto second-section relative mb-[168px]">
            <BaseButton
                text="Туры"
                type="subtitle"
                color="var(--black-color)"
                ui="primary"
                class="mb-[104px]"
            />

            <div class="px-[100px]">
                <div class="flex flex-row gap-x-16 mb-7">
                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/msk.png" />
                        </div>

                        <BaseTypography
                            text="Москва"
                            type="subtitle2"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/spb.png" />
                        </div>

                        <BaseTypography
                            text="Санкт-Петербург"
                            type="subtitle2"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/russia.png" />
                        </div>

                        <BaseTypography
                            text="Россия"
                            type="subtitle2"
                        />
                    </div>
                </div>

                <img
                    src="@/assets/svg/line-big.svg"
                    class="flex mb-7 mx-auto w-[899px]"
                />

                <div class="flex flex-row gap-x-16 mb-16">
                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/school.png" />
                        </div>

                        <BaseTypography
                            text="Туры для школьников"
                            type="subtitle2"
                            class="text-center"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/medicine.png" />
                        </div>

                        <BaseTypography
                            text="Оздоровительный отдых"
                            type="subtitle2"
                            class="text-center"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/active.png" />
                        </div>

                        <BaseTypography
                            text="Активный отдых"
                            type="subtitle2"
                            class="text-center"
                        />
                    </div>
                </div>

                <img
                    src="@/assets/svg/arrow.svg"
                    class="w-[400px] ml-auto mt-[-22px]"
                />
            </div>
        </div>
    </section>

    <section class="grid grid-cols-3 gap-8 mb-[168px]">
        <img
            src="@/assets/images/admiral.png"
            class="w-full object-cover"
        />
        <img
            src="@/assets/images/smolniy.png"
            class="w-full object-cover"
        />
        <img
            src="@/assets/images/cremlin.png"
            class="w-full object-cover"
        />

        <img
            src="@/assets/images/pushka.png"
            class="w-full object-cover"
        />
        <img
            src="@/assets/images/murmansk.png"
            class="w-full object-cover"
        />
        <img
            src="@/assets/images/ledocol.png"
            class="w-full object-cover"
        />
    </section>

    <section class="mb-[168px]">
        <div class="h-[713px] w-[1126px] mx-auto relative">
            <BaseButton
                text="Экскурсии"
                type="subtitle"
                color="var(--black-color)"
                ui="primary"
                class="mb-[104px]"
            />

            <Slider
                :slides="slides"
                class="mb-16"
            />

            <img
                src="@/assets/svg/arrow.svg"
                class="w-[400px] ml-auto mt-[-22px]"
            />
        </div>
    </section>

    <section class="mb-[168px]">
        <div class="h-[632px] w-[1362px] mx-auto relative">
            <div class="pl-[120px]">
                <BaseButton
                    text="Дополнительные услуги"
                    type="subtitle"
                    color="var(--black-color)"
                    ui="primary"
                    class="mb-[104px]"
                />
            </div>

            <div class="flex flex-row gap-x-[84px]">
                <div class="flex flex-col p-[20px] my-auto">
                    <div class="flex flex-row gap-x-[92px] items-center mb-[112px]">
                        <div class="h-[72px] w-[72px] bg-[var(--secondary-color)] rounded-full"></div>

                        <BaseTypography
                            text="Организация мероприятий"
                            type="subtitle2"
                        />
                    </div>

                    <div class="flex flex-row gap-x-[92px] pl-[124px] items-center">
                        <div class="h-[72px] w-[72px] bg-[var(--secondary-color)] rounded-full"></div>

                        <BaseTypography
                            text="Бронирование отелей"
                            type="subtitle2"
                        />
                    </div>
                </div>

                <div class="flex flex-col p-[20px] gap-y-3">
                    <div class="flex flex-row gap-x-6 pl-[152px] p-[20px]">
                        <div
                            class="flex items-center justify-center h-[140px] w-[136.6px] border-[3px] border-[var(--primary-color)] rounded-full"
                        >
                            <img src="@/assets/svg/dop_1.svg" />
                        </div>
                        <div
                            class="flex items-center justify-center h-[140px] w-[136.6px] border-[3px] border-[var(--primary-color)] rounded-full"
                        >
                            <img src="@/assets/svg/dop_2.svg" />
                        </div>
                        <div
                            class="flex items-center justify-center h-[140px] w-[136.6px] border-[3px] border-[var(--primary-color)] rounded-full"
                        >
                            <img src="@/assets/svg/dop_3.svg" />
                        </div>
                    </div>

                    <div class="flex flex-row gap-x-6 p-[20px]">
                        <div
                            class="flex items-center justify-center h-[140px] w-[136.6px] border-[3px] border-[var(--primary-color)] rounded-full"
                        >
                            <img src="@/assets/svg/dop_4.svg" />
                        </div>
                        <div
                            class="flex items-center justify-center h-[140px] w-[136.6px] border-[3px] border-[var(--primary-color)] rounded-full"
                        >
                            <img src="@/assets/svg/dop_5.svg" />
                        </div>
                        <div
                            class="flex items-center justify-center h-[140px] w-[136.6px] border-[3px] border-[var(--primary-color)] rounded-full"
                        >
                            <img src="@/assets/svg/dop_6.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-[168px]">
        <div class="flex flex-col w-[1126px] mx-auto">
            <div class="flex flex-col items-center justify-center w-full mb-[64px] p-3">
                <div class="p-[10px]">
                    <BaseTypography
                        text="индивидуальный подход"
                        type="title"
                    />
                </div>

                <img
                    src="@/assets/svg/line-big.svg"
                    class="w-[480px]"
                />

                <div class="p-[10px]">
                    <BaseTypography
                        text="профессионализм"
                        type="title"
                    />
                </div>

                <img
                    src="@/assets/svg/line-big.svg"
                    class="w-[377px]"
                />

                <div class="p-[10px]">
                    <BaseTypography
                        text="надежность"
                        type="title"
                    />
                </div>

                <img
                    src="@/assets/svg/line-big.svg"
                    class="w-[289px]"
                />
            </div>

            <div class="flex flex-col items-center justify-center gap-y-12">
                <img src="@/assets/images/logo_btm.png" />

                <BaseButton
                    text="Оставить заявку"
                    type="subtitle4"
                    color="var(--base-white)"
                    ui="primary-with-back"
                />
            </div>
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

.bridge-wrapper {
    position: relative;
    width: 100%;
}

.bridge-layout {
    display: block;
    position: absolute;
    bottom: -60px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, var(--primary-color) 50%);
    z-index: -1;
}

.bridge {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
