<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import { useI18n } from 'vue-i18n';
import { toRefs } from 'vue';
import { useGlobalStore } from '@/stores/global';

const { t } = useI18n();

const globalStore = useGlobalStore();
const { isMainPage } = toRefs(globalStore);
</script>

<template>
    <nav>
        <ul class="flex flex-col gap-y-5 l:flex-row l:items-center l:gap-x-10">
            <li>
                <router-link to="/about">
                    <BaseTypography
                        :text="t('header.about')"
                        type="footnote"
                        :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    />
                </router-link>
            </li>

            <li>
                <router-link to="/tours">
                    <BaseTypography
                        :text="t('header.tours')"
                        type="footnote"
                        :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    />
                </router-link>
            </li>

            <li>
                <router-link to="/excursions">
                    <BaseTypography
                        :text="t('header.excursions')"
                        type="footnote"
                        :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    />
                </router-link>
            </li>

            <li>
                <router-link to="/contacts">
                    <BaseTypography
                        :text="t('header.contacts')"
                        type="footnote"
                        :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    />
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
    color: var(--bg-color);
}

a:hover {
    color: var(--active-color);
}

a:active {
    color: var(--active-color);
}
</style>
