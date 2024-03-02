import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/en';
import fr from './fr/fr';
import ar from './ar/ar';
import {I18nManager} from 'react-native';

import RNRestart from 'react-native-restart';
import {storage} from '../storage';
import {findBestLanguageTag} from 'react-native-localize';

const defaultLanguage = {languageTag: 'fr', isRTL: false};

export const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  ar: {
    translation: ar,
  },
};

const {languageTag, isRTL} =
  findBestLanguageTag(Object.keys(resources)) || defaultLanguage;

const i18n = {
  init: lng => {
    return new Promise((resolve, reject) => {
      i18next.use(initReactI18next).init(
        {
          compatibilityJSON: 'v3',
          resources,
          // debug: true,
          nsSeparator: false,
          lng: lng ?? 'fr',
          keySeparator: false,
          interpolation: {
            escapeValue: false,
          },
        },
        error => {
          if (error) {
            return reject(error);
          }
          return resolve(true);
        },
      );
    });
  },
  isRTL,
  t: i18next.t.bind(i18next),
  language: i18next.language,
  setLanguage: (language, isRTL) => {
    i18next.changeLanguage(language).then(() => {
      storage.set('language', language);
      if (isRTL !== I18nManager.isRTL) {
        I18nManager.forceRTL(isRTL);
        I18nManager.allowRTL(isRTL);
        setTimeout(async () => {
          RNRestart.restart();
        }, 200);
      }
    });
  },
};

export default i18n;
