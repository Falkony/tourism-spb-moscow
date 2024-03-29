<script setup lang="ts">
import { ref, reactive } from 'vue';
import { vMaska } from 'maska';
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const options = { mask: '+7 (###) ###-##-##' };

const agreement = ref(false);
const form = reactive({
    phone: '',
});
</script>

<template>
    <section class="mb-[104px]">
        <div class="p-3 mb-[76px]">
            <BaseTypography
                text="Бронирование экскурсии"
                type="subtitle"
            />
        </div>

        <div class="border-[3px] border-[var(--secondary-color)] rounded-[100px] p-16 w-full">
            <div class="p-3 mb-[56px]">
                <BaseTypography
                    text="Бронирование"
                    type="subtitle"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-[56px] p-3 mb-16">
                <div>
                    <BaseTypography
                        text="Общая информация"
                        type="special-body"
                        class="mb-[46px]"
                    />

                    <div class="flex flex-col">
                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Название экскурсии*"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                name="excursion_name"
                                type="text"
                                class="edit bk"
                                required
                            />
                        </div>

                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Дата экскурсии*"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                name="excursion_data"
                                type="date"
                                class="edit bk"
                                required
                            />
                        </div>

                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Количество взрослых*"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                name="adult"
                                type="number"
                                class="edit bk"
                                required
                            />
                        </div>

                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Количество детей"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                name="childs"
                                type="number"
                                class="edit bk"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <BaseTypography
                        text="Обратная связь"
                        type="special-body"
                        class="mb-[46px]"
                    />

                    <div class="flex flex-col">
                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="ФИО*"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                name="fio"
                                type="text"
                                class="edit bk"
                                required
                            />
                        </div>

                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Номер телефона*"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                v-model="form.phone"
                                v-maska:[options]
                                placeholder="+7(000)000-00-00"
                                name="phone"
                                type="text"
                                class="edit bk"
                                required
                            />
                        </div>

                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Электронная почта"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <input
                                name="email"
                                type="email"
                                class="edit bk"
                                required
                            />
                        </div>

                        <div class="flex gap-x-[52px] mb-4">
                            <label>
                                <BaseTypography
                                    text="Способ связи"
                                    type="special-body2"
                                    class="w-[200px]"
                                />
                            </label>

                            <select
                                name="select"
                                class="bk edit"
                            >
                                <!--Supplement an id here instead of using 'name'-->
                                <option value="value1">Значение 1</option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-x-6 px-6 mb-16">
                <div
                    class="h-10 w-10 bg-[var(--base-white)] border-[4px] border-[--primary-color] rounded-full cursor-pointer"
                    :class="{ 'border-[4px] !border-[--secondary-color]': agreement }"
                    @click="() => (agreement = !agreement)"
                />

                <div>
                    <BaseTypography
                        text="Я согласен(а) на обработку персональных данных на условиях, изложенных в "
                        type="caption"
                        tag="span"
                    />

                    <router-link to="/consent">
                        <BaseTypography
                            text="Согласии на обработку персональных данных "
                            type="caption"
                            class="underline"
                            tag="span"
                        />
                    </router-link>

                    <BaseTypography
                        text="и "
                        type="caption"
                        tag="span"
                    />

                    <router-link to="/policy">
                        <BaseTypography
                            text="Политике."
                            type="caption"
                            class="underline"
                            tag="span"
                        />
                    </router-link>
                </div>
            </div>

            <div class="flex justify-center">
                <BaseButton
                    text="Забронировать"
                    type="subtitle4"
                    color="var(--base-white)"
                    ui="primary-with-back"
                    class="cursor-pointer"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.edit {
    border-bottom: 2px solid var(--primary-color);
    color: var(--black-color);
    font-size: 20px;
    background: #fff;
}
.bk {
    background: transparent;
    outline: none;
    width: 184px;
}
</style>
