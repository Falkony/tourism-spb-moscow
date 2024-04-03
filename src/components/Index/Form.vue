<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { vMaska } from 'maska';
import { ref, computed, defineEmits } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import type { MainPageForm } from '@/types/MainPageForm';
import { useGlobalStore } from '@/stores/global';

const emit = defineEmits<{
    close: [];
}>();

const { width } = useWindowSize();

const { isMobile } = useGlobalStore();

const options = { mask: '+7 (###) ###-##-##' };

const form = ref<MainPageForm>({} as MainPageForm);
const agreement = ref<boolean>(false);
const sended = ref<boolean>(false);

const sendForm = () => {
    // ToDo: подключить PhPMailer.
    console.log('form:', form.value);
    sended.value = true;
};

const isDisabled = computed(() => {
    return form.value.name && /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(form.value.phone) && agreement.value;
});

const onLoad = () => {
    if (!isMobile) return;

    const body = document.querySelector('body');
    if (body) {
        body.style.overflow = 'hidden';
    }
};

const onClose = () => {
    if (isMobile) {
        const body = document.querySelector('body');
        if (body) {
            body.style.overflow = 'auto';
        }
    }

    emit('close');
};

onLoad();
</script>

<template>
    <div
        v-if="!sended"
        class="h-screen bg-[var(--bg-color)] l:rounded-l-[100px] l:h-[600px] l:w-[800px] relative"
    >
        <div
            class="absolute top-16 right-10 cursor-pointer"
            @click="onClose"
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

        <div class="flex flex-col gap-y-10 px-10 l:grid l:grid-cols-2">
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
                        :type="width < 900 ? 'caption-m' : 'caption'"
                        tag="span"
                    />

                    <router-link to="/consent">
                        <BaseTypography
                            text="Согласии на обработку персональных данных "
                            :type="width < 900 ? 'caption-m' : 'caption'"
                            class="underline"
                            tag="span"
                        />
                    </router-link>

                    <BaseTypography
                        text="и "
                        :type="width < 900 ? 'caption-m' : 'caption'"
                        tag="span"
                    />

                    <router-link to="/policy">
                        <BaseTypography
                            text="Политике."
                            :type="width < 900 ? 'caption-m' : 'caption'"
                            class="underline"
                            tag="span"
                        />
                    </router-link>
                </div>
            </div>

            <div
                v-if="width > 900"
                class="flex justify-center"
            >
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

        <div
            v-if="width < 900"
            class="flex justify-center"
        >
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

    <div
        v-else
        class="h-screen bg-[var(--bg-color)] l:h-[600px] l:w-[800px] rounded-l-[100px]"
    >
        <div
            class="absolute top-16 right-10 cursor-pointer"
            @click="onClose"
        >
            <img src="@/assets/svg/close.svg" />
        </div>

        <div class="flex flex-col items-center justify-center gap-y-5 h-full">
            <BaseTypography
                text="Благодарим за оставленную заявку!"
                :type="width < 900 ? 'subtitle2-m' : 'subtitle2'"
            />

            <BaseTypography
                text="Наш специалист вскоре свяжется с Вами."
                :type="width < 900 ? 'subtitle2-m' : 'subtitle2'"
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
