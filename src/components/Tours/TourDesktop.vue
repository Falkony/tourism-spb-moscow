<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/global';
import { useRouter } from 'vue-router';
import ReturnButton from '@/components/common/ReturnButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import TourForm from './TourForm.vue';
import MarkdownIt from 'markdown-it';

const strapiUrl = process.env.VUE_APP_STRAPI_URL;

const md = new MarkdownIt();
const router = useRouter();
const id = +router.currentRoute.value.params.id;

const toggle = ref<boolean>(false);
const tour = ref<any>();

const toggleForm = () => (toggle.value = !toggle.value);

const globalStore = useGlobalStore();
const { getTour } = globalStore;

const onLoad = async () => {
    tour.value = await getTour(id);
};

onLoad();
</script>

<template>
    <div class="flex flex-col flex-1 mt-[189px]">
        <div class="flex max-w-[1126px] mx-auto w-full mb-[76px]">
            <div
                v-if="toggle"
                class="fixed inset-0 z-30 bg-black/50"
            />

            <ReturnButton :text="tour?.data.attributes?.title" />

            <div
                class="flex items-center border-[3px] border-[var(--primary-color)] rounded-[100px] px-[24.5px] py-[10px] w-fit ml-auto"
            >
                <BaseTypography
                    :text="tour?.data.attributes?.days"
                    type="subtitle2"
                    class="whitespace-nowrap"
                />
            </div>
        </div>

        <div class="reservation">
            <div class="flex items-center gap-x-[88px]">
                <div>
                    <BaseTypography
                        :text="tour?.data?.attributes.summForGroup.toString()"
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
                        :text="tour?.data?.attributes.group"
                        type="body"
                    />
                </div>

                <div>
                    <BaseTypography
                        :text="tour?.data?.attributes.summForInd.toString()"
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
                        :text="tour?.data?.attributes.tourType"
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

        <div class="flex max-w-[1126px] mx-auto p-3 w-full mb-[60px]">
            <BaseTypography
                text="Программа"
                type="subtitle"
            />
        </div>

        <div
            v-for="desc in tour?.data.attributes.tourDescription"
            :key="desc.id"
            class="flex gap-x-10 max-w-[1126px] mx-auto w-full mb-12"
        >
            <div class="flex flex-col border-[3px] border-[var(--primary-color)] rounded-[50px] py-6 min-w-[600px]">
                <div class="flex items-center gap-x-3 mb-3 px-10">
                    <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                    <BaseTypography
                        :text="desc.title"
                        type="special-body"
                        color="var(--primary-color)"
                    />
                </div>

                <div class="flex flex-col px-10">
                    <div v-html="md.render(desc.dayDescription)" />
                </div>
            </div>

            <div
                v-for="img in desc.dayImgs?.data"
                :key="img.id"
                class="flex items-center gap-x-10"
            >
                <img
                    :src="strapiUrl + img.attributes.url"
                    class="h-[216px] w-[216px] rounded-full object-cover"
                />
            </div>
        </div>

        <div class="flex flex-col max-w-[1126px] mx-auto w-full">
            <section class="mb-[56px]">
                <div class="p-3 mb-10">
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

            <section class="mb-[56px]">
                <div class="p-3 mb-10">
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

            <section class="mb-[56px]">
                <div class="p-3 mb-10">
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
    @apply flex gap-x-[132px] items-center border-[3px] border-[var(--primary-color)] px-[104px] py-9 max-w-[1126px] mx-auto rounded-[100px] mb-[84px];
}
</style>
