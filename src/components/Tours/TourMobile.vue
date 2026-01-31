<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/global';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import TourForm from './TourForm.vue';
import MarkdownIt from 'markdown-it';

const strapiUrl = process.env.VUE_APP_STRAPI_URL;

const md = new MarkdownIt();

const router = useRouter();
const id = +router.currentRoute.value.params.id;

const toggle = ref<boolean>(false);
const tour = ref();

const toggleForm = () => (toggle.value = !toggle.value);

const globalStore = useGlobalStore();
const { getTour } = globalStore;

const onLoad = async () => {
    tour.value = await getTour(id);
};

onLoad();
</script>

<template>
    <div class="mt-[130px]">
        <div class="grid grid-cols-[22px_auto] gap-x-3 mb-[60px] px-6">
            <div
                @click="router.back()"
                class="mt-[7px]"
            >
                <img src="@/assets/svg/mobile/shevron-left.svg" />
            </div>

            <div class="flex flex-col">
                <BaseTypography
                    :text="tour?.data.attributes?.title"
                    type="subtitle-m"
                    color="var(--primary-color)"
                    class="mb-3 w-fit"
                />

                <BaseLine
                    width="250"
                    class="mb-6"
                />

                <div
                    class="flex items-center justify-center px-[48.5px] py-[10px] border-[3px] border-[var(--primary-color)] rounded-[100px] w-fit"
                >
                    <BaseTypography
                        :text="tour?.data.attributes?.days"
                        type="subtitle2-m"
                    />
                </div>
            </div>
        </div>

        <div class="px-6 mb-[60px]">
            <div
                class="flex flex-col justify-center items-center border-[3px] border-[var(--primary-color)] rounded-[50px] px-9 py-8"
            >
                <div class="flex justify-center gap-x-6 mb-9">
                    <div>
                        <BaseTypography
                            :text="tour?.data?.attributes.summForGroup"
                            type="subtitle-m"
                            color="var(--secondary-color)"
                            tag="span"
                        />

                        <BaseTypography
                            text=" ₽/чел"
                            type="body2-m"
                            tag="span"
                        />

                        <BaseTypography
                            :text="tour?.data?.attributes.group"
                            type="body-m"
                        />
                    </div>

                    <div>
                        <BaseTypography
                            :text="tour?.data?.attributes.summForInd"
                            type="subtitle-m"
                            color="var(--secondary-color)"
                            tag="span"
                        />

                        <BaseTypography
                            text=" ₽/чел"
                            type="body2-m"
                            tag="span"
                        />

                        <BaseTypography
                            :text="tour?.data?.attributes.tourType"
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
                    @click="toggleForm"
                />
            </div>

            <div
                class="fixed inset-0 z-30"
                v-if="toggle"
            >
                <TourForm @close="toggleForm" />
            </div>
        </div>

        <div class="mb-[60px]">
            <div class="flex justify-center p-3 mb-[60px]">
                <BaseTypography
                    text="Программа"
                    type="subtitle-m"
                />
            </div>

            <div
                v-for="desc in tour?.data.attributes.tourDescription"
                :key="desc.id"
                class="flex flex-col w-full mb-12 px-6 items-center gap-y-4"
            >
                <div class="flex flex-col border-[3px] border-[var(--primary-color)] rounded-[50px] py-6 w-full">
                    <div class="flex items-center gap-x-3 mb-3 px-6">
                        <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                        <BaseTypography
                            :text="desc.title"
                            type="special-body"
                            color="var(--primary-color)"
                        />
                    </div>

                    <div class="flex flex-col px-6">
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
        </div>

        <section class="mb-[60px] px-6">
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
                            text="- написать на почтовый адрес reserv@rvm-spb.ru;"
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
                            text="2) Подъехать заранее к нам в офис и оплатить наличными или по картам VISA, Mastercard, МИР. Наш офис в Бизнес центре 'Петровский форт', Финляндский проспект 4А, офис 201"
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
                title="Сроки оплаты тура"
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
