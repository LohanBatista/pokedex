import I18n from 'i18n-js';

import pt from './pt-BR';

const setLanguageToI18n = () => {
  I18n.translations = {
    pt_BR: pt,
  };

  I18n.locale = 'pt_BR';
  I18n.defaultLocale = 'pt_BR';
};

setLanguageToI18n();

export const translate = <T,>(key: string, params?: T) => I18n.t(key, params);
