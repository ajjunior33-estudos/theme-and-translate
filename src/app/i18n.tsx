import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ptBrTranslate from "./translate/pt-BR.json";
import enUSTranslate from "./translate/en-US.json";

const resources = {
  en: { home: enUSTranslate },
  pt: { home: ptBrTranslate },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "pt",
});

export default i18next;
