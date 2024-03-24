<script lang="ts" setup>
import BaseTypography from '@/components/common/BaseTypography.vue';
import { withDefaults, defineProps, computed } from 'vue';
import type { TypographyType } from '@/types/Base/TypographyType';

import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const props = withDefaults(
    defineProps<{
        text: string;
        type: TypographyType;
        color?: string;
        ui: string;
        disabled?: boolean;
    }>(),
    {
        color: '#fff',
        disabled: false,
    }
);

const uiClass = computed(() => `base-btn-ui-${props.ui}`);
</script>

<template>
    <button
        :class="[
            uiClass,
            {
                'base-btn-mobile': width < 768,
                'base-btn': width > 768,
            },
        ]"
        :disabled="disabled"
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
    @apply transition-colors duration-200;
}

.base-btn-mobile {
    --base-btn-cursor: pointer;
    --bg-color: #fff;
    --border-color: transparent;
    padding: 12px 36px;
    border-radius: var(--base-btn-radius);
    cursor: var(--base-btn-cursor);

    @apply relative select-none inline-flex items-center justify-center space-x-2 outline-none;
    @apply transition-colors duration-200;
}

.base-btn-ui-disabled {
    background-color: var(--grey-color);
    border: none;
}

.base-btn-ui-white {
    background-color: var(--bg-color);
    border: none;
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
