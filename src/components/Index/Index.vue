<script setup lang="ts">
import FirstSection from './Sections/FirstSection.vue';
import SecondSection from './Sections/SecondSection.vue';
import ThirdSection from './Sections/ThirdSection.vue';
import FourthSection from './Sections/FourthSection.vue';
import FifthSection from './Sections/FifthSection.vue';
import SixthSection from './Sections/SixthSection.vue';
import SeventhSection from './Sections/SeventhSection.vue';
import EighthSection from './Sections/EighthSection.vue';
import NinthSection from './Sections/NinthSection.vue';
</script>

<template>
    <section class="header-section">
        <FirstSection />
    </section>

    <section class="mb-[92px]">
        <SecondSection />
    </section>

    <section class="mb-[92px]">
        <ThirdSection />
    </section>

    <section class="mb-[104px]">
        <FourthSection />
    </section>

    <section>
        <FifthSection />
    </section>

    <section class="mb-[92px]">
        <SixthSection />
    </section>

    <section class="mb-[92px]">
        <SeventhSection />
    </section>

    <section class="mb-6">
        <EighthSection />
    </section>

    <section class="relative mb-[92px]">
        <NinthSection />
    </section>
</template>

<style scoped>
.header-section {
    background: url('@/assets/images/bg-header.png');
    background-color: var(--black-color);
    background-position: right center;
    background-position: 10%;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    margin-top: 182px;
}
</style>
