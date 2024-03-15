<script setup lang="ts">
import BaseTypography from './BaseTypography.vue';
</script>

<template>
    <div class="item">
        <div class="h-[234px] w-full rounded-t-[50px] bg-slate-400" />

        <div
            class="px-[30px] pt-3 border-x-[3px] border-b-[3px] border-x-[var(--primary-color)] border-b-[var(--primary-color)] border-t-none rounded-b-[50px]"
        >
            <BaseTypography
                text="Туры в Санкт-Петербург"
                type="special-body"
                color="var(--primary-color)"
                class="mb-3"
            />

            <img
                src="@/assets/svg/line-small.svg"
                class="w-[279px] mb-[20px]"
            />

            <div class="flex flex-row mb-[35px]">
                <BaseTypography
                    text="Культурная столица: дворцы, мосты и каналы"
                    type="special-body3"
                    color="var(--black-color)"
                />

                <img
                    src="@/assets/svg/arrow-right.svg"
                    class="cursor-pointer"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 392px;
    width: 428px;
}
</style>
