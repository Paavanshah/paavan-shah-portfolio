import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enIN from './locales/en-IN.json';
import enUS from './locales/en-US.json';
import deTranslation from './locales/de.json';
import jaTranslation from './locales/ja.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en-IN': { translation: enIN },
      'en-US': { translation: enUS },
      'de': { translation: deTranslation },
      'ja': { translation: jaTranslation }
    },
    lng: 'en-IN', // Set Indian English (with original names) as default
    fallbackLng: 'en-US',
    interpolation: { escapeValue: false }
  });

export default i18n;