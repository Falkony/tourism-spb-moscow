<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import LocaleSwitcher from '@/components/common/LocaleSwitcher.vue';
import { useI18n } from 'vue-i18n';
import { toRefs, defineEmits } from 'vue';
import { useGlobalStore } from '@/stores/global';

const emit = defineEmits<{
    close: [];
}>();

const { t } = useI18n();

const globalStore = useGlobalStore();
const { isMainPage, isMobile } = toRefs(globalStore);
</script>

<template>
    <ul class="flex flex-col gap-y-5 l:flex-row l:items-center l:gap-x-10">
        <li>
            <router-link to="/about">
                <BaseTypography
                    :text="t('header.about')"
                    type="footnote"
                    :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    @click="emit('close')"
                />
            </router-link>
        </li>

        <li>
            <router-link to="/tours">
                <BaseTypography
                    :text="t('header.tours')"
                    type="footnote"
                    :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    @click="emit('close')"
                />
            </router-link>
        </li>

        <li>
            <router-link to="/excursions">
                <BaseTypography
                    :text="t('header.excursions')"
                    type="footnote"
                    :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    @click="emit('close')"
                />
            </router-link>
        </li>

        <li>
            <router-link to="/contacts">
                <BaseTypography
                    :text="t('header.contacts')"
                    type="footnote"
                    :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
                    @click="emit('close')"
                />
            </router-link>
        </li>
    </ul>

    <LocaleSwitcher
        v-if="isMobile"
        class="mt-[60px]"
        :color="isMainPage ? 'var(--base-white)' : 'var(--black-color)'"
    />
</template>
