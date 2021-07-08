import { action, computed, makeObservable, observable } from 'mobx';

/**
 * Each key of this object is a language code
 * 'language code': 'value string'
 */
type MultiLangObject = { [key: string]: string };

type Language = {
  code: string;
  name: string;
};

const english = {
  code: 'en',
  name: 'English',
};

const russian = {
  code: 'ru',
  name: 'Русский',
};

export default class MultiLang {
  @observable
  languages: Language[] = [english, russian];

  @observable
  defaultLang: Language = english;

  @observable
  currentLang: Language = russian;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setCurrentLanguageByCode(code: string) {
    this.currentLang = this.languages.find((lang) => lang.code === code) ?? this.defaultLang;
  }

  /**
   * Retun text by current language if exist or by default language
   */
  text(multiLangObject: MultiLangObject) {
    return (
      multiLangObject[this.currentLang.code]
      ?? multiLangObject[this.defaultLang.code]
      ?? ''
    );
  }
}
