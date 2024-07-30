<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import ExcursionForm from './ExcursionForm.vue';
import MarkdownRenderer from '@/components/common/MarkdownRenderer.vue';
import { useGlobalStore } from '@/stores/global';

const props = defineProps<{
    id: number;
}>();

const strapiUrl = process.env.VUE_APP_STRAPI_URL;

const router = useRouter();
const globalStore = useGlobalStore();
const { getExcursion } = globalStore;

const toggle = ref<boolean>(false);
const excursion = ref<any>();
const isLoading = ref<boolean>(true);

const toggleForm = () => (toggle.value = !toggle.value);

const onLoad = async () => {
    isLoading.value = true;
    excursion.value = await getExcursion(props.id);
    isLoading.value = false;
};

onLoad();
</script>

<template>
    <div class="mt-[130px]">
        <div class="grid grid-cols-[22px_auto] items-center gap-x-3 mb-[60px] px-6">
            <div @click="router.back()">
                <img src="@/assets/svg/mobile/shevron-left.svg" />
            </div>

            <div class="flex flex-col">
                <BaseTypography
                    :text="excursion?.data?.attributes.title"
                    type="subtitle-m"
                    color="var(--primary-color)"
                    class="mb-3"
                />

                <BaseLine width="299" />
            </div>
        </div>
        <div class="px-6 mb-[60px]">
            <div class="h-[272px] w-full bg-[var(--primary-color)] relative">
                <img
                    :src="`${strapiUrl}${excursion?.data.attributes.img.data.attributes.url}`"
                    class="absolute top-0 w-full"
                />
            </div>
        </div>

        <div class="px-10 mb-[60px]">
            <div class="reservation">
                <div class="flex flex-col gap-y-3">
                    <div>
                        <BaseTypography
                            :text="excursion?.data?.attributes.summForGroup.toString()"
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
                            :text="excursion?.data?.attributes.group"
                            type="body-m"
                        />
                    </div>

                    <div>
                        <BaseTypography
                            :text="excursion?.data?.attributes.summForInd.toString()"
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
                            :text="excursion?.data?.attributes.excursionType"
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

                <div
                    class="fixed inset-0 z-30"
                    v-if="toggle"
                >
                    <ExcursionForm @close="toggleForm" />
                </div>

                <div class="flex gap-x-4 px-3">
                    <img
                        src="@/assets/svg/icon_time.svg"
                        class="w-[27px]"
                    />

                    <div>
                        <BaseTypography
                            text="Продолжительность:"
                            type="body2-m"
                        />

                        <BaseTypography
                            :text="excursion?.data?.attributes.duration"
                            type="body-m"
                        />
                    </div>
                </div>

                <div class="flex gap-x-4 px-3">
                    <img
                        src="@/assets/svg/icon_nearby.svg"
                        class="w-[27px]"
                    />

                    <div>
                        <BaseTypography
                            text="Место встречи:"
                            type="body2-m"
                        />

                        <BaseTypography
                            :text="excursion?.data?.attributes.meetLocation"
                            type="body-m"
                        />
                    </div>
                </div>

                <div class="flex gap-x-4 px-3">
                    <img
                        src="@/assets/svg/icon_location.svg"
                        class="w-[27px]"
                    />

                    <div>
                        <BaseTypography
                            text="Место окончания:"
                            type="body2-m"
                        />

                        <BaseTypography
                            :text="excursion?.data?.attributes.endLocation"
                            type="body-m"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 mb-[60px]">
            <div class="flex flex-col items-center gap-y-6">
                <div class="px-3">
                    <BaseTypography
                        text="Описание"
                        type="subtitle-m"
                    />
                </div>

                <div class="p-[10px] text-[14px]">
                    <div
                        v-if="isLoading"
                        class="absolute inset-0 flex items-center justify-center"
                    >
                        <span>Загрузка...</span>
                    </div>
                    <MarkdownRenderer
                        v-else
                        :markdown="excursion?.data.attributes?.description"
                    />
                </div>
            </div>
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
                            text="Забронировать места на экскурсию вы можете следующим образом:"
                            type="body-m"
                            class="mb-6"
                        />

                        <BaseTypography
                            text="- нажать кнопку «ЗАБРОНИРОВАТЬ» в описании экскурсии;"
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
                        <div class="mb-6">
                            <BaseTypography
                                text="Бронирование экскурсии должно быть оплачено "
                                type="body-m"
                                tag="span"
                            />

                            <BaseTypography
                                text="не позднее чем за 3 дня до ее проведения."
                                type="body-m"
                                tag="span"
                            />
                        </div>

                        <div>
                            <BaseTypography
                                text="! "
                                type="body2-m"
                                tag="span"
                            />

                            <BaseTypography
                                text="Наш специалист отправит вам напоминание о крайнем сроке оплаты бронирования."
                                type="body-m"
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
                                type="body-m"
                                tag="span"
                            />

                            <BaseTypography
                                text="не позднее чем за 7 дня до ее проведения."
                                type="body-m"
                                tag="span"
                            />
                        </div>

                        <div>
                            <BaseTypography
                                text="! "
                                type="body2-m"
                                tag="span"
                            />

                            <BaseTypography
                                text="Сроки аннуляций и штрафы по сборным экскурсиям определяются индивидуально и будут прописаны в договоре. Размер штрафа равняется фактически понесенным затратам. В случае частичной аннуляции услуг указанные штрафные санкции применяются к стоимости аннулированной части услуг."
                                type="body-m"
                                tag="span"
                            />
                        </div>
                    </div>
                </template>
            </BaseAccordion>
        </section>
    </div>
</template>

<style scoped>
.reservation {
    @apply flex flex-col gap-y-8 items-center border-[3px] border-[var(--primary-color)] rounded-[80px] px-12 py-8;
}
</style>
