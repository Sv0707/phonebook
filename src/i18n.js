import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../src/locales/en/translation.json';
import translationRU from '../src/locales/ru/translation.json';
import translationUK from '../src/locales/uk/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uk: {
    translation: translationUK
  }
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;