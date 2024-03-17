<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const router = useRouter();
</script>

<template>
    <div class="flex items-center w-full mb-[76px] mt-[40px]">
        <div
            class="pl-[120px] pr-[76px] cursor-pointer"
            @click="router.back()"
        >
            <img src="@/assets/svg/arrow-left.svg" />
        </div>

        <BaseButton
            text="О компании"
            type="subtitle"
            ui="primary"
            color="var(--black-color)"
        />
    </div>

    <div class="flex gap-x-16 max-w-[1126px] mx-auto mb-[104px]">
        <div class="flex flex-col gap-y-[76px]">
            <div class="flex flex-col gap-y-6 w-[523px]">
                <BaseTypography
                    text="Название нашей компании расшифровывается как: «Реализуем Ваши Мечты». Это и слоган компании, и отношение к нашим клиентам."
                    type="body"
                />

                <BaseTypography
                    text="Кто-то мечтает о далеких путешествиях, а кто-то – о поездке на выходные недалеко от дома. Все ваши желания мы готовы воплотить в жизнь!"
                    type="body"
                />
            </div>

            <div>
                <div class="mb-3">
                    <BaseTypography
                        text="Р"
                        type="title"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="еализуем"
                        type="title2"
                        tag="span"
                        color="var(--black-color)"
                    />
                </div>

                <div class="pl-[56px] mb-3">
                    <BaseTypography
                        text="В"
                        type="title"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="аши"
                        type="title2"
                        tag="span"
                        color="var(--black-color)"
                    />
                </div>

                <div class="pl-[112px]">
                    <BaseTypography
                        text="М"
                        type="title"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="ечты"
                        type="title2"
                        tag="span"
                        color="var(--black-color)"
                    />
                </div>
            </div>
        </div>

        <img
            src="@/assets/images/about/ship.png"
            class="w-[645px]"
        />
    </div>

    <div class="flex flex-col justify-center items-center max-w-[1126px] mx-auto">
        <img
            src="@/assets/images/veles.png"
            class="w-[101px] mb-[92px]"
        />

        <div
            class="flex flex-row items-center justify-center gap-x-[26px] px-[124px] border-[3px] border-[var(--primary-color)] h-[114px] w-full rounded-[100px] mb-[92px]"
        >
            <div class="flex gap-x-[26px]">
                <img src="@/assets/svg/about/8.svg" />

                <BaseTypography
                    text="лет на рынке туризма"
                    type="body3"
                />
            </div>

            <div class="flex gap-x-[26px]">
                <img src="@/assets/svg/about/100.svg" />

                <BaseTypography
                    text="успешно реализованных программ"
                    type="body3"
                />
            </div>

            <div class="flex gap-x-[26px]">
                <img src="@/assets/svg/about/3.svg" />

                <BaseTypography
                    text="основных  направления деятельности"
                    type="body3"
                />
            </div>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center max-w-[1126px] mx-auto mb-[92px]">
        <div class="flex flex-col gap-y-10">
            <div class="flex flex-row items-center gap-x-4">
                <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>

                <div>
                    <BaseTypography
                        text="В 2023 году компания отпраздновала "
                        type="body"
                        class="max-w-[777px]"
                        tag="span"
                    />

                    <BaseTypography
                        text="8 лет "
                        type="body2"
                        class="max-w-[777px]"
                        tag="span"
                    />

                    <BaseTypography
                        text="с начала основания"
                        type="body"
                        class="max-w-[777px]"
                        tag="span"
                    />
                </div>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>

                <div class="max-w-[777px]">
                    <BaseTypography
                        text="С тех пор сотрудники РВМ организовали "
                        type="body"
                        tag="span"
                    />

                    <BaseTypography
                        text="более 100 "
                        type="body2"
                        tag="span"
                    />

                    <BaseTypography
                        text="различных программ как для небольших групп, так и коллективов 100+ человек."
                        type="body"
                        tag="span"
                    />
                </div>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <div class="h-[25px] w-[25px] bg-[var(--secondary-color)] rounded-full"></div>

                <div class="max-w-[777px]">
                    <BaseTypography
                        text="Туроператор РВМ выделяется персональной проработкой каждой программы по "
                        type="body"
                        tag="span"
                    />

                    <BaseTypography
                        text="3 основным направлениям: "
                        type="body2"
                        tag="span"
                    />

                    <BaseTypography
                        text="туры по Санкт-Петербургу и России, экскурсии и мероприятия (конференции, свадьбы и др.) в Санкт-Петербурге."
                        type="body"
                        tag="span"
                        class="underline"
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="mb-[104px]">
        <img
            src="@/assets/svg/line-big.svg"
            class="w-[1366px] mx-auto"
        />
    </div>

    <div class="flex flex-col gap-y-[76px] max-w-[1126px] mx-auto">
        <div class="p-3">
            <BaseTypography
                text="Мы гарантируем"
                type="subtitle"
                color="var(--black-color)"
            />
        </div>

        <div class="flex gap-x-[104px] px-[83px] mb-[104px]">
            <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] w-[428px] py-[20px]">
                <div class="flex items-center justify-center">
                    <BaseTypography
                        text="Нашим клиентам"
                        type="special-body"
                        color="var(--primary-color)"
                        class="h-[46px]"
                    />
                </div>

                <div class="py-[10px] pl-[60px] pr-[40px]">
                    <ul class="list-disc">
                        <li>
                            <BaseTypography
                                text="высокий уровень услуг"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="безопасность и защищенность"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="воплощение в реальность всех пожеланий"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="положительные эмоции до, после и во время отдыха"
                                type="special-body4"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] w-[428px] py-[20px]">
                <div class="flex items-center justify-center">
                    <BaseTypography
                        text="Нашим партнерам"
                        type="special-body"
                        color="var(--primary-color)"
                        class="h-[46px]"
                    />
                </div>

                <div class="py-[10px] pl-[60px] pr-[40px]">
                    <ul class="list-disc">
                        <li>
                            <BaseTypography
                                text="взаимовыгодное сотрудничество"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="профессиональный подход к работе"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="надежность всех этапов взаимодействия"
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="пунктуальность и организованность"
                                type="special-body4"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col max-w-[1366px] mx-auto mb-[104px]">
        <BaseTypography
            text="Наша команда"
            type="subtitle"
            class="var(--black-color) mb-[76px]"
        />

        <div
            class="relative flex flex-row justify-center gap-x-[79px] px-[52px] py-[50px] bg-[var(--primary-color)] w-full mb-[64px]"
        >
            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/adamovich.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            text="Генеральный директор"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        text="Людмила Адамович"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/vigovska.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            text="Исполнительный директор"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        text="Уна Выговска"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/sved.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            text="Руководитель отдела продаж"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        text="Елизавета Швед"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-y-[32px]">
                <img
                    src="@/assets/images/about/kritskaia.png"
                    class="w-[236px]"
                />

                <div class="flex flex-col gap-y-1">
                    <div class="p-[10px]">
                        <BaseTypography
                            text="Руководитель отдела въездного туризма"
                            type="body"
                            color="var(--base-white)"
                            class="max-w-[236px]"
                        />
                    </div>

                    <BaseTypography
                        text="Мария Крицкая"
                        type="body3"
                        color="var(--base-white)"
                        class="pl-[10px]"
                    />
                </div>
            </div>
        </div>

        <img
            src="@/assets/svg/arrow.svg"
            class="w-[400px] ml-auto mt-[-22px]"
        />
    </div>

    <div class="relative flex flex-col max-w-[1126px] mx-auto mb-[104px]">
        <div class="p-3 mb-[104px]">
            <BaseTypography
                text="Наши награды"
                type="subtitle"
                color="var(--black-color)"
            />
        </div>

        <div class="flex flex-row flex-wrap justify-center items-center gap-x-[320px] gap-y-9 mb-[64px]">
            <img
                src="@/assets/images/about/aword_1.png"
                class="w-[239px]"
            />
            <img
                src="@/assets/images/about/aword_2.png"
                class="w-[287px]"
            />
            <img
                src="@/assets/images/about/aword_3.png"
                class="w-[207px]"
            />
        </div>

        <img
            src="@/assets/svg/arrow.svg"
            class="w-[400px] ml-auto mt-[-22px]"
        />
    </div>
</template>
