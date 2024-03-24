<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
</script>

<template>
    <div class="flex flex-col px-10">
        <div class="flex items-center justify-center relative mb-12">
            <BaseButton
                text="Дополнительные услуги"
                type="subtitle-m"
                padding-x="54"
                padding-y="12"
                color="var(--black-color)"
                ui="primary"
            />
        </div>

        <div class="flex">
            <div class="flex flex-col px-1 py-3 my-auto">
                <div class="grid grid-cols-[12px_auto] gap-x-2 items-center mb-12">
                    <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                    <BaseTypography
                        text="Организация мероприятий"
                        type="subtitle2-m"
                    />
                </div>

                <div class="grid grid-cols-[12px_auto] gap-x-2 items-center pl-5 mb-12">
                    <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                    <BaseTypography
                        text="Бронирование отелей"
                        type="subtitle2-m"
                    />
                </div>
            </div>

            <img src="@/assets/images/mobile/8_section_icons.png" />
        </div>
    </div>
</template>
