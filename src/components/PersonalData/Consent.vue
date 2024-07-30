<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseContainer from '@/components/common/BaseContainer.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import { useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const { width } = useWindowSize();
const { t } = useI18n();
</script>

<template>
    <div class="mt-[40px] l:mb-[104px]">
        <BaseReturn :text="t('consent.title')" />

        <BaseContainer>
            <BaseTypography
                :text="t('consent.text.1')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <ul class="list-disc mb-6 pl-5">
                <li>
                    <BaseTypography
                        :text="t('consent.text.2')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="https://rvm-spb.ru/contacts"
                        target="_blank"
                    >
                        <BaseTypography
                            text="https://rvm-spb.ru/contacts"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.3')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="https://rvm-spb.ru/"
                        target="_blank"
                    >
                        <BaseTypography
                            text="https://rvm-spb.ru/"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.4')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="https://rvm-spb.ru/categories/"
                        target="_blank"
                    >
                        <BaseTypography
                            text="https://rvm-spb.ru/categories/"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.5')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="https://rvm-spb.ru/excursion/"
                        target="_blank"
                    >
                        <BaseTypography
                            text="https://rvm-spb.ru/excursion/"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>
            </ul>

            <BaseTypography
                :text="t('consent.text.6')"
                :type="width > 768 ? 'body' : 'body-m'"
            />

            <BaseTypography
                :text="t('consent.text.7')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <div class="mb-6">
                <BaseTypography
                    :text="t('consent.text.8')"
                    :type="width > 768 ? 'body' : 'body-m'"
                    class="indent-8"
                    tag="span"
                />

                <router-link to="/policy">
                    <BaseTypography
                        :text="t('consent.text.9')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        class="underline"
                        tag="span"
                    />
                </router-link>
            </div>

            <BaseTypography
                :text="t('consent.text.10')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <BaseTypography
                :text="t('consent.text.11')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <BaseTypography
                :text="t('consent.text.12')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <ul class="list-disc mb-6 pl-5">
                <li>
                    <BaseTypography
                        :text="t('consent.text.13')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.14')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.15')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.16')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        :text="t('consent.text.17')"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>
            </ul>

            <BaseTypography
                :text="t('consent.text.18')"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8"
            />
        </BaseContainer>
    </div>
</template>
