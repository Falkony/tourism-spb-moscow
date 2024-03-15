<script lang="ts" setup>
import BaseTypography from './BaseTypography.vue';
import { withDefaults, defineProps, computed } from 'vue';
import type { TypographyType } from '../../types/Base/TypographyType';

const props = withDefaults(
    defineProps<{
        text: string;
        type: TypographyType;
        color?: string;
        ui: string;
    }>(),
    {
        color: '#fff',
    }
);

const uiClass = computed(() => `base-btn-ui-${props.ui}`);
</script>

<template>
    <button
        class="base-btn"
        :class="[uiClass]"
    >
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
    --bg-color: #fff;
    --border-color: transparent;

    height: var(--base-btn-height);
    min-height: var(--base-btn-height);
    border-radius: var(--base-btn-radius);
    padding: 0 var(--base-btn-padding);
    cursor: var(--base-btn-cursor);

    @apply relative select-none inline-flex items-center justify-center space-x-2 outline-none;
    @apply transition-colors duration-200 whitespace-nowrap;
}

.base-btn-ui-primary {
    background-color: var(--bg-color);
    border-color: var(--primary-color);
    border-width: 3px;
}

.base-btn-ui-secondary {
    background-color: var(--white-color);
    border: none;
}

.base-btn-ui-primary-with-back {
    background-color: var(--primary-color);
    border: none;
}
</style>
