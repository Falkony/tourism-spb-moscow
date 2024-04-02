<script setup lang="ts">
import EmptyPage from '@/components/common/EmptyPage.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="mt-[183px]">
        <EmptyPage :title="t('how')" />
    </div>
</template>
