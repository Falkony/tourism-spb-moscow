<script setup lang="ts">
import BaseAccordion from '@/components/common/BaseAccordion.vue';
</script>

<template>
    <div class="relative flex flex-1 mt-[149px]">
        <BaseAccordion
            title="test title"
            class="max-w-[1126px] mx-auto"
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
