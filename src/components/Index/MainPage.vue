<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';

import { useI18n } from 'vue-i18n';
import BaseButton from '../common/BaseButton.vue';

const { t } = useI18n();
</script>

<template>
    <section class="header-section">
        <div class="contacts flex justify-end gap-x-10 mr-[214px] mb-[140px]">
            <a href="tel:+79112660098">
                <BaseTypography
                    text="+7 (911) 266-00-98"
                    type="footnote"
                    color="var(--base-white)"
                />
            </a>

            <a href="tel:+78122070350">
                <BaseTypography
                    text="+7 (812) 207-03-50"
                    type="footnote"
                    color="var(--base-white)"
                />
            </a>

            <a href="mailto:info@rvm-spb.ru">
                <BaseTypography
                    text="info@rvm-spb.ru"
                    type="footnote"
                    color="var(--base-white)"
                />
            </a>
        </div>

        <div class="px-[120px]">
            <BaseTypography
                :text="t('main-page.subtitle')"
                type="title2"
                color="var(--base-white)"
                class="mb-3"
            />

            <div class="mb-[140px]">
                <div class="mb-6">
                    <BaseTypography
                        text="Р"
                        type="headline"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="еализуем"
                        type="headline2"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>

                <div class="pl-[56px] mb-6">
                    <BaseTypography
                        text="В"
                        type="headline"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="аши"
                        type="headline2"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>

                <div class="pl-[112px]">
                    <BaseTypography
                        text="М"
                        type="headline"
                        tag="span"
                        color="var(--primary-color)"
                    />

                    <BaseTypography
                        text="ечты"
                        type="headline2"
                        tag="span"
                        color="var(--base-white)"
                    />
                </div>
            </div>

            <BaseButton
                text="Оставить заявку"
                type="subtitle4"
                color="var(--base-white)"
                ui="secondary"
            />
        </div>
    </section>
</template>

<style scoped>
.header-section {
    background-color: #ccc;
    width: 100%;
    height: 100vh;
}

.contacts {
    margin-top: 170px;
}
</style>
