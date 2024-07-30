<script setup lang="ts">
import HowToPay from '@/components/HowToPay/HowToPay.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div class="mt-[130px] l:mt-[155px]">
        <HowToPay />
    </div>
</template>
