<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { vMaska } from 'maska';
import { ref, computed, defineEmits } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const emits = defineEmits<{
    close: [];
}>();

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
    <div class="h-screen bg-[var(--bg-color)]">
        <div
            class="absolute top-16 right-10 cursor-pointer"
            @click="emits('close')"
        >
            <img src="@/assets/svg/close.svg" />
        </div>

        <div class="flex flex-col gap-y-5 px-[72px] py-16">
            <BaseTypography
                text="Форма обратной связи"
                :type="width > 768 ? 'subtitle' : 'title-m'"
                color="var(--black-color)"
            />

            <BaseTypography
                text="Напишите нам по любым вопросам и предложениям"
                :type="width > 768 ? 'special-body3' : 'body3-m'"
                color="var(--black-color)"
            />
        </div>

        <div class="flex flex-col gap-y-10 px-10">
            <!-- name -->
            <div class="flex flex-col px-[45px]">
                <label for="name">
                    <BaseTypography
                        text="Ваше Имя*"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--black-color)"
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

            <!-- phone -->
            <div class="flex flex-col px-[45px]">
                <label for="phone">
                    <BaseTypography
                        text="Ваш номер телефона*"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--black-color)"
                    />
                </label>

                <input
                    v-model="form.phone"
                    v-maska:[options]
                    placeholder="+7(000)000-00-00"
                    id="phone"
                    name="phone"
                    class="edit bk"
                    type="text"
                    required
                />
            </div>

            <!-- email -->
            <div class="flex flex-col px-[45px]">
                <label for="email">
                    <BaseTypography
                        text="Ваша электронная почта"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--black-color)"
                    />
                </label>

                <input
                    v-model="form.email"
                    placeholder="ivan.ivanov@mail.ru"
                    id="email"
                    name="email"
                    class="edit bk"
                    type="email"
                />
            </div>

            <!-- text -->
            <div class="flex flex-col px-[45px]">
                <label for="text">
                    <BaseTypography
                        text="Ваше сообщение"
                        :type="width > 768 ? 'special-body2' : 'body2-m'"
                        color="var(--black-color)"
                    />
                </label>

                <input
                    v-model="form.text"
                    id="text"
                    name="text"
                    placeholder="Ваше сообщение..."
                    class="edit bk"
                    type="text"
                />
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-6 mb-16">
                <div
                    class="h-6 w-6 border-[4px] border-[var(--primary-color)] rounded-full cursor-pointer"
                    :class="{ 'border-[var(--secondary-color)]': agreement }"
                    @click="() => (agreement = !agreement)"
                />

                <div>
                    <BaseTypography
                        text="Я согласен(а) на обработку персональных данных на условиях, изложенных в "
                        type="caption-m"
                        tag="span"
                    />

                    <router-link to="/consent">
                        <BaseTypography
                            text="Согласии на обработку персональных данных "
                            type="caption-m"
                            class="underline"
                            tag="span"
                        />
                    </router-link>

                    <BaseTypography
                        text="и "
                        type="caption-m"
                        tag="span"
                    />

                    <router-link to="/policy">
                        <BaseTypography
                            text="Политике."
                            type="caption-m"
                            class="underline"
                            tag="span"
                        />
                    </router-link>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <BaseButton
                text="Отправить"
                :type="width > 768 ? 'subtitle4' : 'subtitle4-m'"
                color="var(--base-white)"
                :ui="!isDisabled ? 'disabled' : 'primary-with-back'"
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
    background: var(--bg-color);
}
.bk {
    background: transparent;
    outline: none;
}
</style>
