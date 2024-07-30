<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits<{
    click: [];
}>();

defineProps<{
    excursion: any;
}>();

const goToForm = () => emit('click');
</script>

<template>
    <div class="w-[390px] border-[3px] border-[var(--primary-color)] px-[36px] py-[76px] rounded-[100px]">
        <div class="flex flex-col">
            <div class="pl-12 mb-9">
                <BaseTypography
                    :text="excursion?.data?.attributes.summForGroup.toString()"
                    type="subtitle"
                    color="var(--secondary-color)"
                    tag="span"
                />

                <BaseTypography
                    text=" ₽/чел"
                    type="body2"
                    tag="span"
                />

                <BaseTypography
                    :text="excursion?.data?.attributes.group"
                    type="body"
                />
            </div>

            <div class="pl-12 mb-9">
                <BaseTypography
                    :text="excursion?.data?.attributes.summForInd.toString()"
                    type="subtitle"
                    color="var(--secondary-color)"
                    tag="span"
                />

                <BaseTypography
                    text=" ₽/чел"
                    type="body2"
                    tag="span"
                />

                <BaseTypography
                    :text="excursion?.data?.attributes.excursionType"
                    type="body"
                />
            </div>

            <BaseButton
                text="Забронировать"
                type="subtitle4"
                color="var(--base-white)"
                ui="primary-with-back"
                class="cursor-pointer mb-9"
                @click="goToForm"
            />

            <div class="flex gap-x-4 px-3 mb-9">
                <img
                    src="@/assets/svg/icon_time.svg"
                    class="w-[27px]"
                />

                <div>
                    <BaseTypography
                        text="Продолжительность:"
                        type="body2"
                    />

                    <BaseTypography
                        :text="excursion?.data?.attributes.duration"
                        type="body"
                    />
                </div>
            </div>

            <div class="flex gap-x-4 px-3 mb-9">
                <img
                    src="@/assets/svg/icon_nearby.svg"
                    class="w-[27px]"
                />

                <div>
                    <BaseTypography
                        text="Место встречи:"
                        type="body2"
                    />

                    <BaseTypography
                        :text="excursion?.data?.attributes.meetLocation"
                        type="body"
                    />
                </div>
            </div>

            <div class="flex gap-x-4 px-3">
                <img
                    src="@/assets/svg/icon_location.svg"
                    class="w-[27px]"
                />

                <div>
                    <BaseTypography
                        text="Место окончания:"
                        type="body2"
                    />

                    <BaseTypography
                        :text="excursion?.data?.attributes.endLocation"
                        type="body"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
