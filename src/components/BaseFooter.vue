<script setup lang="ts">
import { computed } from 'vue';
import BaseTypography from './common/BaseTypography.vue';
import LocaleSwitcher from './common/LocaleSwitcher.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const currentYear = new Date().getFullYear();

const links = computed(() => [
    {
        url: '/about',
        text: t('footer.links.about'),
    },
    {
        url: '/about',
        text: t('footer.links.tours'),
    },
    {
        url: '/about',
        text: t('footer.links.excursions'),
    },
    {
        url: '/about',
        text: t('footer.links.how'),
    },
    {
        url: '/about',
        text: t('footer.links.policy'),
    },
    {
        url: '/about',
        text: t('footer.links.agents'),
    },
]);
</script>

<template>
    <footer>
        <div class="contacts mb-[60px] px-[216px] justify-center">
            <div class="py-[20px] px-[66px] border-[3px] border-[--primary-color] rounded-[100px]">
                <BaseTypography
                    :text="t('footer.contacts')"
                    type="body2"
                />
            </div>

            <div class="flex flex-row items-center gap-x-3">
                <a
                    href="tel:+78122070350"
                    class="flex flex-row items-center"
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
                    class="flex flex-row items-center"
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

            <LocaleSwitcher color="var(--black-color)" />
        </div>

        <ul class="flex flex-row gap-x-9 px-[216px] py-[20px] mb-[20px] justify-center">
            <li
                v-for="link in links"
                :key="link.url"
            >
                <router-link :to="link.url">
                    <BaseTypography
                        :text="link.text"
                        type="footnote"
                    />
                </router-link>
            </li>
        </ul>

        <div class="flex flex-row gap-x-6 px-[216px] mb-[60px]">
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

        <div class="flex flex-row px-[216px] mb-[60px]">
            <div class="flex flex-row gap-x-12">
                <img src="@/assets/images/league.png" />
                <img src="@/assets/images/touroperators.png" />
            </div>

            <div class="ml-auto">
                <BaseTypography
                    text="ОГРН 1157847393373"
                    type="footnote"
                    color="var(--grey-color)"
                />

                <BaseTypography
                    text="ИНН 7840042552"
                    type="footnote"
                    color="var(--grey-color)"
                />
            </div>
        </div>

        <div class="flex flex-row px-[216px] mb-[60px]">
            <div class="p-[10px]">
                <BaseTypography
                    :text="`Copyright © Туроператор “РВМ”, ${currentYear}`"
                    type="footnote"
                    color="var(--grey-color)"
                />
            </div>

            <div class="flex flex-row gap-x-5 ml-auto">
                <img
                    src="@/assets/images/mir.png"
                    class="h-9"
                />

                <img
                    src="@/assets/images/visa.png"
                    class="h-9"
                />

                <img
                    src="@/assets/images/mastercard.png"
                    class="h-9"
                />
            </div>
        </div>
    </footer>
</template>

<style scoped>
.contacts {
    border-top: 3px solid var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
    @apply flex flex-row gap-x-[152px] py-10;
}

.svg {
    height: 46px;
    width: 46px;
}
</style>
