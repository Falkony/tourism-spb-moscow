<script setup lang="ts">
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import ReturnButton from '@/components/common/ReturnButton.vue';
import Photo from './Photo.vue';
import Reservation from './Reservation.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import Form from './Form.vue';
</script>

<template>
    <div class="flex flex-col flex-1 mt-[149px]">
        <div class="mx-auto max-w-[1326px] mt-10 mb-[76px]">
            <div class="flex gap-x-[112px]">
                <div class="flex flex-col gap-y-[76px]">
                    <ReturnButton text="О чем молчат дворы Васильевского острова" />
                    <Photo />
                </div>

                <Reservation />
            </div>
        </div>

        <div class="max-w-[1326px] mx-auto w-full px-[120px] mb-[104px] mt-[-150px]">
            <div class="p-3 mb-[76px]">
                <BaseTypography
                    text="Описание"
                    type="subtitle"
                />
            </div>

            <ul class="list-disc p-[10px]">
                <li class="mb-6">
                    <BaseTypography
                        text="Мы пройдем по "
                        type="body"
                        tag="span"
                    />

                    <BaseTypography
                        text="проходным дворам Васильевского острова."
                        type="body"
                        tag="span"
                    />
                </li>

                <li class="mb-6">
                    <BaseTypography
                        text="Будем учиться смотреть на город и видеть его жизнь в порой малозаметных деталях."
                        type="body"
                    />
                </li>

                <li class="mb-6">
                    <BaseTypography
                        text="Будем обсуждать, как появился этот неофициальный символ Петербурга — проходные дворы, что они сейчас скрывают и какие истории они могут рассказать."
                        type="body"
                    />
                </li>

                <li class="mb-6">
                    <BaseTypography
                        text="Закончим экскурсию одним из самых таинственных мест Санкт-Петербурга "
                        type="body"
                        tag="span"
                    />

                    <BaseTypography
                        text="— музей-аптека Пеля."
                        type="body"
                        tag="span"
                    />
                </li>
            </ul>

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

            <Form />

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
                                text="Забронировать места на экскурсию вы можете следующим образом:"
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
                                    text="Наличие мест на экскурсию подтверждается только специалистом компании. На все предложения туроператора действует правило предварительной оплаты в течение 3-5 дней с момента бронирования в зависимости от даты начала экскурсии. Уточняйте у специалистов."
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
                    title="Сроки оплаты экскурсии"
                    class="mb-[30px]"
                >
                    <template #default>
                        <div class="pl-5 mt-4">
                            <div class="mb-6">
                                <BaseTypography
                                    text="Бронирование экскурсии должно быть оплачено "
                                    type="body"
                                    tag="span"
                                />

                                <BaseTypography
                                    text="не позднее чем за 3 дня до ее проведения."
                                    type="body"
                                    tag="span"
                                />
                            </div>

                            <div>
                                <BaseTypography
                                    text="! "
                                    type="body2"
                                    tag="span"
                                />

                                <BaseTypography
                                    text="Наш специалист отправит вам напоминание о крайнем сроке оплаты бронирования."
                                    type="body"
                                    tag="span"
                                />
                            </div>
                        </div>
                    </template>
                </BaseAccordion>

                <BaseAccordion
                    title="Условия отмены бронирования"
                    class="mb-[30px]"
                >
                    <template #default>
                        <div class="pl-5 mt-4">
                            <div class="mb-6">
                                <BaseTypography
                                    text="Отмена бронирования экскурсии осуществляется "
                                    type="body"
                                    tag="span"
                                />

                                <BaseTypography
                                    text="не позднее чем за 7 дня до ее проведения."
                                    type="body"
                                    tag="span"
                                />
                            </div>

                            <div>
                                <BaseTypography
                                    text="! "
                                    type="body2"
                                    tag="span"
                                />

                                <BaseTypography
                                    text="Сроки аннуляций и штрафы по сборным экскурсиям определяются индивидуально и будут прописаны в договоре. Размер штрафа равняется фактически понесенным затратам. В случае частичной аннуляции услуг указанные штрафные санкции применяются к стоимости аннулированной части услуг."
                                    type="body"
                                    tag="span"
                                />
                            </div>
                        </div>
                    </template>
                </BaseAccordion>
            </section>
        </div>
    </div>
</template>
