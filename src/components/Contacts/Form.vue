<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { vMaska } from 'maska';
import { ref, computed } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const { width } = useWindowSize();

type FormDataType = {
    name: string;
    email?: string;
    text?: string;
    phone: string;
};

const options = { mask: '+7 (###) ###-##-##' };

const form = ref<FormDataType>({} as FormDataType);
const agreement = ref<boolean>(false);

const sendForm = () => {
    // ToDo: подключить PhPMailer.
    return console.log('form:', form.value);
};

const isDisabled = computed(() => form.value.name !== '' && form.value.phone !== '' && agreement.value);
</script>

<template>
    <div class="bg-[var(--primary-color)] px-10 py-[60px]">
        <div class="flex flex-col gap-y-5 mb-[64px] px-[53px]">
            <BaseTypography
                text="Форма обратной связи"
                :type="width > 768 ? 'subtitle' : 'title-m'"
                color="var(--base-white)"
                class="max-w-[200px]"
            />

            <BaseTypography
                text="Напишите нам по любым вопросам и предложениям"
                :type="width > 768 ? 'special-body3' : 'body3-m'"
                color="var(--base-white)"
                class="max-w-[200px]"
            />
        </div>

        <div class="flex flex-wrap justify-center gap-y-9 mb-[64px]">
            <div class="flex flex-col w-[204px]">
                <label for="name">
                    <BaseTypography
                        text="Ваше Имя*"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.name"
                    id="name"
                    name="name"
                    placeholder="Иван"
                    class="edit bk"
                    type="text"
                    required
                />
            </div>

            <div class="flex flex-col w-[213px]">
                <label for="email">
                    <BaseTypography
                        text="Ваша электронная почта"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="ivan.ivanov@mail.ru"
                    name="email"
                    class="edit bk"
                />
            </div>

            <div class="flex flex-col w-[204px]">
                <label for="phone">
                    <BaseTypography
                        text="Ваш номер телефона *"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.phone"
                    v-maska:[options]
                    placeholder="+7(000)000-00-00"
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
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--base-white)"
                    />
                </label>

                <input
                    v-model="form.text"
                    id="text"
                    name="text"
                    placeholder="Ваше сообщение..."
                    type="text"
                    class="edit bk"
                />
            </div>
        </div>

        <div class="flex flex-col gap-y-16 gap-x-9">
            <div class="grid grid-cols-[24px_auto] gap-x-6">
                <div
                    class="h-6 w-6 l:h-10 l:w-10 bg-[var(--base-white)] rounded-full cursor-pointer"
                    :class="{ 'border-[4px] border-[--secondary-color]': agreement }"
                    @click="() => (agreement = !agreement)"
                />

                <div>
                    <BaseTypography
                        text="Я согласен(а) на обработку персональных данных на условиях, изложенных в Согласии на обработку персональных данных и Политике."
                        :type="width > 768 ? 'caption' : 'caption-m'"
                        color="var(--base-white)"
                        class="max-w-[238px]"
                    />
                </div>
            </div>

            <div class="flex justify-center">
                <BaseButton
                    text="Отправить"
                    :type="width > 768 ? 'subtitle4' : 'subtitle4-m'"
                    :color="!isDisabled ? 'var(--base-white)' : 'var(--primary-color)'"
                    :ui="!isDisabled ? 'disabled' : 'white'"
                    padding-x="85"
                    padding-y="18"
                    class="cursor-pointer"
                    :disabled="!isDisabled"
                    @click="sendForm"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.edit {
    border-bottom: 2px solid var(--base-white);
    color: var(--base-white);
    font-size: 20px;
    background: #fff;
}
.bk {
    background: transparent;
    outline: none;
}
</style>
