<script setup lang="ts">
import EmptyPage from '@/components/common/EmptyPage.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="flex-1 mt-[130px] l:mt-[155px]">
        <EmptyPage :title="t('agents')" />
    </div>
</template>
