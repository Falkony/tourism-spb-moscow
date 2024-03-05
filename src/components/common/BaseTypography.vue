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
        type: 'heading-m',
        text: '',
        tag: 'div',
    }
);

const styles = computed(() => ({
    ...(props.color && {
        '--base-typography-default-color': props.color,
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
/* ToDo: стили */
</style>
