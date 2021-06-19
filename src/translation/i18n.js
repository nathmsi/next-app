import i18n from "i18next";
//import detector from "i18next-browser-languagedetector";
//import LanguageDetector from 'i18next-browser-languagedetector';


import translationEN from './en.json';
import translationFR from './fr.json';
import translationHE from './he.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  he: {
    translation: translationHE
  }
};

i18n
  .init({
    resources,
    lng: "he",
    fallbackLng: "he", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;