<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="px-10 py-[92px]">
        <div class="flex flex-col items-center mb-12">
            <BaseButton
                text="О компании"
                type="subtitle-m"
                padding-x="24"
                padding-y="12"
                color="var(--black-color)"
                ui="primary"
            />
        </div>

        <div class="px-[22px] mb-4">
            <div>
                <BaseTypography
                    text="РВМ - "
                    type="subtitle-m"
                    color="var(--black-color)"
                    tag="span"
                />

                <BaseTypography
                    text="туроператор"
                    type="subtitle2-m"
                    color="var(--black-color)"
                    tag="span"
                />
            </div>

            <BaseTypography
                text="по международному въездному и"
                type="subtitle2-m"
                color="var(--black-color)"
            />

            <BaseTypography
                text="внутреннему туризму"
                type="subtitle2-m"
                color="var(--black-color)"
            />
        </div>

        <div class="img">
            <img src="@/assets/images/bronze_horseman.png" />
        </div>
    </div>

    <div class="flex flex-col gap-y-6 px-10 mb-10">
        <!-- 1 -->
        <div class="flex items-center gap-x-3">
            <img
                src="@/assets/svg/account_balance.svg"
                class="w-7 h-7"
            />

            <div class="grid grid-cols-[12px_auto] gap-x-2 items-center">
                <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                <BaseTypography
                    text="Наш номер в Едином Федеральном Реестре Туроператоров – РТО 018270"
                    type="body-m"
                />
            </div>
        </div>

        <!-- 2 -->
        <div class="flex items-center gap-x-3">
            <img
                src="@/assets/svg/union.svg"
                class="w-7 h-7"
            />

            <div class="grid grid-cols-[12px_auto] gap-x-2 items-center">
                <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                <BaseTypography
                    text="Являемся членами Лиги туроператоров Санкт-Петербурга"
                    type="body-m"
                />
            </div>
        </div>

        <!-- 3 -->
        <div class="flex items-center gap-x-3">
            <img
                src="@/assets/svg/safety.svg"
                class="w-7 h-7"
            />

            <div class="grid grid-cols-[12px_auto] gap-x-2 items-center">
                <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                <BaseTypography
                    text="Имеем прямые договоры с музеями, транспортными компаниями и отелями самых разных категорий"
                    type="body-m"
                />
            </div>
        </div>

        <!-- 4 -->
        <div class="flex items-center gap-x-3">
            <img
                src="@/assets/svg/credibility.svg"
                class="w-7 h-7"
            />

            <div class="grid grid-cols-[12px_auto] gap-x-2 items-center">
                <div class="h-3 w-3 bg-[var(--secondary-color)] rounded-full" />

                <BaseTypography
                    text="Соответствуем всем требованиям для участия в тендерах государственных и бюджетных организаций"
                    type="body-m"
                />
            </div>
        </div>
    </div>

    <!-- Two images in a row -->

    <div class="flex gap-x-1 items-center justify-center px-10 mb-10">
        <div>
            <img src="@/assets/images/tourism.png" />
        </div>

        <div>
            <img src="@/assets/images/league_second.png" />
        </div>
    </div>

    <!-- Кнопка переход на /about -->
    <div class="flex items-center justify-center px-10">
        <BaseButton
            text="Подробнее"
            type="subtitle4-m"
            color="var(--base-white)"
            padding-x="84"
            padding-y="18"
            ui="green"
            @click="router.push('/about')"
        />
    </div>
</template>

<style scoped>
.img {
    background: linear-gradient(to bottom, transparent 50%, var(--primary-color) 50%);
}
</style>
