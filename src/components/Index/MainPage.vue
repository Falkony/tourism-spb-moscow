<script setup lang="ts">
import BaseTypography from '../common/BaseTypography.vue';
</script>

<template>
    <section class="header-section">
        <div class="contacts">
            <div class="flex flex-row gap-x-[40px]">
                <a href="tel:+79112660098">+7 (911) 266-00-98</a>
                <a href="tel:+78122070350">+7 (812) 207-03-50</a>
                <a href="mailto:info@rvm-spb.ru">info@rvm-spb.ru</a>
            </div>
        </div>

        <div class="title_wrapper">
            <div class="text-white text-[40px]">
                <BaseTypography
                    text="Туроператор"
                    type="caption2"
                    color="#fff"
                />
            </div>
            <div>
                <div>
                    <span class="text-[var(--primary-color)] text-8xl font-bold">Р</span>
                    <span class="text-white text-6xl font-bold uppercase">еализуем</span>
                </div>

                <div class="pl-12">
                    <span class="text-[var(--primary-color)] text-8xl font-bold">В</span>
                    <span class="text-white text-6xl font-bold uppercase">аши</span>
                </div>

                <div class="pl-24">
                    <span class="text-[var(--primary-color)] text-8xl font-bold">М</span>
                    <span class="text-white text-6xl font-bold uppercase">ечты</span>
                </div>
            </div>
        </div>

        <div class="absolute bottom-[287px] pl-28 pr-32 cursor-pointer">
            <div class="h-20 px-16 bg-[var(--white-color)] rounded-full flex flex-col item-center justify-center">
                <div class="text-white text-xl font-semibold font-['Ysabeau Office'] uppercase">оставить заявку</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.header-section {
    background-image: url('../../assets/images/bg-header.png');
    background-repeat: no-repeat;
    background-size: cover;

    @apply flex-1 relative;
}

.contacts {
    @apply absolute top-[170px] right-[214px] text-white;
}

.title_wrapper {
    @apply flex flex-col gap-3 absolute top-[333px] pl-28 pr-32 w-full;
}
</style>
