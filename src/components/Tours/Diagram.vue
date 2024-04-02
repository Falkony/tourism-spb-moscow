<script lang="ts" setup>
import BaseTypography from '@/components/common/BaseTypography.vue';
</script>
<template>
    <div
        class="relative flex flex-wrap gap-x-[45px] gap-y-[30px] items-center px-[20px] max-w-[1126px] mx-auto w-full mb-[104px]"
    >
        <!-- Day 1 -->
        <div class="block px-10 py-6">
            <div class="flex flex-col gap-y-3 w-full">
                <BaseTypography
                    text="День 1"
                    type="special-body"
                    color="var(--primary-color)"
                />

                <ul class="list-disc pl-5">
                    <li>
                        <BaseTypography
                            text="Обзорная экскурсия в Петропавловскую крепость (собор + Трубецкой бастион)."
                            type="special-body4"
                        />
                    </li>

                    <li>
                        <BaseTypography
                            text="Экскурсия в музей-макет “Петровская акватория”."
                            type="special-body4"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <div class="circle">
            <img src="@/assets/images/tours/mini/1.png" />
        </div>

        <div class="circle">
            <img src="@/assets/images/tours/mini/2.png" />
        </div>

        <!-- Day 2 -->
        <div class="block px-10 py-6">
            <div class="flex flex-col gap-y-3 w-full">
                <BaseTypography
                    text="День 2"
                    type="special-body"
                    color="var(--primary-color)"
                />

                <ul class="list-disc pl-5">
                    <li>
                        <BaseTypography
                            text="Экскурсия в Исаакиевский собор."
                            type="special-body4"
                        />
                    </li>

                    <li>
                        <BaseTypography
                            text="Выезд в Царское село. Экскурсия в Екатерининский дворец."
                            type="special-body4"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex gap-x-[45px] mr-[150px] ml-auto items-center flex-row-reverse justify-end">
            <div class="circle">
                <img src="@/assets/images/tours/mini/3.png" />
            </div>

            <div class="circle">
                <img src="@/assets/images/tours/mini/4.png" />
            </div>

            <!-- Day 3 -->
            <div class="block px-10 py-6">
                <div class="flex flex-col gap-y-3 w-full">
                    <BaseTypography
                        text="День 3"
                        type="special-body"
                        color="var(--primary-color)"
                    />

                    <ul class="list-disc pl-5">
                        <li>
                            <BaseTypography
                                text="Отправление в Петергоф. Экскурсия по Нижнему парку с посещением Большого дворца и малого музея."
                                type="special-body4"
                            />
                        </li>

                        <li>
                            <BaseTypography
                                text="Экскурсия в музей Фаберже."
                                type="special-body4"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="w-[250px]"></div>

        <div class="circle mt-[20px]">
            <img src="@/assets/images/tours/mini/5.png" />
        </div>

        <div class="circle mt-[20px]">
            <img src="@/assets/images/tours/mini/6.png" />
        </div>

        <!-- Day 4 -->
        <div class="block px-10 py-6 mt-[20px] !h-[222px]">
            <div class="flex flex-col gap-y-3 w-full">
                <BaseTypography
                    text="День 4"
                    type="special-body"
                    color="var(--primary-color)"
                />

                <ul class="list-disc pl-5">
                    <li>
                        <BaseTypography
                            text="Выезд в Кронштадт."
                            type="special-body4"
                        />
                    </li>

                    <li>
                        <BaseTypography
                            text="Посещение с экскурсией музея Эрмитаж."
                            type="special-body4"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex gap-x-[45px] mr-[150px] ml-auto items-center flex-row-reverse justify-end">
            <div class="circle mt-[86px]">
                <img src="@/assets/images/tours/mini/7.png" />
            </div>

            <div class="circle mt-[86px]">
                <img src="@/assets/images/tours/mini/8.png" />
            </div>

            <div class="circle mt-[86px]">
                <img src="@/assets/images/tours/mini/9.png" />
            </div>

            <!-- Day 5 -->
            <div class="block px-10 py-6 mt-[86px] !h-[170px]">
                <div class="flex flex-col gap-y-3 w-full">
                    <BaseTypography
                        text="День 5"
                        type="special-body"
                        color="var(--primary-color)"
                    />

                    <ul class="list-disc pl-5">
                        <li>
                            <BaseTypography
                                text="Экскурсия в музей-усадьбу Державина"
                                type="special-body4"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <img
            src="@/assets/svg/curved-right.svg"
            class="absolute top-[150px] left-[150px]"
        />

        <img
            src="@/assets/svg/curved-left.svg"
            class="absolute top-[466px] left-0"
        />

        <img
            src="@/assets/svg/curved-right.svg"
            class="absolute top-[783px] left-[150px]"
        />
    </div>
</template>

<style scoped>
.block {
    @apply relative z-10 h-[300px] w-[300px] rounded-[50px] border-[3px] border-[var(--primary-color)] bg-[var(--base-white)];
}

.circle {
    @apply h-[148px] w-[148px] rounded-full bg-slate-200 z-10;
}

.circle > img {
    object-fit: cover;
    display: block;
    width: 100%;
}
</style>
