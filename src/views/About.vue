<script setup lang="ts">
import Index from '@/components/About/Index.vue';
import Index2 from '@/components/About/Index2.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<template>
    <div class="mt-[130px] l:mt-[155px]">
        <Index2 v-if="width < 768" />
        <Index v-else />
    </div>
</template>
