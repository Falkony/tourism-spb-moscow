<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import Slider from '@/components/common/Slider.vue';
import Form from '@/components/Index/Form.vue';
import arrow from '@/assets/svg/arrow.svg';
import arrowGreen from '@/assets/svg/arrow-green.svg';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const { width } = useWindowSize();
const { t } = useI18n();
const router = useRouter();

const formToggleTop = ref(false);
const formToggleBottom = ref(false);
const isHoveredArrow = ref(false);

const openFormTop = () => (formToggleTop.value = !formToggleTop.value);
const openFormBottom = () => (formToggleBottom.value = !formToggleBottom.value);

const openLinkInNewTab = (url: string) => {
    window.open(url, '_blank');
};
</script>

<template>
    <section class="header-section">
        <div class="contacts flex justify-end gap-x-10 mr-[214px] l:mt-[120px] xxl:mb-[140px] relative z-20">
            <a href="tel:+79112660098">
                <BaseTypography
                    text="+7 (911) 266-00-98"
                    :type="width > 1600 ? 'footnote' : 'subtitle2-m'"
                    color="var(--base-white)"
                    class="shadow"
                />
            </a>

            <a href="tel:+78122070350">
                <BaseTypography
                    text="+7 (812) 207-03-50"
                    :type="width > 1600 ? 'footnote' : 'subtitle2-m'"
                    color="var(--base-white)"
                    class="shadow"
                />
            </a>

            <a href="mailto:info@rvm-spb.ru">
                <BaseTypography
                    text="info@rvm-spb.ru"
                    :type="width > 1600 ? 'footnote' : 'subtitle2-m'"
                    color="var(--base-white)"
                    class="shadow"
                />
            </a>
        </div>

        <div class="relative z-10 px-[120px]">
            <BaseTypography
                :text="t('main-page.subtitle')"
                type="title2"
                color="var(--base-white)"
                class="mb-3"
            />

            <div class="xl:mb-10 xxl:mb-[120px]">
                <div class="xl:mb-2 xxl:mb-6">
                    <BaseTypography
                        :text="t('main-page.tagline.text-1.first')"
                        :type="width > 1600 ? 'headline' : 'headline2'"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        :text="t('main-page.tagline.text-1.second')"
                        :type="width > 1600 ? 'headline2' : 'title'"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>

                <div class="pl-[56px] xl:mb-2 xxl:mb-6">
                    <BaseTypography
                        :text="t('main-page.tagline.text-2.first')"
                        :type="width > 1600 ? 'headline' : 'headline2'"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        :text="t('main-page.tagline.text-2.second')"
                        :type="width > 1600 ? 'headline2' : 'title'"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>

                <div class="pl-[112px]">
                    <BaseTypography
                        :text="t('main-page.tagline.text-3.first')"
                        :type="width > 1600 ? 'headline' : 'headline2'"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        :text="t('main-page.tagline.text-3.second')"
                        :type="width > 1600 ? 'headline2' : 'title'"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>
            </div>

            <div class="flex flex-col items-center justify-center">
                <BaseButton
                    :text="t('main-page.submit')"
                    :type="width > 1600 ? 'subtitle4' : 'subtitle2-m'"
                    :padding-x="width > 1600 ? 'auto' : '48'"
                    :padding-y="width > 1600 ? 'auto' : '0'"
                    class="!h-[48px] xxl:!h-auto"
                    color="var(--base-white)"
                    ui="primary-with-back"
                    @click="openFormTop"
                />
            </div>
        </div>

        <div
            v-if="formToggleTop"
            class="form box"
        >
            <Form @close="openFormTop" />
        </div>
    </section>

    <section class="flex flex-col items-center justify-center">
        <div class="l:h-[860px] l:w-[1126px] mx-auto second-section relative mt-[84px] mb-[30px]">
            <div class="overlay"></div>
            <div class="horseman"></div>

            <BaseButton
                :text="t('main-page.about.title')"
                type="subtitle"
                color="var(--black-color)"
                ui="primary"
                class="mb-[108px]"
            />

            <div class="mb-[82px]">
                <div>
                    <BaseTypography
                        :text="t('main-page.about.subtext.text-1.first')"
                        type="subtitle"
                        tag="span"
                    />

                    <BaseTypography
                        :text="t('main-page.about.subtext.text-1.second')"
                        type="subtitle2"
                        tag="span"
                    />
                </div>

                <BaseTypography
                    :text="t('main-page.about.subtext.text-2')"
                    type="subtitle2"
                />

                <BaseTypography
                    :text="t('main-page.about.subtext.text-3')"
                    type="subtitle2"
                />
            </div>

            <div class="flex flex-col gap-y-10">
                <div class="flex flex-row items-center gap-x-8">
                    <img
                        src="@/assets/svg/account_balance.svg"
                        class="w-9 h-9 l:h-[80px] l:w-[80px]"
                    />

                    <div class="flex flex-row gap-x-4 items-center">
                        <div class="h-3 w-3 l:h-[25px] l:w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                        <BaseTypography
                            :text="t('main-page.about.register')"
                            type="body4"
                            class="max-w-[400px]"
                        />
                    </div>
                </div>

                <div class="flex flex-row items-center gap-x-8">
                    <img
                        src="@/assets/svg/union.svg"
                        class="w-9 h-9 l:h-[80px] l:w-[80px]"
                    />

                    <div class="flex flex-row gap-x-4 items-center">
                        <div class="h-3 w-3 l:h-[25px] l:w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                        <BaseTypography
                            :text="t('main-page.about.league')"
                            type="body4"
                            class="max-w-[400px]"
                        />
                    </div>
                </div>

                <div class="flex flex-row items-center gap-x-8">
                    <img
                        src="@/assets/svg/safety.svg"
                        class="w-9 h-9 l:h-[80px] l:w-[80px]"
                    />

                    <div class="flex flex-row gap-x-4 items-center">
                        <div class="h-3 w-3 l:h-[25px] l:w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                        <BaseTypography
                            :text="t('main-page.about.safety')"
                            type="body4"
                            class="max-w-[400px]"
                        />
                    </div>
                </div>

                <div class="flex flex-row items-center gap-x-8">
                    <img
                        src="@/assets/svg/credibility.svg"
                        class="w-9 h-9 l:h-[80px] l:w-[80px]"
                    />

                    <div class="flex flex-row gap-x-4 items-center">
                        <div class="h-3 w-3 l:h-[25px] l:w-[25px] bg-[var(--secondary-color)] rounded-full"></div>
                        <BaseTypography
                            :text="t('main-page.about.credibility')"
                            type="body4"
                            class="max-w-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-y-16 mb-[84px] w-[1126px] mx-auto">
            <div class="flex flex-col gap-y-10 w-full">
                <div class="flex flex-row justify-end gap-x-8">
                    <img
                        src="@/assets/images/tourism.png"
                        @click="openLinkInNewTab('https://tourism.gov.ru/reestry/reestr-turoperatorov/show.php')"
                    />

                    <img
                        src="@/assets/images/league_second.png"
                        @click="openLinkInNewTab('https://tourligaspb.ru/team')"
                    />
                </div>
            </div>

            <router-link to="/about">
                <img
                    v-if="width > 768"
                    :src="isHoveredArrow ? arrowGreen : arrow"
                    class="w-[400px] ml-auto mt-[-22px] cursor-pointer"
                    @mouseover="isHoveredArrow = true"
                    @mouseleave="isHoveredArrow = false"
                />
            </router-link>
        </div>
    </section>

    <section class="flex flex-col gap-y-4 items-center mb-[84px]">
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

    <section class="mb-[84px]">
        <div class="flex flex-col items-center justify-center w-full">
            <div class="p-[10px]">
                <BaseTypography
                    :text="t('main-page.fourth-section.first')"
                    type="title"
                />
            </div>

            <img src="@/assets/svg/line-small.svg" />

            <div class="p-[10px]">
                <BaseTypography
                    :text="t('main-page.fourth-section.second')"
                    type="title"
                />
            </div>

            <img src="@/assets/svg/line-middle.svg" />

            <div class="p-[10px]">
                <BaseTypography
                    :text="t('main-page.fourth-section.third')"
                    type="title"
                />
            </div>

            <img src="@/assets/svg/line-big.svg" />
        </div>
    </section>

    <section class="flex flex-col items-center justify-center">
        <div class="h-[860px] w-[1126px] mx-auto second-section relative mb-[168px]">
            <BaseButton
                :text="t('main-page.tours.title')"
                type="subtitle"
                color="var(--black-color)"
                ui="primary"
                class="mb-[104px]"
                @click="router.push('/tours')"
            />

            <div class="px-[100px]">
                <div class="grid grid-cols-3 gap-x-16 mb-7">
                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/spb.png" />
                        </div>

                        <BaseTypography
                            :text="t('main-page.tours.spb')"
                            type="subtitle2"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/russia.png" />
                        </div>

                        <BaseTypography
                            :text="t('main-page.tours.russia')"
                            type="subtitle2"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/globe.png" />
                        </div>

                        <BaseTypography
                            :text="t('main-page.tours.foreign')"
                            type="subtitle2"
                        />
                    </div>
                </div>

                <img
                    src="@/assets/svg/line-big.svg"
                    class="flex mb-7 mx-auto w-[899px]"
                />

                <div class="grid grid-cols-3 gap-x-16 mb-16">
                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/school.png" />
                        </div>

                        <BaseTypography
                            :text="t('main-page.tours.school')"
                            type="subtitle2"
                            class="text-center"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/medicine.png" />
                        </div>

                        <BaseTypography
                            :text="t('main-page.tours.medicine')"
                            type="subtitle2"
                            class="text-center"
                        />
                    </div>

                    <div class="flex flex-col gap-y-[25px] items-center">
                        <div class="p-[52px] border-[3px] rounded-[80px] border-[var(--primary-color)]">
                            <img src="@/assets/images/ships.png" />
                        </div>

                        <BaseTypography
                            :text="t('main-page.tours.water')"
                            type="subtitle2"
                            class="text-center"
                        />
                    </div>
                </div>

                <router-link to="/tours">
                    <img
                        :src="isHoveredArrow ? arrowGreen : arrow"
                        class="w-[400px] ml-auto mt-[-22px] cursor-pointer"
                        @mouseover="isHoveredArrow = true"
                        @mouseleave="isHoveredArrow = false"
                    />
                </router-link>
            </div>
        </div>
    </section>

    <section class="grid grid-cols-3 gap-8 mb-[84px]">
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

    <section class="mb-[84px]">
        <div class="w-[1126px] mx-auto relative">
            <BaseButton
                :text="t('main-page.excursion.title')"
                type="subtitle"
                color="var(--black-color)"
                ui="primary"
                class="mb-[54px]"
                @click="router.push('/excursions')"
            />

            <Slider class="mb-16" />

            <router-link to="/excursions">
                <img
                    :src="isHoveredArrow ? arrowGreen : arrow"
                    class="w-[400px] ml-auto mt-[-22px]"
                    @mouseover="isHoveredArrow = true"
                    @mouseleave="isHoveredArrow = false"
                />
            </router-link>
        </div>
    </section>

    <section class="mb-[84px]">
        <div class="h-[632px] w-[1362px] mx-auto relative">
            <div class="pl-[120px]">
                <BaseButton
                    :text="t('main-page.additional.title')"
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
                            :text="t('main-page.additional.organization')"
                            type="subtitle2"
                        />
                    </div>

                    <div class="flex flex-row gap-x-[92px] pl-[124px] items-center">
                        <div class="h-[72px] w-[72px] bg-[var(--secondary-color)] rounded-full"></div>

                        <BaseTypography
                            :text="t('main-page.additional.reserv')"
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

    <section class="mb-[84px]">
        <div
            class="flex flex-col items-center justify-center w-[1126px] mx-auto bottom_form"
            v-if="formToggleBottom"
        >
            <Form
                class="!border-[3px] !border-[var(--secondary-color)] !rounded-[100px]"
                @close="openFormBottom"
            />
        </div>

        <div
            v-else
            class="flex flex-col w-[1126px] mx-auto"
        >
            <div class="flex flex-col items-center justify-center w-full mb-[64px] p-3">
                <div class="p-[10px] w-[480px] text-center">
                    <BaseTypography
                        :text="t('main-page.ninth-section.first')"
                        type="title"
                        class="mb-2"
                    />

                    <div class="h-[6px] bg-[var(--secondary-color)] rounded"></div>
                </div>

                <div class="p-[10px] w-[377px] text-center">
                    <BaseTypography
                        :text="t('main-page.ninth-section.second')"
                        type="title"
                        class="mb-2"
                    />

                    <div class="h-[6px] bg-[var(--secondary-color)] rounded"></div>
                </div>

                <div class="p-[10px] w-[289px] text-center">
                    <BaseTypography
                        :text="t('main-page.ninth-section.third')"
                        type="title"
                        class="mb-2"
                    />

                    <div class="h-[6px] bg-[var(--secondary-color)] rounded"></div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center gap-y-12">
                <img src="@/assets/images/logo_btm.png" />

                <BaseButton
                    :text="t('main-page.submit')"
                    type="subtitle4"
                    color="var(--base-white)"
                    ui="primary-with-back"
                    @click="openFormBottom"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.header-section {
    background-image: url('@/assets/images/index/header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left 65%;
    background-color: black;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 3;
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
    background: linear-gradient(to right, transparent 70%, var(--primary-color) 30%);
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

.form {
    @apply absolute right-0 top-[50%] translate-y-[-50%] rounded-l-[50%] z-50;
}

.bottom_form {
    animation: 0.5s showform ease-in-out;
}

.box {
    animation: 1s show ease-in-out;
}

.shadow {
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 2em black;
}

@keyframes showform {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}

@keyframes show {
    from {
        opacity: 0;
        transform: translateX(100%) translateY(-50%);
    }
    to {
        transform: translateX(0) translateY(-50%);
        opacity: 1;
    }
}
</style>
