<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { vMaska } from 'maska';
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import type { ContactFormType } from '@/types/ContactFormType';

const { width } = useWindowSize();
const { t } = useI18n();

const options = { mask: '+7 (###) ###-##-##' };

const form = ref<ContactFormType>({} as ContactFormType);
const agreement = ref<boolean>(false);
const sended = ref<boolean>(false);

const sendForm = () => {
    // ToDo: подключить PhPMailer.
    console.log('form:', form.value);
    sended.value = true;
};

const isDisabled = computed(() => {
    const phoneValid = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(form.value.phone);
    return form.value.name !== '' && phoneValid && agreement.value;
});
</script>

<template>
    <div class="bg-[var(--primary-color)] px-10 py-[60px]">
        <div v-if="!sended">
            <div class="flex flex-col gap-y-5 mb-[64px] px-[53px] s:px-12">
                <BaseTypography
                    :text="t('contacts.form.title')"
                    :type="width > 768 ? 'subtitle' : 'title-m'"
                    color="var(--base-white)"
                    class="max-w-[200px] s:max-w-max"
                />

                <BaseTypography
                    :text="t('contacts.form.subtitle')"
                    :type="width > 768 ? 'special-body3' : 'body3-m'"
                    color="var(--base-white)"
                    class="max-w-[200px] s:max-w-max"
                />
            </div>

            <div class="flex flex-wrap justify-center s:justify-start s:px-12 gap-y-9 s:gap-x-[130px] mb-[64px]">
                <div class="flex flex-col w-[204px]">
                    <label for="name">
                        <BaseTypography
                            :text="t('contacts.form.name')"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--base-white)"
                        />
                    </label>

                    <input
                        v-model="form.name"
                        id="name"
                        name="name"
                        placeholder="Иван"
                        class="edit bk"
                        type="text"
                        required
                    />
                </div>

                <div class="flex flex-col w-[213px]">
                    <label for="email">
                        <BaseTypography
                            :text="t('contacts.form.email')"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--base-white)"
                        />
                    </label>

                    <input
                        v-model="form.email"
                        type="email"
                        id="email"
                        placeholder="ivan.ivanov@mail.ru"
                        name="email"
                        class="edit bk"
                    />
                </div>

                <div class="flex flex-col w-[204px]">
                    <label for="phone">
                        <BaseTypography
                            :text="t('contacts.form.phone')"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--base-white)"
                        />
                    </label>

                    <input
                        v-model="form.phone"
                        v-maska:[options]
                        placeholder="+7(000)000-00-00"
                        type="tel"
                        id="phone"
                        name="phone"
                        class="edit bk"
                        required
                    />
                </div>

                <div class="flex flex-col w-[213px]">
                    <label for="text">
                        <BaseTypography
                            :text="t('contacts.form.message')"
                            :type="width > 768 ? 'special-body2' : 'body2-m'"
                            color="var(--base-white)"
                        />
                    </label>

                    <input
                        v-model="form.text"
                        id="text"
                        name="text"
                        placeholder="Ваше сообщение..."
                        type="text"
                        class="edit bk"
                    />
                </div>
            </div>

            <div class="flex flex-col m:flex-row gap-y-16 gap-x-9">
                <div class="grid grid-cols-[24px_auto] s:grid-cols-[40px_auto] gap-x-6">
                    <div
                        class="h-6 w-6 s:h-10 s:w-10 bg-[var(--base-white)] rounded-full cursor-pointer"
                        :class="{ 'border-[4px] border-[--secondary-color]': agreement }"
                        @click="() => (agreement = !agreement)"
                    />

                    <div>
                        <BaseTypography
                            :text="t('contacts.form.policy.first')"
                            :type="width > 768 ? 'caption' : 'caption-m'"
                            color="var(--base-white)"
                            tag="span"
                        />

                        <router-link to="/consent">
                            <BaseTypography
                                :text="t('contacts.form.policy.second')"
                                :type="width > 768 ? 'caption' : 'caption-m'"
                                class="underline"
                                color="var(--base-white)"
                                tag="span"
                            />
                        </router-link>

                        <BaseTypography
                            :text="t('contacts.form.policy.third')"
                            :type="width > 768 ? 'caption' : 'caption-m'"
                            color="var(--base-white)"
                            tag="span"
                        />

                        <router-link to="/policy">
                            <BaseTypography
                                :text="t('contacts.form.policy.fourth')"
                                :type="width > 768 ? 'caption' : 'caption-m'"
                                class="underline"
                                color="var(--base-white)"
                                tag="span"
                            />
                        </router-link>
                    </div>
                </div>

                <div class="flex justify-center">
                    <BaseButton
                        :text="t('contacts.form.send')"
                        :type="width > 768 ? 'subtitle4' : 'subtitle4-m'"
                        :color="!isDisabled ? 'var(--base-white)' : 'var(--primary-color)'"
                        :ui="!isDisabled ? 'disabled' : 'white'"
                        padding-x="85"
                        padding-y="18"
                        :disabled="!isDisabled"
                        @click="sendForm"
                    />
                </div>
            </div>
        </div>

        <div
            v-else
            class="flex flex-col items-center justify-center gap-y-5 h-[862px] l:h-[480px]"
        >
            <BaseTypography
                :text="t('contacts.form.thanks.first')"
                type="subtitle2-m"
                color="var(--base-white)"
            />

            <BaseTypography
                :text="t('contacts.form.thanks.second')"
                type="subtitle2-m"
                color="var(--base-white)"
                class="text-center"
            />
        </div>
    </div>
</template>

<style scoped>
.edit {
    border-bottom: 2px solid var(--base-white);
    color: var(--base-white);
    font-size: 20px;
    background: #fff;
}
.bk {
    background: transparent;
    outline: none;
}
</style>
