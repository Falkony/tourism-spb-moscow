<script setup lang="ts"></script>

<template>
    <div
        class="relative flex flex-wrap gap-x-[45px] gap-y-[30px] items-center mt-[40px] px-[20px] max-w-[1126px] mx-auto w-full mb-[104px]"
    >
        <div class="block"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="block"></div>

        <div class="flex gap-x-[45px] mr-[150px] ml-auto items-center flex-row-reverse justify-end">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="block"></div>
        </div>

        <div class="w-[250px]"></div>
        <div class="circle mt-[-20px]"></div>
        <div class="circle mt-[-20px]"></div>
        <div class="block mt-[-20px]"></div>

        <div class="flex gap-x-[45px] mr-[150px] ml-auto items-center flex-row-reverse justify-end">
            <div class="circle mt-[-10px]"></div>
            <div class="circle mt-[-10px]"></div>
            <div class="circle mt-[-10px]"></div>
            <div class="block mt-[-10px]"></div>
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
</style>
