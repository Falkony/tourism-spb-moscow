<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full">
        <div class="flex flex-col gap-y-[3px] p-[10px] text-center">
            <BaseTypography
                text="Организуем"
                type="title-m"
            />

            <BaseLine width="156" />
        </div>

        <div class="flex flex-col gap-y-[3px] p-[10px] text-center">
            <BaseTypography
                text="туры и экскурсии"
                type="title-m"
            />

            <BaseLine width="220" />
        </div>

        <div class="flex flex-col gap-y-[3px] p-[10px] text-center">
            <BaseTypography
                text="по Санкт-Петербургу и России"
                type="title-m"
            />

            <BaseLine width="291" />
        </div>
    </div>
</template>
