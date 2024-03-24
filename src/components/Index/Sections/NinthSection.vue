<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseLine from '@/components/common/BaseLine.vue';
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col items-center justify-center w-full mb-[64px] p-3">
            <div class="p-[10px] text-center">
                <BaseTypography
                    text="индивидуальный подход"
                    type="title-m"
                    class="mb-2"
                />

                <BaseLine width="291" />
            </div>

            <div class="p-[10px] text-center">
                <BaseTypography
                    text="профессионализм"
                    type="title-m"
                    class="mb-2"
                />

                <BaseLine width="220" />
            </div>

            <div class="p-[10px] text-center">
                <BaseTypography
                    text="надежность"
                    type="title-m"
                    class="mb-2"
                />

                <BaseLine width="136" />
            </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-y-12">
            <img
                src="@/assets/images/logo_btm.png"
                class="w-[187px]"
            />

            <BaseButton
                text="Оставить заявку"
                type="subtitle4-m"
                color="var(--base-white)"
                ui="primary-with-back"
            />
        </div>
    </div>
</template>

<style scoped></style>
