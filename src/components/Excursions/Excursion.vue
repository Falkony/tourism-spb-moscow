<script setup lang="ts">
import BaseAccordion from '@/components/common/BaseAccordion.vue';
import ReturnButton from '@/components/common/ReturnButton.vue';
import Photo from './Photo.vue';
</script>

<template>
    <div class="flex flex-col flex-1 mt-[149px]">
        <ReturnButton
            text="О чем молчат дворы Васильевского острова"
            class="mb-10"
        />

        <Photo />

        <BaseAccordion
            title="test title"
            class="max-w-[1126px] mx-auto"
            disabled
        >
            <template #default>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum officia perspiciatis accusantium
                eos ad aliquid explicabo consequuntur qui impedit culpa nesciunt necessitatibus aliquam fugit, ab
                tenetur voluptates, animi numquam?
            </template>
        </BaseAccordion>
    </div>
</template>

<style scoped></style>
