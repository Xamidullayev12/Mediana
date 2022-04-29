import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector'


import en from "./en/tanslation.json"
import ru from "./ru/translation.json"
import uz from "./uz/translation.json"


i18n.use(initReactI18next).init({
  lng: 'uz',
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    uz: {
      translation: uz,
    },
  }
})



export default i18n;