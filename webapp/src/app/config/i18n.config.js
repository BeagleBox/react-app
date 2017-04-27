import { addLocaleData } from "react-intl"
import pt from "react-intl/locale-data/pt"

addLocaleData([...pt]);

const i18nData = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
      }
    }
  }
};

export default i18nData;
