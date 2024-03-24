<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue';
import BaseContainer from '@/components/common/BaseContainer.vue';
import BaseReturn from '@/components/common/BaseReturn.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<template>
    <div class="mt-[40px] l:mb-[104px]">
        <BaseReturn text="Согласие на обработку персональных данных" />

        <BaseContainer>
            <BaseTypography
                text="Я, физическое лицо, сведения о котором указаны в заполненной мною формах:"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <ul class="list-disc mb-6 pl-5">
                <li>
                    <BaseTypography
                        text="«Контакты» "
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="http://www.rvm-spb.ru/contacts/"
                        target="_blank"
                    >
                        <BaseTypography
                            text="http://www.rvm-spb.ru/contacts/"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>

                <li>
                    <BaseTypography
                        text="«Заявка на экскурсию» "
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="http://www.rvm-spb.ru/p14/index.html"
                        target="_blank"
                    >
                        <BaseTypography
                            text="http://www.rvm-spb.ru/p14/index.html"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>

                <li>
                    <BaseTypography
                        text="«Заявка на сборный тур» "
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="http://www.rvm-spb.ru/p15/index.html"
                        target="_blank"
                    >
                        <BaseTypography
                            text="http://www.rvm-spb.ru/p15/index.html"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>

                <li>
                    <BaseTypography
                        text="«Заявка на бронирование отеля» "
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />

                    <a
                        href="http://www.rvm-spb.ru/contacts/"
                        target="_blank"
                    >
                        <BaseTypography
                            text="http://www.rvm-spb.ru/p16/index.html"
                            :type="width > 768 ? 'body' : 'body-m'"
                            tag="span"
                            class="underline"
                        />
                    </a>
                </li>
            </ul>

            <BaseTypography
                text="(далее - «Заявитель»), настоящим даю свое согласие на обработку ООО «РВМ» (ИНН 7840042552, 191025 С-Петербург, Поварской пер. 8 Лит. А пом. 1-Н) (далее – «Компания») следующих моих персональных данных: фамилия, имя, отчество, адрес проживания, адрес электронной почты, номер телефона сотовой связи, номер телефона городской телефонной сети (далее –«Персональные данные»), и подтверждаю, что давая такое согласие, я действую своей волей и в своем интересе."
                :type="width > 768 ? 'body' : 'body-m'"
            />

            <BaseTypography
                text="Согласие дается мной для цели связи со мной и предоставления мне информации, интересующей меня согласно заполненной мною форме «Обратной связи»."
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <div class="mb-6">
                <BaseTypography
                    text="Обработка Персональных данных Заявителя осуществляется Компанией в объеме, который необходим для достижения указанной выше цели, с соблюдением требований законодательства Российской Федерации в отношении конфиденциальности и обеспечения безопасности Персональных данных при их обработке, а также защиты обрабатываемых Персональных данных. Обработка Персональных данных Заявителя осуществляется компанией в строгом соответствии "
                    :type="width > 768 ? 'body' : 'body-m'"
                    class="indent-8"
                    tag="span"
                />

                <router-link to="/policy">
                    <BaseTypography
                        text="с Политикой обработки и защиты персональных данных в ООО «РВМ»"
                        :type="width > 768 ? 'body' : 'body-m'"
                        class="underline"
                        tag="span"
                    />
                </router-link>
            </div>

            <BaseTypography
                text="Заявитель подтверждает, что данное согласие действует в течении срока хранения Компанией Персональных данных Заявителя, установленного законодательством Российской Федерации."
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <BaseTypography
                text="Заявитель подтверждает, что данное согласие действует в течении срока хранения Компанией Персональных данных Заявителя, установленного законодательством Российской Федерации."
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <BaseTypography
                text="Заявитель вправе в любое время отозвать свое согласие путем подачи соответствующего письменного уведомления Компании, направленного по адресу местонахождения Компании не менее чем за месяц до даты прекращения обработки Персональных данных. При этом Заявитель уведомлен, что, в случае отзыва своего согласия на обработку Персональных данных, Компания может оказаться не в состоянии предоставить Заявителю информацию, запрошенную согласно форме «Обратной связи»."
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <BaseTypography
                text="Настоящее согласие предоставляется на осуществление любых действий в отношении Персональных данных, которые необходимы или желаемы для достижения указанной выше цели, включая, без ограничения:"
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8 mb-6"
            />

            <ul class="list-disc mb-6 pl-5">
                <li>
                    <BaseTypography
                        text="cмешанной обработки;"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        text="передача по внутренней сети;"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        text="передача по сети Интернет;"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        text="сбор, систематизацию, накопление, хранение, уточнение (обновление или изменение), использование, передача (предоставление, доступ), обезличивание, блокирование, уничтожение, удаление,"
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>

                <li>
                    <BaseTypography
                        text="а также осуществление любых иных действий с Персональными данными Заявителя в соответствии с действующим законодательством."
                        :type="width > 768 ? 'body' : 'body-m'"
                        tag="span"
                    />
                </li>
            </ul>

            <BaseTypography
                text="Я осознаю, что, нажимая на кнопку «Отправить» на странице «Обратной связи», я даю ООО «РВМ» свое согласие на обработку моих персональных данных на условиях, изложенных выше."
                :type="width > 768 ? 'body' : 'body-m'"
                class="indent-8"
            />
        </BaseContainer>
    </div>
</template>
