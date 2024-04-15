<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';
import type { TypographyType } from '../../types/Base/TypographyType';

const props = withDefaults(
    defineProps<{
        type?: TypographyType;
        text?: string;
        tag?: string;
        color?: string;
    }>(),
    {
        text: '',
        tag: 'div',
    }
);

const styles = computed(() => ({
    ...(props.color && {
        '--base-typography-color': props.color,
    }),
}));

const sizeClass = computed(() => `base-typography-${props.type}`);
</script>

<template>
    <component
        :is="tag"
        :type="type"
        class="base-typography"
        :class="sizeClass"
        :style="styles"
        v-bind="$attrs"
    >
        <slot>{{ text }}</slot>
    </component>
</template>

<style scoped>
.base-typography {
    --base-typography-color: var(--black-color);
    color: var(--base-typography-color);
}

.base-typography-headline {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-headline-font-size);
    line-height: var(--base-typography-headline-line-height);
    font-weight: 600;
}

.base-typography-headline2 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-headline2-font-size);
    line-height: var(--base-typography-headline2-line-height);
    font-weight: 600;
    text-transform: uppercase;
}

.base-typography-title {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-title-font-size);
    line-height: var(--base-typography-title-line-height);
    font-weight: 600;
}

.base-typography-title2 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-title2-font-size);
    line-height: var(--base-typography-title2-line-height);
    font-weight: 400;
}

.base-typography-subtitle {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle-font-size);
    line-height: var(--base-typography-subtitle-line-height);
    font-weight: 600;
}

.base-typography-subtitle2 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle2-font-size);
    line-height: var(--base-typography-subtitle2-line-height);
    font-weight: 400;
}

.base-typography-subtitle3 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle3-font-size);
    line-height: var(--base-typography-subtitle3-line-height);
    font-weight: 400;
}

.base-typography-subtitle4 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle4-font-size);
    line-height: var(--base-typography-subtitle4-line-height);
    font-weight: 600;
    text-transform: uppercase;
}

.base-typography-body {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body-font-size);
    line-height: var(--base-typography-body-line-height);
    font-weight: 400;
}

.base-typography-body2 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body2-font-size);
    line-height: var(--base-typography-body2-line-height);
    font-weight: 600;
}

.base-typography-body3 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body3-font-size);
    line-height: var(--base-typography-body3-line-height);
    font-weight: 300;
}

.base-typography-body4 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body4-font-size);
    line-height: var(--base-typography-body4-line-height);
    font-weight: 500;
}

.base-typography-footnote {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-footnote-font-size);
    line-height: var(--base-typography-footnote-line-height);
    font-weight: 400;
}

.base-typography-special-body {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-special-body-font-size);
    line-height: var(--base-typography-special-body-line-height);
    font-weight: 600;
}

.base-typography-special-body2 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-special-body2-font-size);
    line-height: var(--base-typography-special-body2-line-height);
    font-weight: 400;
}

.base-typography-special-body3 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-special-body3-font-size);
    line-height: var(--base-typography-special-body3-line-height);
    font-weight: 300;
}

.base-typography-special-body4 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-special-body4-font-size);
    line-height: var(--base-typography-special-body4-line-height);
    font-weight: 300;
}

.base-typography-caption {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-caption-font-size);
    line-height: var(--base-typography-caption-line-height);
    font-weight: 300;
}

.base-typography-caption2 {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-caption2-font-size);
    line-height: var(--base-typography-caption2-line-height);
    font-weight: 300;
    text-decoration: underline;
}

/* Адаптив */

.base-typography-headline-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-headline-m-font-size);
    line-height: var(--base-typography-headline-m-line-height);
    font-weight: 600;
    text-transform: uppercase;
}

.base-typography-headline2-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-headline2-m-font-size);
    line-height: var(--base-typography-headline2-m-line-height);
    font-weight: 600;
    text-transform: uppercase;
}

.base-typography-title-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-title-m-font-size);
    line-height: var(--base-typography-title-m-line-height);
    font-weight: 600;
}

.base-typography-title2-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-title2-m-font-size);
    line-height: var(--base-typography-title2-m-line-height);
    font-weight: 400;
}

.base-typography-subtitle-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle-m-font-size);
    line-height: var(--base-typography-subtitle-m-line-height);
    font-weight: 600;
}

.base-typography-subtitle2-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle2-m-font-size);
    line-height: var(--base-typography-subtitle2-m-line-height);
    font-weight: 400;
}

.base-typography-subtitle3-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle3-m-font-size);
    line-height: var(--base-typography-subtitle3-m-line-height);
    font-weight: 400;
}

.base-typography-subtitle4-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-subtitle4-m-font-size);
    line-height: var(--base-typography-subtitle4-m-line-height);
    font-weight: 600;
    text-transform: uppercase;
}

.base-typography-body-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body-m-font-size);
    line-height: var(--base-typography-body-m-line-height);
    font-weight: 400;
}

.base-typography-body2-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body2-m-font-size);
    line-height: var(--base-typography-body2-m-line-height);
    font-weight: 600;
}

.base-typography-body3-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body3-m-font-size);
    line-height: var(--base-typography-body3-m-line-height);
    font-weight: 300;
}

.base-typography-body4-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-body4-m-font-size);
    line-height: var(--base-typography-body4-m-line-height);
    font-weight: 300;
    text-decoration: underline;
}

.base-typography-special-body-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-special-body-m-font-size);
    line-height: var(--base-typography-special-body-m-line-height);
    font-weight: 300;
}

.base-typography-caption-m {
    --base-typography-default-color: var(--color-text-heading);
    font-size: var(--base-typography-caption-m-font-size);
    line-height: var(--base-typography-caption-m-line-height);
    font-weight: 300;
}
</style>
