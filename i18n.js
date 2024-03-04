import { createI18n } from 'vue-i18n';
import ru from './src/locales/ru';
import en from './src/locales/en';

const messages = {
    en,
    ru,
};

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages,
});

export default i18n;
