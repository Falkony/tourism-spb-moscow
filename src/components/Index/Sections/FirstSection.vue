<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
    <div class="py-[74px]">
        <div class="pl-[39px] pr-[124px]">
            <div class="flex flex-col gap-y-6">
                <BaseTypography
                    text="Туроператор"
                    type="title2-m"
                    color="var(--base-white)"
                />

                <div class="flex flex-col gap-y-5">
                    <div>
                        <BaseTypography
                            text="Р"
                            type="headline-m"
                            tag="span"
                            color="var(--primary-color)"
                        />

                        <BaseTypography
                            text="еализуем"
                            type="headline2-m"
                            tag="span"
                            color="var(--base-white)"
                        />
                    </div>

                    <div class="pl-4">
                        <BaseTypography
                            text="В"
                            type="headline-m"
                            tag="span"
                            color="var(--primary-color)"
                        />

                        <BaseTypography
                            text="аши"
                            type="headline2-m"
                            tag="span"
                            color="var(--base-white)"
                        />
                    </div>

                    <div class="pl-8">
                        <BaseTypography
                            text="М"
                            type="headline-m"
                            tag="span"
                            color="var(--primary-color)"
                        />

                        <BaseTypography
                            text="ечты"
                            type="headline2-m"
                            tag="span"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center mb-[84px]">
        <BaseButton
            text="Оставить заявку"
            type="subtitle4-m"
            ui="secondary"
            color="var(--base-white)"
        />
    </div>
</template>

<style scoped></style>
