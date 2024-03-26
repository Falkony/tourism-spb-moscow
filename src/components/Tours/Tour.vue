<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue';
import BaseTypography from '../common/BaseTypography.vue';
import ReturnButton from '../common/ReturnButton.vue';
import Diagram from './Diagram.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import { useRouter } from 'vue-router';
import Block from './Block.vue';

const router = useRouter();
</script>

<template>
    <div class="mt-[223px]">
        <div class="grid grid-cols-[22px_auto] items-center gap-x-3 mb-[60px] px-6">
            <div @click="router.back()">
                <img src="@/assets/svg/mobile/shevron-left.svg" />
            </div>

            <div class="flex flex-col">
                <BaseTypography
                    text="Бессмертная классика"
                    type="subtitle2-m"
                    color="var(--primary-color)"
                    class="mb-3"
                />

                <BaseLine width="299" />
            </div>
        </div>

        <div class="px-6 mb-[60px]">
            <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] px-9 py-8">
                <div class="flex justify-center gap-x-6 mb-9">
                    <div>
                        <BaseTypography
                            text="XXX "
                            type="subtitle-m"
                            color="var(--secondary-color)"
                            tag="span"
                        />

                        <BaseTypography
                            text="₽/чел"
                            type="body2-m"
                            tag="span"
                        />

                        <BaseTypography
                            text="группа (2-6 чел)"
                            type="body-m"
                        />
                    </div>

                    <div>
                        <BaseTypography
                            text="XXX "
                            type="subtitle-m"
                            color="var(--secondary-color)"
                            tag="span"
                        />

                        <BaseTypography
                            text="₽/чел"
                            type="body2-m"
                            tag="span"
                        />

                        <BaseTypography
                            text="индивидуальная"
                            type="body-m"
                        />
                    </div>
                </div>

                <BaseButton
                    text="Забронировать"
                    padding-y="18"
                    padding-x="67"
                    type="subtitle4-m"
                    color="var(--base-white)"
                    ui="green"
                />
            </div>
        </div>

        <div class="mb-[60px]">
            <div class="flex justify-center p-3 mb-[60px]">
                <BaseTypography
                    text="Программа"
                    type="subtitle-m"
                />
            </div>

            <Block
                text="День 1"
                :list="['Заселение в отель', 'Обзорная экскурсия', 'Обед', 'Музей-макет “Петровская акватория”']"
                class="mb-[27px]"
            />
            <Block
                text="День 2"
                :list="['Петропавловская крепость: собор и Трубецкая тюрьма', 'Обед']"
                class="mb-[27px]"
            />
            <Block
                text="День 3"
                :list="['Царское село', 'Обед']"
                class="mb-[27px]"
            />
            <Block
                text="День 4"
                :list="['Кронштадт', 'Обед']"
                class="mb-[27px]"
            />
            <Block
                text="День 5"
                last
                :list="['Музей Фаберже', 'Обед', 'Свободное время']"
                class="mb-[27px]"
            />
        </div>

        <section class="mb-[60px] px-10">
            <div class="p-3 mb-6">
                <BaseTypography
                    text="Что включено"
                    type="subtitle-m"
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

        <section class="mb-[60px] px-10">
            <div class="p-3 mb-6">
                <BaseTypography
                    text="Дополнительно"
                    type="subtitle-m"
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

        <section class="mb-[60px] px-10">
            <div class="p-3 mb-6">
                <BaseTypography
                    text="Часто задаваемые вопросы"
                    type="subtitle-m"
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
                            type="body2-m"
                            class="mb-6"
                        />

                        <BaseTypography
                            text="Забронировать тур вы можете следующим образом:"
                            type="body-m"
                            class="mb-6"
                        />

                        <BaseTypography
                            text="- нажать кнопку «ЗАБРОНИРОВАТЬ» в описании тура;"
                            type="body-m"
                        />
                        <BaseTypography
                            text="- позвонить по телефону +7 (812) 207-03-50;"
                            type="body-m"
                        />
                        <BaseTypography
                            text="- отправить запрос по электронной почте info@rvm-spb.ru."
                            type="body-m"
                            class="mb-6"
                        />

                        <BaseTypography
                            text="Шаг 2: оплатить билеты"
                            type="body2-m"
                            class="mb-6"
                        />

                        <BaseTypography
                            text="У вас есть 2 способа сделать это:"
                            type="body-m"
                            class="mb-6"
                        />

                        <BaseTypography
                            text="1) Удалённо, через различные системы оплат (расчет с использованием реквизитов банковской карты, переводом через интернет-банк)."
                            type="body-m"
                        />

                        <BaseTypography
                            text="2) Подъехать заранее к нам в офис и оплатить наличными или по картам VISA, Mastercard, МИР. Наш офис в Бизнес центре 'СИТИ', ул. Садовая д.12, офис № 3 на 3 этаже."
                            type="body-m"
                            class="mb-6"
                        />

                        <div>
                            <BaseTypography
                                text="Внимание! "
                                type="body2-m"
                                tag="span"
                            />

                            <BaseTypography
                                text="Заявка на тур подтверждается только специалистом компании."
                                type="body-m"
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
                                type="body-m"
                            />
                        </li>
                        <li>
                            <BaseTypography
                                text="MasterCard"
                                type="body-m"
                            />
                        </li>
                        <li>
                            <BaseTypography
                                text="Сбербанк"
                                type="body-m"
                            />
                        </li>
                        <li>
                            <BaseTypography
                                text="ВТБ"
                                type="body-m"
                            />
                        </li>
                        <li>
                            <BaseTypography
                                text="Тинькофф"
                                type="body-m"
                            />
                        </li>
                        <li>
                            <BaseTypography
                                text="Наличными"
                                type="body-m"
                            />
                        </li>
                    </ul>
                </template>
            </BaseAccordion>

            <BaseAccordion
                title="Сроки оплаты экскурсии"
                class="mb-[30px]"
            >
                <template #default>
                    <div class="pl-5 mt-4">
                        <BaseTypography
                            text="Сроки оплаты тура указываются в договоре, который заключается после подтверждении бронирования тура."
                            type="body-m"
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
                            type="body-m"
                        />
                    </div>
                </template>
            </BaseAccordion>
        </section>
    </div>
</template>
