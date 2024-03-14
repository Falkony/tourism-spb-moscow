<script lang="ts" setup>
import BaseTypography from './BaseTypography.vue';
import { withDefaults, defineProps } from 'vue';
import type { TypographyType } from '../../types/Base/TypographyType';

withDefaults(
    defineProps<{
        text: string;
        type: TypographyType;
        color?: string;
    }>(),
    {
        color: '#fff',
    }
);
</script>

<template>
    <button class="base-btn">
        <slot v-if="$slots.default || text">
            <BaseTypography
                :text="text"
                :type="type"
                :color="color"
                tag="span"
            />
        </slot>

        <slot name="end"></slot>
    </button>
</template>

<style scoped>
/* ToDo: Доработать стили */
.base-btn {
    --base-btn-cursor: pointer;

    --base-btn-bg: var(--primary-color);
    --base-btn-color: #fff;
    --base-btn-border-color: var(--base-btn-border-default-color);

    background-color: var(--base-btn-bg);
    border-color: var(--base-btn-border-color);
    color: var(--base-btn-color);
    height: var(--base-btn-height);
    min-height: var(--base-btn-height);
    border-radius: var(--base-btn-radius);
    padding: 0 var(--base-btn-padding);
    cursor: var(--base-btn-cursor);

    @apply relative select-none inline-flex items-center justify-center space-x-2 outline-none border-0 border-solid;
    @apply transition-colors duration-200 whitespace-nowrap;
}
</style>
