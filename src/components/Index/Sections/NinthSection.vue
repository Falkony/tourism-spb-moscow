<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseLine from '@/components/common/BaseLine.vue';
import Form from '@/components/Index/Form.vue';
import { ref } from 'vue';

const toggle = ref<boolean>(false);

const toggleForm = () => (toggle.value = !toggle.value);
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col items-center justify-center w-full mb-[64px] p-3">
            <div class="p-[10px] text-center">
                <BaseTypography
                    text="индивидуальный подход"
                    type="title-m"
                    class="mb-2"
                />

                <BaseLine width="291" />
            </div>

            <div class="p-[10px] text-center">
                <BaseTypography
                    text="профессионализм"
                    type="title-m"
                    class="mb-2"
                />

                <BaseLine width="220" />
            </div>

            <div class="p-[10px] text-center">
                <BaseTypography
                    text="надежность"
                    type="title-m"
                    class="mb-2"
                />

                <BaseLine width="136" />
            </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-y-12">
            <img
                src="@/assets/images/logo_btm.png"
                class="w-[187px]"
            />

            <BaseButton
                text="Оставить заявку"
                type="subtitle4-m"
                color="var(--base-white)"
                ui="primary-with-back"
                @click="toggleForm"
            />
        </div>
    </div>

    <div
        class="show fixed inset-0 overflow-hidden z-30"
        v-if="toggle"
    >
        <Form @close="toggleForm" />
    </div>
</template>

<style scoped>
.show {
    animation: 0.3s show ease-in-out;
}

@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
