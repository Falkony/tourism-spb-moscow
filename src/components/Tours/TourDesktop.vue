<script setup lang="ts">
import { ref } from 'vue';
import ReturnButton from '@/components/common/ReturnButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import Diagram from './Diagram.vue';
import TourForm from './TourForm.vue';

const toggle = ref<boolean>(false);

const toggleForm = () => (toggle.value = !toggle.value);
</script>

<template>
    <div class="flex flex-col flex-1 mt-[189px]">
        <div class="flex max-w-[1126px] mx-auto w-full mb-[76px]">
            <div
                v-if="toggle"
                class="fixed inset-0 z-30 bg-black/50"
            />

            <ReturnButton text="Бессмертная классика" />

            <div
                class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[24.5px] py-[10px] w-fit ml-auto"
            >
                <BaseTypography
                    text="5 дней"
                    type="subtitle2"
                    class="whitespace-nowrap"
                />
            </div>
        </div>

        <div class="reservation">
            <div class="flex items-center gap-x-[88px]">
                <div>
                    <BaseTypography
                        text="XXX "
                        type="subtitle"
                        color="var(--secondary-color)"
                        tag="span"
                    />

                    <BaseTypography
                        text="₽/чел"
                        type="body2"
                        tag="span"
                    />

                    <BaseTypography
                        text="группа (2-6 чел)"
                        type="body"
                    />
                </div>

                <div>
                    <BaseTypography
                        text="XXX "
                        type="subtitle"
                        color="var(--secondary-color)"
                        tag="span"
                    />

                    <BaseTypography
                        text="₽/чел"
                        type="body2"
                        tag="span"
                    />

                    <BaseTypography
                        text="индивидуальная"
                        type="body"
                    />
                </div>
            </div>

            <BaseButton
                text="Забронировать"
                padding-y="20"
                padding-x="64"
                type="subtitle4"
                color="var(--base-white)"
                ui="primary-with-back"
                @click="toggleForm"
            />
        </div>

        <div
            class="show fixed inset-0 z-30 l:top-[30%] l:left-[50%] l:translate-x-[-50%] l:translate-y-[-30%]"
            v-if="toggle"
        >
            <TourForm @close="toggleForm" />
        </div>

        <div class="flex max-w-[1126px] mx-auto p-3 w-full mb-[76px]">
            <BaseTypography
                text="Программа"
                type="subtitle"
            />
        </div>

        <Diagram />

        <div class="flex flex-col max-w-[1126px] mx-auto w-full">
            <section class="mb-[104px]">
                <div class="p-3 mb-[76px]">
                    <BaseTypography
                        text="Что включено"
                        type="subtitle"
                    />
                </div>

                <BaseAccordion
                    title="Экскурсионное обслуживание"
                    class="mb-[30px]"
                    disabled
                />

                <BaseAccordion
                    title="Входные билеты"
                    disabled
                />
            </section>

            <section class="mb-[104px]">
                <div class="p-3 mb-[76px]">
                    <BaseTypography
                        text="Дополнительно"
                        type="subtitle"
                    />
                </div>

                <BaseAccordion
                    title="Проживание"
                    class="mb-[30px]"
                    disabled
                />

                <BaseAccordion
                    title="Питание"
                    disabled
                />
            </section>

            <section class="mb-[104px]">
                <div class="p-3 mb-[76px]">
                    <BaseTypography
                        text="Часто задаваемые вопросы"
                        type="subtitle"
                    />
                </div>

                <BaseAccordion
                    title="Как забронировать и оплатить"
                    class="mb-[30px]"
                >
                    <template #default>
                        <div class="pl-5 mt-4">
                            <BaseTypography
                                text="Шаг 1: отправить заявку"
                                type="body2"
                                class="mb-6"
                            />

                            <BaseTypography
                                text="Забронировать тур вы можете следующим образом:"
                                type="body"
                                class="mb-6"
                            />

                            <BaseTypography
                                text="- нажать кнопку «ЗАБРОНИРОВАТЬ» в описании экскурсии;"
                                type="body"
                            />
                            <BaseTypography
                                text="- позвонить по телефону +7 (812) 207-03-50;"
                                type="body"
                            />
                            <BaseTypography
                                text="- отправить запрос по электронной почте info@rvm-spb.ru."
                                type="body"
                                class="mb-6"
                            />

                            <BaseTypography
                                text="Шаг 2: оплатить билеты"
                                type="body2"
                                class="mb-6"
                            />

                            <BaseTypography
                                text="У вас есть 2 способа сделать это:"
                                type="body"
                                class="mb-6"
                            />

                            <BaseTypography
                                text="1) Удалённо, через различные системы оплат (расчет с использованием реквизитов банковской карты, переводом через интернет-банк)."
                                type="body"
                            />

                            <BaseTypography
                                text="2) Подъехать заранее к нам в офис и оплатить наличными или по картам VISA, Mastercard, МИР. Наш офис в Бизнес центре 'СИТИ', ул. Садовая д.12, офис № 3 на 3 этаже."
                                type="body"
                                class="mb-6"
                            />

                            <div>
                                <BaseTypography
                                    text="Внимание! "
                                    type="body2"
                                    tag="span"
                                />

                                <BaseTypography
                                    text="Заявка на тур подтверждается только специалистом компании."
                                    type="body"
                                    tag="span"
                                />
                            </div>
                        </div>
                    </template>
                </BaseAccordion>

                <BaseAccordion
                    title="Способ оплаты"
                    class="mb-[30px]"
                >
                    <template #default>
                        <ul class="list-disc pl-10 mt-4">
                            <li>
                                <BaseTypography
                                    text="Visa"
                                    type="body"
                                />
                            </li>
                            <li>
                                <BaseTypography
                                    text="MasterCard"
                                    type="body"
                                />
                            </li>
                            <li>
                                <BaseTypography
                                    text="Сбербанк"
                                    type="body"
                                />
                            </li>
                            <li>
                                <BaseTypography
                                    text="ВТБ"
                                    type="body"
                                />
                            </li>
                            <li>
                                <BaseTypography
                                    text="Тинькофф"
                                    type="body"
                                />
                            </li>
                            <li>
                                <BaseTypography
                                    text="Наличными"
                                    type="body"
                                />
                            </li>
                        </ul>
                    </template>
                </BaseAccordion>

                <BaseAccordion
                    title="Сроки оплаты тура"
                    class="mb-[30px]"
                >
                    <template #default>
                        <div class="pl-5 mt-4">
                            <BaseTypography
                                text="Сроки оплаты тура указываются в договоре, который заключается после подтверждении бронирования тура."
                                type="body"
                            />
                        </div>
                    </template>
                </BaseAccordion>

                <BaseAccordion
                    title="Условия отмены бронирования"
                    class="mb-[30px]"
                >
                    <template #default>
                        <div class="pl-5 mt-4">
                            <BaseTypography
                                text="Условия отмены бронирования указываются в договоре, который заключается после подтверждении бронирования тура."
                                type="body"
                            />
                        </div>
                    </template>
                </BaseAccordion>
            </section>
        </div>
    </div>
</template>

<style scoped>
.reservation {
    @apply flex gap-x-[132px] items-center border-[3px] border-[var(--primary-color)] px-[104px] py-9 max-w-[1126px] mx-auto rounded-[100px] mb-[104px];
}
</style>
