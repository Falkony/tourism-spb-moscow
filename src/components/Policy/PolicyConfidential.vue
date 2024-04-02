<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseContainer from '@/components/common/BaseContainer.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import { useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { width } = useWindowSize();
const { t } = useI18n();

const paragraphs = computed(() => [
    {
        items: [t('policy.text.1')],
    },
    {
        items: [t('policy.text.2')],
    },
    {
        items: [t('policy.text.3'), t('policy.text.4'), t('policy.text.5')],
    },
    {
        items: [t('policy.text.6')],
    },
    {
        items: [t('policy.text.7')],
    },
    {
        items: [t('policy.text.8'), t('policy.text.9')],
    },
    {
        items: [t('policy.text.10'), t('policy.text.11'), t('policy.text.12')],
    },
    {
        items: [t('policy.text.13'), t('policy.text.14'), t('policy.text.15')],
    },
    {
        items: [t('policy.text.16'), t('policy.text.17'), t('policy.text.18')],
    },
]);
</script>

<template>
    <div class="mt-[40px] l:mb-[104px]">
        <BaseReturn :text="t('policy.title')" />

        <BaseContainer>
            <div
                v-for="(paragraph, i) in paragraphs"
                :key="i"
                class="mb-4"
            >
                <BaseTypography
                    v-for="(text, i) in paragraph.items"
                    :key="i"
                    :text="text"
                    :type="width > 768 ? 'body' : 'body-m'"
                    class="indent-8"
                />
            </div>

            <BaseTypography
                :text="t('policy.text.19')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8"
            />

            <a
                href="http://www.rvm-spb.ru/"
                target="_blank"
            >
                <BaseTypography
                    text="http://www.rvm-spb.ru/"
                    :type="width > 768 ? 'body' : 'body-m'"
                    tag="span"
                    class="underline"
                />
            </a>
        </BaseContainer>
    </div>
</template>
