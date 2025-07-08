import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { common, header } from "./locales";

const resources = {
  en: {
    common: common,
    header: header,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["common", "header"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
