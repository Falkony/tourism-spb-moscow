<script setup lang="ts">
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';

const requisites = [
    {
        title: 'БАНК ТИНЬКОФФ',
        text: [
            'Получатель: ООО «РВМ»',
            'ОГРН: 1157847393373  ИНН:7840042552  КПП: 784101001',
            'Банковские реквизиты: АО «Тинькофф банк»',
            'Р/с 40702810510000967529',
            'К/c 30101810145250000974',
            'БИК 044525974 ИНН банка 7710140679',
        ],
    },
    {
        title: 'СБЕРБАНК',
        text: [
            'Получатель: ООО «РВМ»',
            'ОГРН: 1157847393373  ИНН:7840042552  КПП: 784101001',
            'Банковские реквизиты: Северо-Западный банк ПАО «Сбербанк»',
            'Р/с 40702810655000057947 К/с 30101810500000000653',
            'БИК 044030653 ИНН банка 7707083893',
        ],
    },
    {
        title: 'БАНК САНКТ-ПЕТЕРБУРГ',
        text: [
            'Получатель: ООО «РВМ»',
            'ОГРН: 1157847393373  ИНН:7840042552  КПП: 784101001',
            'Банковские реквизиты: ПАО БАНК «САНКТ-ПЕТЕРБУРГ»',
            'Р/с: 40702810790480003568 К/с:30101810900000000790',
            'БИК: 044030790 ИНН банка 7831000027',
        ],
    },
    {
        title: 'ВОЗВРАТ ОПЛАТЫ',
        text: [
            'Если у Вас появились причины для изменения условий Вашего бронирования или отмены тура, по Вашему заявлению вернём полную стоимость оплаченного Вами тура, или его часть, за вычетом фактически понесённых расходов и в зависимости от сроков отмены. Возврат рассматривается и рассчитывается индивидуально в каждом конкретном случае, в соответствии с условиями Вашего договора и условиями банка. Возврат переведённых денежных средств производится на Ваш банковский счёт в течении 5-30 рабочих дней (срок зависит от банка, который выдал Вам карту).',
        ],
    },
];
</script>

<template>
    <div class="my-[40px] px-10">
        <BaseReturn
            text="Реквизиты"
            class="!mb-[76px]"
        />

        <div class="list">
            <div class="item">
                <BaseTypography
                    text="Оплата по СБП"
                    type="body2"
                />

                <img
                    src="@/assets/images/QR.png"
                    alt="QR"
                    class="w-fit mb-4 pt-4"
                />

                <BaseTypography
                    text="Для оплаты отсканируйте QR-код в мобильном приложении банка или штатной камерой телефона"
                    type="body"
                />
            </div>

            <div
                v-for="requisite in requisites"
                :key="requisite.title"
                class="item"
            >
                <BaseTypography
                    :text="requisite.title"
                    type="body2"
                />

                <BaseTypography
                    v-for="string in requisite.text"
                    :key="string"
                    :text="string"
                    type="body"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 16px;
    max-width: 1126px;
    margin: 0 auto;
    padding-left: 24px;
}

.item {
    margin-bottom: 24px;
}
</style>
