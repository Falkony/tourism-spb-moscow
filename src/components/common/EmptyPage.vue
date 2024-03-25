<script setup lang="ts">
import { computed, defineProps } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';

const props = defineProps<{
    title?: string;
}>();

const title = computed(() => props.title ?? history.state?.title);
</script>

<template>
    <div class="flex-1 mt-10">
        <BaseReturn :text="title" />

        <div class="max-w-[1126px] mx-auto px-6">
            <BaseTypography
                text="Страница в разработке"
                type="subtitle2-m"
            />
        </div>
    </div>
</template>
