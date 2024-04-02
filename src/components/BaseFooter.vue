<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import BaseTypography from './common/BaseTypography.vue';
import { useI18n } from 'vue-i18n';
import BaseButton from './common/BaseButton.vue';

const { width } = useWindowSize();
const { t } = useI18n();

const currentYear = new Date().getFullYear();

const links = computed(() => [
    {
        url: '/about',
        text: t('footer.links.about'),
    },
    {
        url: '/tours',
        text: t('footer.links.tours'),
    },
    {
        url: '/excursions',
        text: t('footer.links.excursions'),
    },
    {
        url: '/how',
        text: t('footer.links.how'),
    },
    {
        url: '/policy',
        text: t('footer.links.policy'),
    },
    {
        url: '/agents',
        text: t('footer.links.agents'),
    },
]);
</script>

<template>
    <footer>
        <div class="contacts mb-[60px] l:px-[216px] justify-center">
            <BaseButton
                v-if="width > 1024"
                :text="t('footer.contacts')"
                type="body2"
                color="var(--primary-color)"
                ui="primary"
            />

            <div
                v-if="width < 1024"
                class="flex flex-row gap-x-4"
            >
                <a href="#">
                    <img
                        src="@/assets/svg/telegram.svg"
                        :class="{ svg: width >= 768, 'w-7': width < 768 }"
                    />
                </a>

                <a href="#">
                    <img
                        src="@/assets/svg/vk.svg"
                        :class="{ svg: width >= 768, 'w-7': width < 768 }"
                    />
                </a>
            </div>

            <div class="flex flex-col xxl:flex-row items-center gap-x-3">
                <a
                    href="tel:+78122070350"
                    class="flex flex-row items-center"
                >
                    <img
                        src="@/assets/svg/icon_call.svg"
                        :class="{ 'order-2 w-7': width < 768, svg: width > 768 }"
                    />

                    <div class="px-[15px] py-[10px]">
                        <BaseTypography
                            text="+7 (812) 207-03-50"
                            :type="width < 768 ? 'body-m' : 'body'"
                        />
                    </div>
                </a>

                <a
                    href="tel:+79112660098"
                    class="flex flex-row items-center"
                >
                    <img
                        src="@/assets/svg/whatsapp.svg"
                        :class="{ 'order-2 w-7': width < 768, svg: width > 768 }"
                    />

                    <div class="px-[15px] py-[10px]">
                        <BaseTypography
                            text="+7 (911) 266-00-98"
                            :type="width < 768 ? 'body-m' : 'body'"
                        />
                    </div>
                </a>
            </div>
        </div>

        <ul
            class="flex flex-col gap-y-5 px-10 mb-12 l:flex-row l:flex-wrap l:gap-x-9 l:px-[216px] l:py-[20px] l:mb-[20px] l:justify-center"
        >
            <li
                v-for="link in links"
                :key="link.url"
            >
                <router-link :to="link.url">
                    <BaseTypography
                        :text="link.text"
                        :type="width < 768 ? 'body-m' : 'footnote'"
                    />
                </router-link>
            </li>
        </ul>

        <div
            v-if="width > 1024"
            class="flex flex-row gap-x-6 px-[216px] mb-[60px]"
        >
            <a href="#">
                <img
                    src="@/assets/svg/telegram.svg"
                    class="svg"
                />
            </a>

            <a href="#">
                <img
                    src="@/assets/svg/vk.svg"
                    class="svg"
                />
            </a>
        </div>

        <div class="flex flex-col justify-center items-center l:flex-row l:px-[216px] l:mb-[60px]">
            <div class="flex flex-row gap-x-10 mb-6 l:gap-x-12 l:mb-0">
                <img
                    src="@/assets/images/league.png"
                    class="w-[121px] m:w-auto"
                />
                <img
                    src="@/assets/images/touroperators.png"
                    class="w-[121px] m:w-auto"
                />
            </div>

            <div
                v-if="width < 1024"
                class="flex flex-row gap-x-5 mb-10"
            >
                <img
                    src="@/assets/images/mir.png"
                    class="w-[46px] m:h-9 m:w-auto"
                />

                <img
                    src="@/assets/images/visa.png"
                    class="w-[46px] m:h-9 m:w-auto"
                />

                <img
                    src="@/assets/images/mastercard.png"
                    class="w-[46px] m:h-9 m:w-auto"
                />
            </div>

            <div class="p-[10px] l:ml-auto l:p-0 l:mb-0">
                <BaseTypography
                    text="ОГРН 1157847393373"
                    :type="width < 1024 ? 'body-m' : 'footnote'"
                    color="var(--grey-color)"
                />

                <BaseTypography
                    text="ИНН 7840042552"
                    :type="width < 1024 ? 'body-m' : 'footnote'"
                    color="var(--grey-color)"
                />
            </div>
        </div>

        <div class="flex flex-col justify-center items-center mb-6 l:flex-row l:px-[216px] l:mb-[60px]">
            <div class="p-[10px] order-2 m:-order-1">
                <BaseTypography
                    :text="`Copyright © Туроператор “РВМ”, ${currentYear}`"
                    :type="width < 1024 ? 'body-m' : 'footnote'"
                    color="var(--grey-color)"
                />
            </div>

            <div
                v-if="width > 1024"
                class="flex flex-row gap-x-5 l:ml-auto order-0 l:-order-none"
            >
                <img
                    src="@/assets/images/mir.png"
                    class="w-[46px] l:h-9 l:w-auto"
                />

                <img
                    src="@/assets/images/visa.png"
                    class="w-[46px] l:h-9 l:w-auto"
                />

                <img
                    src="@/assets/images/mastercard.png"
                    class="w-[46px] l:h-9 l:w-auto"
                />
            </div>
        </div>
    </footer>
</template>

<style scoped>
.contacts {
    border-top: 3px solid var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
    @apply flex flex-row gap-x-10 py-4 mt-10 items-center l:gap-x-[152px] l:py-10 l:mt-0;
}

.svg {
    height: 46px;
    width: 46px;
}
</style>
