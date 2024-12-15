<template>
    <div class="container mx-auto p-4">
        <BaseReturn
            text="Как заказать и оплатить"
            class="mb-8"
        />

        <BaseTypography
            text="Как заказать и оплатить экскурсию или тур"
            type="subtitle2"
            color="var(--primary-color)"
            class="subtitle"
        />
        <ul class="step-list">
            <li class="step-item">
                <BaseTypography
                    text="1 шаг: отправить заявку."
                    type="body2"
                    class="subtitle"
                />
                <BaseTypography
                    tag="p"
                    text="Забронировать места на экскурсию вы можете следующим образом:"
                    type="body"
                />

                <BaseTypography
                    text="нажать кнопку «ЗАБРОНИРОВАТЬ» в описании экскурсии;"
                    type="body"
                />

                <BaseTypography
                    text="позвонить по телефону +7 (812) 207-03-50;"
                    type="body"
                />

                <BaseTypography
                    text="отправить запрос по электронной почте info@rvm-spb.ru."
                    type="body"
                />
            </li>
            <li class="step-item">
                <BaseTypography
                    text="2 шаг: оплатить заказ."
                    type="body2"
                    class="subtitle"
                />
                <BaseTypography
                    tag="p"
                    text="У вас есть 2 способа сделать это:"
                    type="body"
                />

                <BaseTypography
                    tag="p"
                    text="Удалённо, через различные системы оплат. После бронирования и выбора способа оплаты специалист вышлет вам подробную информацию по дальнейшем действиям."
                    type="body"
                />

                <BaseTypography
                    tag="p"
                    text="Подъехать заранее к нам в офис и оплатить наличными или по картам VISA, Mastercard, МИР. Наш офис в Бизнес центре 'СИТИ', ул. Садовая д.12, офис № 3 на 3 этаже."
                    type="body"
                />
            </li>
            <li class="step-item">
                <BaseTypography
                    text="Способы оплаты удаленно:"
                    type="body2"
                    class="subtitle"
                />

                <BaseTypography
                    tag="p"
                    text="1) С помощью банковских карт VISA, Mastercard, МИР. Для того, чтобы оплатить с помощью банковской карты, необходимо указать свой адрес электронной почты (либо при составлении заявки, либо при заявке по телефону). На указанный адрес наш специалист отправит вам ссылку, пройдя по которой, вы сможете оплатить экскурсию или тур. После оплаты информация по заказу будет отправлена на этот же адрес — или же в виде смс-сообщения на телефон."
                    type="body"
                />

                <BaseTypography
                    tag="p"
                    text="2) Используя банковские реквизиты туроператора ООО 'РВМ'. При выборе этого способа оплаты на указанный в заявке способ связи придет счет с суммой к оплате. После его получения необходимо оплатить счет, используя банковские реквизиты компании. Полученный чек нужно прислать на почту info@rvm-spb.ru."
                    type="body"
                />
            </li>
            <li class="step-item">
                <BaseTypography
                    text="Сроки оплаты экскурсии"
                    type="body2"
                    class="subtitle"
                />
                <BaseTypography
                    tag="p"
                    text="Бронирование экскурсии должно быть оплачено не позднее чем за 3 дня до ее проведения."
                    type="body"
                />
                <BaseTypography
                    tag="p"
                    text="!Наш специалист отправит вам напоминание о крайнем сроке оплаты бронирования."
                    type="body"
                />
            </li>
            <li class="step-item">
                <BaseTypography
                    text="Сроки оплаты тура"
                    type="body2"
                    class="subtitle"
                />
                <BaseTypography
                    tag="p"
                    text="Сроки оплаты тура указываются в договоре, который заключается после подтверждении бронирования тура."
                    type="body"
                />
            </li>
            <li class="step-item">
                <BaseTypography
                    text="Условия отмены бронирования экскурсии"
                    type="body2"
                    class="subtitle"
                />
                <BaseTypography
                    tag="p"
                    text="Отмена бронирования экскурсии осуществляется не позднее чем за 7 дня до ее проведения."
                    type="body"
                />
                <BaseTypography
                    tag="p"
                    text="Сроки аннуляций и штрафы по сборным экскурсиям определяются индивидуально и будут прописаны в договоре. Размер штрафа равняется фактически понесенным затратам. В случае частичной аннуляции услуг указанные штрафные санкции применяются к стоимости аннулированной части услуг."
                    type="body"
                />
            </li>
            <li class="step-item">
                <BaseTypography
                    text="Условия отмены бронирования тура"
                    type="body2"
                    class="subtitle"
                />
                <BaseTypography
                    tag="p"
                    text="Условия отмены бронирования указываются в договоре, который заключается после подтверждении бронирования тура."
                    type="body"
                />
            </li>
        </ul>

        <BaseTypography
            text="Банковские реквизиты"
            type="subtitle2"
            color="var(--primary-color)"
            class="mb-[35px]"
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
            <div class="item">
                <BaseTypography
                    text="СБЕРБАНК"
                    type="body2"
                />
                <BaseTypography
                    text="Получатель: ООО «РВМ»"
                    type="body"
                />
                <BaseTypography
                    text="ОГРН: 1157847393373 ИНН:7840042552 КПП: 784101001"
                    type="body"
                />
                <BaseTypography
                    text="Банковские реквизиты: Северо-Западный банк ПАО «Сбербанк»"
                    type="body"
                />
                <BaseTypography
                    text="Р/с 40702810655000057947 К/с 30101810500000000653"
                    type="body"
                />
                <BaseTypography
                    text="БИК 044030653 ИНН банка 7707083893"
                    type="body"
                />
            </div>
            <div class="item">
                <BaseTypography
                    text="БАНК САНКТ-ПЕТЕРБУРГ"
                    type="body2"
                />
                <BaseTypography
                    text="Получатель: ООО «РВМ»"
                    type="body"
                />
                <BaseTypography
                    text="ОГРН: 1157847393373  ИНН:7840042552  КПП: 784101001"
                    type="body"
                />
                <BaseTypography
                    text="Банковские реквизиты: ПАО БАНК «САНКТ-ПЕТЕРБУРГ»"
                    type="body"
                />
                <BaseTypography
                    text="Р/с: 40702810790480003568 К/с: 30101810900000000790"
                    type="body"
                />
                <BaseTypography
                    text="БИК: 044030790 ИНН банка: 7831000027"
                    type="body"
                />
            </div>
            <div class="item">
                <BaseTypography
                    text="ВОЗВРАТ ОПЛАТЫ"
                    type="body2"
                />
                <BaseTypography
                    text="Если у Вас появились причины для изменения условий Вашего бронирования или отмены тура, по Вашему заявлению вернём полную стоимость оплаченного Вами тура, или его часть, за вычетом фактически понесённых расходов и в зависимости от сроков отмены. Возврат рассматривается и рассчитывается индивидуально в каждом конкретном случае, в соответствии с условиями Вашего договора и условиями банка. Возврат переведённых денежных средств производится на Ваш банковский счёт в течении 5-30 рабочих дней (срок зависит от банка, который выдал Вам карту)."
                    type="body"
                    tag="p"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseReturn from '@/components/common/BaseReturn.vue';
import BaseTypography from '@/components/common/BaseTypography.vue';
</script>

<style scoped>
.container {
    max-width: 1126px;
}

.subtitle {
    margin-bottom: 35px;
}

.step-list {
    list-style-type: disc;
}

.step-item {
    margin-bottom: 35px;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.item {
    margin-bottom: 24px;
}
</style>
