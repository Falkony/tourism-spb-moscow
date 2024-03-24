<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    width: string;
}>();
</script>

<template>
    <div
        class="h-[6px] bg-[var(--secondary-color)] rounded"
        :style="{ width: `${width}px` }"
    />
</template>
