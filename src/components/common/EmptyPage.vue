<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useWindowSize } from '@vueuse/core';
import { computed, defineProps } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';

const props = defineProps<{
    title?: string;
}>();

const { t } = useI18n();

const title = computed(() => props.title ?? history.state?.title);

const { width } = useWindowSize();
</script>

<template>
    <div class="flex-1 mt-10">
        <BaseReturn
            :text="title"
            class="l:mb-[104px]"
        />

        <div class="max-w-[1126px] mx-auto px-6">
            <BaseTypography
                :text="t('empty-page')"
                :type="width < 768 ? 'subtitle2-m' : 'subtitle'"
            />
        </div>
    </div>
</template>
