import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import fr from "./translations/fr.json";

const languages = ["en", "fr"];

const options = {
  order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  // order: ['querystring', 'navigator'],
  // lookupQuerystring: 'lng'
}

i18n.use(detector).use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
  // lng: "fr",
  detection: options,
  whitelist: languages,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
