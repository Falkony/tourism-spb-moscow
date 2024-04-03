<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import Form from '@/components/Index/Form.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const toggle = ref<boolean>(false);

const toggleForm = () => (toggle.value = !toggle.value);
</script>

<template>
    <div class="py-[74px]">
        <div class="pl-[39px] pr-[124px]">
            <div class="flex flex-col gap-y-6">
                <BaseTypography
                    :text="t('main-page.subtitle')"
                    type="title2-m"
                    color="var(--base-white)"
                />

                <div class="flex flex-col gap-y-5">
                    <div>
                        <BaseTypography
                            :text="t('main-page.tagline.text-1.first')"
                            type="headline-m"
                            tag="span"
                            color="var(--primary-color)"
                        />

                        <BaseTypography
                            :text="t('main-page.tagline.text-1.second')"
                            type="headline2-m"
                            tag="span"
                            color="var(--base-white)"
                        />
                    </div>

                    <div class="pl-4">
                        <BaseTypography
                            :text="t('main-page.tagline.text-2.first')"
                            type="headline-m"
                            tag="span"
                            color="var(--primary-color)"
                        />

                        <BaseTypography
                            :text="t('main-page.tagline.text-2.second')"
                            type="headline2-m"
                            tag="span"
                            color="var(--base-white)"
                        />
                    </div>

                    <div class="pl-8">
                        <BaseTypography
                            :text="t('main-page.tagline.text-3.first')"
                            type="headline-m"
                            tag="span"
                            color="var(--primary-color)"
                        />

                        <BaseTypography
                            :text="t('main-page.tagline.text-3.second')"
                            type="headline2-m"
                            tag="span"
                            color="var(--base-white)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center mb-[84px]">
        <BaseButton
            :text="t('main-page.submit')"
            type="subtitle4-m"
            ui="secondary"
            color="var(--base-white)"
            @click="toggleForm"
        />
    </div>

    <div
        class="show fixed bg-[var(--bg-color)] inset-0 overflow-scroll z-50"
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
