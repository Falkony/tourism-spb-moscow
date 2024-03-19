<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const props = withDefaults(
    defineProps<{
        title?: string;
        expanded?: boolean;
        disabled?: boolean;
    }>(),
    {
        expanded: false,
    }
);

const isExpanded = ref<boolean>(props.expanded);
const changeExpanded = () => {
    if (!props.disabled) {
        isExpanded.value = !isExpanded.value;
    }
};
</script>

<template>
    <div class="flex flex-col w-full">
        <div
            class="flex justify-between w-full mb-3"
            :class="{ 'cursor-pointer': !disabled }"
            @click="changeExpanded"
        >
            <slot name="title">
                <ul class="list-disc pl-10">
                    <li>
                        <BaseTypography
                            :text="title"
                            type="body"
                        />
                    </li>
                </ul>
            </slot>

            <img
                v-if="isExpanded && !disabled"
                src="@/assets/svg/shevron_2.svg"
                class="w-[22px]"
            />

            <img
                v-if="!isExpanded && !disabled"
                src="@/assets/svg/shevron_1.svg"
                class="w-[22px]"
            />
        </div>

        <img
            src="@/assets/svg/line-big.svg"
            class="w-full"
            :class="{ 'mb-12': isExpanded }"
        />

        <div v-show="isExpanded">
            <slot />
        </div>
    </div>
</template>
