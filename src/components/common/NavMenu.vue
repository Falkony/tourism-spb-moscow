<script setup lang="ts">
import BaseTypography from './BaseTypography.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <nav>
        <ul class="flex flex-row items-center gap-x-10">
            <li>
                <router-link to="/about">
                    <BaseTypography
                        :text="t('header.about')"
                        type="footnote"
                        color="var(--base-white)"
                    />
                </router-link>
            </li>

            <li>
                <router-link to="/tours">
                    <BaseTypography
                        :text="t('header.tours')"
                        type="footnote"
                        color="var(--base-white)"
                    />
                </router-link>
            </li>

            <li>
                <router-link to="/excursions">
                    <BaseTypography
                        :text="t('header.excursions')"
                        type="footnote"
                        color="var(--base-white)"
                    />
                </router-link>
            </li>

            <li>
                <router-link to="/contacts">
                    <BaseTypography
                        :text="t('header.contacts')"
                        type="footnote"
                        color="var(--base-white)"
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
