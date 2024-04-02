<script setup lang="ts">
import { withDefaults, defineProps, ref, toRefs } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import { useGlobalStore } from '@/stores/global';

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

const { isMobile } = toRefs(useGlobalStore());
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
                            :type="isMobile ? 'body-m' : 'body'"
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

        <BaseLine />

        <div v-show="isExpanded">
            <slot />
        </div>
    </div>
</template>
