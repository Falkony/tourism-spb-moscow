<script setup lang="ts">
import { reactive } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const form = reactive({
    name: '',
    email: '',
    text: '',
    phone: '',
});
</script>

<template>
    <div class="bg-[var(--primary-color)] h-[600px] w-[800px] px-[72px] py-[85.5px]">
        <div class="px-[48px]">
            <BaseTypography
                text="Форма обратной связи"
                type="subtitle"
                color="var(--base-white)"
            />

            <BaseTypography
                text="Напишите нам по любым вопросам и предложениям"
                type="subtitle3"
                color="var(--base-white)"
            />
        </div>

        <div class="flex flex-wrap gap-x-[130px] gap-y-9 px-[48px]">
            <div class="flex flex-col gap-y-8 w-[204px]">
                <label for="name">
                    <BaseTypography
                        text="Ваше Имя*"
                        type="special-body2"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.name"
                    id="name"
                    name="name"
                />
            </div>

            <div class="flex flex-col gap-y-8 w-[213px]">
                <label for="name">
                    <BaseTypography
                        text="Ваша электронная почта"
                        type="special-body2"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.email"
                    type="email"
                    id="name"
                    name="name"
                />
            </div>

            <div class="flex flex-col gap-y-8 w-[204px]">
                <label for="name">
                    <BaseTypography
                        text="Ваш номер телефона *"
                        type="special-body2"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.phone"
                    type="tel"
                    id="name"
                    name="name"
                />
            </div>

            <div class="flex flex-col gap-y-8 w-[213px]">
                <label for="name">
                    <BaseTypography
                        text="Ваше сообщение"
                        type="special-body2"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.text"
                    id="name"
                    name="name"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
