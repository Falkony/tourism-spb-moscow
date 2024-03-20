<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue';
import BaseTypography from '../common/BaseTypography.vue';
import ReturnButton from '../common/ReturnButton.vue';
import Diagram from './Diagram.vue';
</script>

<template>
    <div class="relative flex w-full max-w-[1126px] mx-auto mt-[149px] mb-[104px]">
        <div class="mt-[40px] flex w-full">
            <ReturnButton
                text="Бессмертная классика"
                class="w-[713px]"
            />

            <div class="ml-auto border-[3px] border-[var(--primary-color)] rounded-[100px] px-[46.5px] py-5">
                <BaseTypography
                    text="5 дней"
                    type="subtitle2"
                />
            </div>
        </div>
    </div>
</template>
