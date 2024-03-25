<script setup lang="ts">
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
</script>

<template>
    <div class="relative mt-10">
        <div class="absolute top-[111px] right-[10px]">
            <img
                src="@/assets/images/mobile/ship.png"
                class="w-[200px]"
            />
        </div>

        <BaseReturn text="О компании" />

        <div class="flex flex-col gap-y-5 items-center justify-center py-3 max-w-[250px] mx-auto mb-12">
            <BaseTypography
                text="Название нашей компании расшифровывается как: «Реализуем Ваши Мечты». Это и слоган компании, и отношение к нашим клиентам."
                type="body-m"
            />

            <BaseTypography
                text="Кто-то мечтает о далеких путешествиях, а кто-то – о поездке на выходные недалеко от дома. Все ваши желания мы готовы воплотить в жизнь!"
                type="body-m"
            />
        </div>

        <div class="flex flex-col gap-y-5 px-6 mb-[60px]">
            <div class="px-[29px]">
                <BaseTypography
                    text="Р"
                    type="headline-m"
                    tag="span"
                    color="var(--primary-color)"
                />

                <BaseTypography
                    text="еализуем"
                    type="headline2-m"
                    tag="span"
                    color="var(--black-color)"
                />
            </div>

            <div class="px-[52px]">
                <BaseTypography
                    text="В"
                    type="headline-m"
                    tag="span"
                    color="var(--primary-color)"
                />

                <BaseTypography
                    text="аши"
                    type="headline2-m"
                    tag="span"
                    color="var(--black-color)"
                />
            </div>

            <div class="px-[75px]">
                <BaseTypography
                    text="М"
                    type="headline-m"
                    tag="span"
                    color="var(--primary-color)"
                />

                <BaseTypography
                    text="ечты"
                    type="headline2-m"
                    tag="span"
                    color="var(--black-color)"
                />
            </div>
        </div>

        <div class="flex flex-col justify-center items-center">
            <img
                src="@/assets/images/veles.png"
                class="w-[101px] mb-12"
            />
        </div>

        <div class="flex flex-col items-center justify-center gap-y-8 mb-12">
            <div
                class="h-[112px] w-[116px] flex flex-col items-center justify-center border border-[var(--primary-color)] rounded-full px-[10px]"
            >
                <img
                    src="@/assets/svg/about/8.svg"
                    class="w-10"
                />

                <div class="text-center">
                    <BaseTypography
                        text="лет на рынке туризма"
                        type="body3-m"
                    />
                </div>
            </div>

            <div
                class="h-[132px] w-[148px] flex flex-col items-center justify-center border border-[var(--primary-color)] rounded-full px-[10px]"
            >
                <img
                    src="@/assets/svg/about/3.svg"
                    class="w-10"
                />

                <div class="text-center">
                    <BaseTypography
                        text="основных  направления деятельности"
                        type="body3-m"
                    />
                </div>
            </div>

            <div
                class="h-[140px] w-[156px] flex flex-col items-center justify-center border border-[var(--primary-color)] rounded-full px-[10px]"
            >
                <img
                    src="@/assets/svg/about/100.svg"
                    class="w-[100px]"
                />

                <div class="text-center">
                    <BaseTypography
                        text="успешно реализованных программ"
                        type="body3-m"
                    />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-y-6 px-[56px] py-4 mb-12">
            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div class="h-6 w-6 bg-[var(--secondary-color)] rounded-full" />

                <div class="max-w-[250px]">
                    <BaseTypography
                        text="В 2023 году компания отпраздновала "
                        type="body-m"
                        tag="span"
                    />

                    <BaseTypography
                        text="8 лет "
                        type="body2-m"
                        tag="span"
                    />

                    <BaseTypography
                        text="с начала основания"
                        type="body-m"
                        tag="span"
                    />
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div class="h-6 w-6 bg-[var(--secondary-color)] rounded-full" />

                <div class="max-w-[250px]">
                    <BaseTypography
                        text="С тех пор сотрудники РВМ организовали "
                        type="body-m"
                        tag="span"
                    />

                    <BaseTypography
                        text="более 100 "
                        type="body2-m"
                        tag="span"
                    />

                    <BaseTypography
                        text="различных программ как для небольших групп, так и коллективов 100+ человек."
                        type="body-m"
                        tag="span"
                    />
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div class="h-6 w-6 bg-[var(--secondary-color)] rounded-full" />

                <div class="max-w-[250px]">
                    <BaseTypography
                        text="Туроператор РВМ выделяется персональной проработкой каждой программы по "
                        type="body-m"
                        tag="span"
                    />

                    <BaseTypography
                        text="3 основным направлениям: "
                        type="body2-m"
                        tag="span"
                    />
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div />

                <div class="max-w-[250px]">
                    <router-link to="/tours">
                        <BaseTypography
                            text="туры по Санкт-Петербургу и России,"
                            type="body-m"
                            class="underline"
                        />
                    </router-link>
                </div>
            </div>

            <div class="grid grid-cols-[24px_auto] gap-x-4">
                <div />
                <div class="max-w-[250px]">
                    <router-link to="/excursions">
                        <BaseTypography
                            text="экскурсии и мероприятия (конференции, свадьбы и др.) в Санкт-Петербурге"
                            type="body-m"
                            class="underline"
                        />
                    </router-link>
                </div>
            </div>
        </div>

        <div class="h-[6px] bg-[var(--secondary-color)] mb-[60px]" />

        <div class="px-6 mb-12">
            <div class="flex flex-col">
                <div class="p-3 mb-12">
                    <BaseTypography
                        text="Мы гарантируем"
                        type="subtitle-m"
                    />
                </div>

                <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] py-[20px] mb-12">
                    <div class="flex items-center justify-center">
                        <BaseTypography
                            text="Нашим клиентам"
                            type="body-m"
                            color="var(--primary-color)"
                        />
                    </div>

                    <div class="py-[10px] pl-[60px] pr-[40px]">
                        <ul class="list-disc">
                            <li>
                                <BaseTypography
                                    text="высокий уровень услуг"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    text="безопасность и защищенность"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    text="воплощение в реальность всех пожеланий"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    text="положительные эмоции до, после и во время отдыха"
                                    type="body3-m"
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-[3px] border-[var(--primary-color)] rounded-[50px] py-[20px]">
                    <div class="flex items-center justify-center">
                        <BaseTypography
                            text="Нашим партнерам"
                            type="body-m"
                            color="var(--primary-color)"
                        />
                    </div>

                    <div class="py-[10px] pl-[60px] pr-[40px]">
                        <ul class="list-disc">
                            <li>
                                <BaseTypography
                                    text="взаимовыгодное сотрудничество"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    text="профессиональный подход к работе"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    text="надежность всех этапов взаимодействия"
                                    type="body3-m"
                                />
                            </li>

                            <li>
                                <BaseTypography
                                    text="пунктуальность и организованность"
                                    type="body3-m"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="flex flex-col px-6">
                <div class="p-3 mb-12">
                    <BaseTypography
                        text="Наша команда"
                        type="subtitle-m"
                    />
                </div>
            </div>

            <div
                class="relative flex flex-col items-center justify-center gap-y-10 px-[52px] py-[50px] bg-[var(--primary-color)] w-full mb-[64px]"
            >
                <!-- 1 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/adamovich.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                text="Генеральный директор"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            text="Людмила Адамович"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>

                <!-- 2 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/vigovska.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                text="Исполнительный директор"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            text="Уна Выговска"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
                <!-- 3 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/sved.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                text="Руководитель отдела продаж"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            text="Елизавета Швед"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
                <!-- 4 -->
                <div class="flex flex-col gap-y-5">
                    <img
                        src="@/assets/images/about/kritskaia.png"
                        class="w-[236px]"
                    />

                    <div class="flex flex-col items-center gap-y-1">
                        <div class="p-[10px] text-center">
                            <BaseTypography
                                text="Руководитель отдела въездного туризма"
                                type="body3-m"
                                color="var(--base-white)"
                                class="max-w-[236px]"
                            />
                        </div>

                        <BaseTypography
                            text="Мария Крицкая"
                            type="title2-m"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col px-6">
            <div class="p-3 mb-12">
                <BaseTypography
                    text="Наши награды"
                    type="subtitle-m"
                />
            </div>

            <div class="grid grid-cols-2 items-center gap-x-6 gap-y-6 mb-[64px] justify-items-center">
                <img
                    src="@/assets/images/about/aword_1.png"
                    class="w-[116px]"
                />
                <img
                    src="@/assets/images/about/aword_2.png"
                    class="w-[116px]"
                />
                <img
                    src="@/assets/images/about/aword_3.png"
                    class="w-[116px] col-span-2"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
