<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { vMaska } from 'maska';
import { ref, computed, defineEmits } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const emit = defineEmits<{
    close: [];
}>();

const { width } = useWindowSize();

type FormDataType = {
    excursion: string;
    childrens?: number;
    adults: number;
    date: string;
    name: string;
    email?: string;
    connect?: string;
    phone: string;
};

const options = { mask: '+7 (###) ###-##-##' };

const form = ref<FormDataType>({} as FormDataType);
const agreement = ref<boolean>(false);
const sended = ref<boolean>(false);

const sendForm = () => {
    // ToDo: подключить PhPMailer.
    console.log('form:', form.value);
    sended.value = true;
};

const isDisabled = computed(() => {
    return !(
        form.value.excursion &&
        form.value.adults &&
        form.value.date &&
        form.value.name &&
        /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(form.value.phone) &&
        agreement.value
    );
});
</script>

<template>
    <div
        v-if="!sended"
        class="h-screen bg-[var(--bg-color)] overflow-scroll"
    >
        <div
            class="absolute top-16 right-10 cursor-pointer"
            @click="emit('close')"
        >
            <img src="@/assets/svg/close.svg" />
        </div>

        <div class="flex flex-col gap-y-5 px-[72px] py-16">
            <BaseTypography
                text="Бронирование"
                :type="width > 768 ? 'subtitle' : 'title-m'"
                color="var(--black-color)"
            />
        </div>

        <div class="flex flex-col gap-y-16">
            <!-- 1 -->
            <div class="flex flex-col gap-y-10 px-10">
                <div class="flex flex-col px-[45px]">
                    <BaseTypography
                        text="Общая информация"
                        type="body-m"
                        color="var(--primary-color)"
                        class="mb-10"
                    />

                    <label for="excursion">
                        <BaseTypography
                            text="Название экскурсии*"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--black-color)"
                        />
                    </label>

                    <input
                        v-model="form.excursion"
                        id="excursion"
                        name="excursion"
                        placeholder="О чем молчат дворы Васильевского острова"
                        class="edit bk"
                        type="text"
                        required
                    />
                </div>

                <!-- range -->
                <div class="flex flex-col px-[45px]">
                    <label for="date">
                        <BaseTypography
                            text="Дата экскурсии*"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--black-color)"
                        />
                    </label>

                    <input
                        v-model="form.date"
                        id="date"
                        name="date"
                        placeholder="01.03.2024"
                        class="edit bk"
                        type="text"
                        required
                    />
                </div>

                <!-- adults -->
                <div class="flex flex-col px-[45px]">
                    <label for="adults">
                        <BaseTypography
                            text="Количество взрослых*"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--black-color)"
                        />
                    </label>

                    <input
                        v-model="form.adults"
                        id="adults"
                        name="adults"
                        placeholder="2"
                        class="edit bk"
                        type="number"
                        required
                    />
                </div>

                <!-- childrens -->
                <div class="flex flex-col px-[45px]">
                    <label for="childrens">
                        <BaseTypography
                            text="Количество детей"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--black-color)"
                        />
                    </label>

                    <input
                        v-model="form.childrens"
                        id="childrens"
                        name="childrens"
                        placeholder="2"
                        class="edit bk"
                        type="number"
                    />
                </div>
            </div>

            <!-- 2 -->
            <div class="flex flex-col gap-y-10 px-10">
                <!-- name -->
                <div class="flex flex-col px-[45px]">
                    <BaseTypography
                        text="Обратная связь"
                        type="body-m"
                        color="var(--primary-color)"
                        class="mb-10"
                    />

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
                        v-model="form.connect"
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
        </div>

        <div class="flex justify-center mb-12">
            <BaseButton
                text="Отправить"
                :type="width > 768 ? 'subtitle4' : 'subtitle4-m'"
                color="var(--base-white)"
                :ui="isDisabled ? 'disabled' : 'primary-with-back'"
                :disabled="isDisabled"
                @click="sendForm"
            />
        </div>
    </div>

    <div
        v-else
        class="h-screen bg-[var(--bg-color)]"
    >
        <div
            class="absolute top-16 right-10 cursor-pointer"
            @click="emit('close')"
        >
            <img src="@/assets/svg/close.svg" />
        </div>

        <div class="flex flex-col items-center justify-center gap-y-5 h-full">
            <BaseTypography
                text="Забронировано!"
                type="subtitle2-m"
            />

            <BaseTypography
                text="Наш специалист вскоре свяжется с Вами."
                type="subtitle2-m"
            />
        </div>
    </div>
</template>

<style scoped>
.edit {
    border-bottom: 2px solid var(--black-color);
    color: var(--black-color);
    font-size: 16px;
    background: var(--bg-color);
}
.bk {
    background: transparent;
    outline: none;
}

input[type='date']::-webkit-calendar-picker-indicator {
    opacity: 0;
}
</style>
