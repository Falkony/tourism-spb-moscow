<script setup lang="ts">
import { reactive, ref, computed, defineEmits } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '../common/BaseButton.vue';

const emits = defineEmits<{
    close: [];
}>();

const form = reactive({
    name: '',
    email: '',
    text: '',
    phone: '',
});

const agreement = ref(false);

const sendForm = () => {
    console.log(form);
};

const isDisabled = computed(() => form.name !== '' && form.phone !== '' && agreement.value);
</script>

<template>
    <div class="bg-[var(--base-white)] h-[600px] w-[800px] px-[72px] py-[85.5px] rounded-l-[100px]">
        <div class="px-[48px] mb-[64px] relative">
            <BaseTypography
                text="Форма обратной связи"
                type="subtitle"
                class="mb-5"
            />

            <BaseTypography
                text="Напишите нам по любым вопросам и предложениям"
                type="special-body3"
            />

            <div
                class="absolute right-0 top-0 cursor-pointer p-1"
                @click="emits('close')"
            >
                <img src="@/assets/svg/close.svg" />
            </div>
        </div>

        <div class="flex flex-wrap gap-x-[130px] gap-y-9 mb-[64px] px-[48px]">
            <div class="flex flex-col w-[204px]">
                <label for="name">
                    <BaseTypography
                        text="Ваше Имя*"
                        type="special-body2"
                    />
                </label>

                <input
                    v-model="form.name"
                    id="name"
                    name="name"
                    class="edit bk"
                    type="text"
                    required
                />
            </div>

            <div class="flex flex-col w-[213px]">
                <label for="email">
                    <BaseTypography
                        text="Ваша электронная почта"
                        type="special-body2"
                    />
                </label>

                <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    name="email"
                    class="edit bk"
                />
            </div>

            <div class="flex flex-col w-[204px]">
                <label for="phone">
                    <BaseTypography
                        text="Ваш номер телефона *"
                        type="special-body2"
                    />
                </label>

                <input
                    v-model="form.phone"
                    type="tel"
                    id="phone"
                    name="phone"
                    class="edit bk"
                    required
                />
            </div>

            <div class="flex flex-col w-[213px]">
                <label for="text">
                    <BaseTypography
                        text="Ваше сообщение"
                        type="special-body2"
                    />
                </label>

                <input
                    v-model="form.text"
                    id="text"
                    name="text"
                    type="text"
                    class="edit bk"
                />
            </div>
        </div>

        <div class="flex gap-x-9 px-[28px]">
            <div class="flex gap-x-6">
                <div
                    class="h-10 w-10 bg-[var(--base-white)] border-[4px] border-[var(--primary-color)] rounded-full cursor-pointer"
                    :class="{ 'border-[var(--secondary-color)]': agreement }"
                    @click="() => (agreement = !agreement)"
                ></div>

                <div>
                    <BaseTypography
                        text="Я согласен(а) на обработку персональных данных на условиях, изложенных в Согласии на обработку персональных данных и Политике."
                        type="caption"
                        class="max-w-[238px]"
                    />
                </div>
            </div>

            <BaseButton
                text="Отправить"
                type="subtitle4"
                color="var(--base-white)"
                :ui="!isDisabled ? 'disabled' : 'primary-with-back'"
                class="cursor-pointer"
                :disabled="!isDisabled"
                @click="sendForm"
            />
        </div>
    </div>
</template>

<style scoped>
.edit {
    border-bottom: 2px solid var(--black-color);
    color: var(--black-color);
    font-size: 20px;
    background: #fff;
}
.bk {
    background: transparent;
    outline: none;
}
</style>
