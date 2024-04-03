<script setup lang="ts">
import { ref } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useI18n } from 'vue-i18n';

const cookies = useCookies(['agreement']);
const show = ref<boolean>(true);

const { t } = useI18n();

const onLoad = () => {
    const agreement = cookies.get('agreement');

    if (!agreement) {
        show.value = true;
        return;
    }

    show.value = false;
    return;
};

const acceptAgreement = () => {
    cookies.set('agreement', '1');
    show.value = false;
};

onLoad();
</script>

<template>
    <div
        v-if="show"
        class="fixed bottom-0 left-0 right-0 bg-[var(--bg-color)] w-full mx-auto border-t z-50"
    >
        <div class="flex flex-col px-10 py-8 w-full">
            <div class="flex flex-col l:flex-row l:items-center l:gap-x-10 gap-y-5">
                <div class="flex items-center gap-x-9">
                    <div
                        class="border border-[var(--secondary-color)] rounded-[100px] text-center cursor-pointer px-6 py-2 w-full"
                        @click="acceptAgreement"
                    >
                        <BaseTypography
                            :text="t('cookie.button')"
                            type="caption"
                            color="var(--secondary-color)"
                        />
                    </div>

                    <div
                        class="cursor-pointer l:absolute l:top-[50%] l:translate-y-[-50%] l:right-6"
                        @click="show = false"
                    >
                        <img src="@/assets/svg/close_black.svg" />
                    </div>
                </div>

                <div>
                    <BaseTypography
                        :text="t('cookie.text.first')"
                        type="caption"
                        tag="span"
                    />

                    <BaseTypography
                        text="cookie "
                        type="caption"
                        tag="span"
                        color="var(--secondary-color)"
                    />

                    <BaseTypography
                        :text="t('cookie.text.second')"
                        type="caption"
                        tag="span"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
