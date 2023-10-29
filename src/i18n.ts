import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "@/locales/fr/app.json";
import en from "@/locales/en/app.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "en",
  resources,
});

export default i18n;
