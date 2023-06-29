export interface Locale {
  id: string;
  desc: string;
  icon: string;
}

export const LOCALES: Locale[] = [
  { id: 'it', desc: 'Italiano', icon: '🇮🇹' },
  { id: 'en', desc: 'English', icon: '🇺🇸' },
];

export const getUsersLocale = (defaultValue: string): string => {
  if (
    typeof window === 'undefined' ||
    typeof window.navigator === 'undefined'
  ) {
    return defaultValue;
  }
  const wn = window.navigator as any;
  let lang: string = wn.languages ? wn.languages[0] : defaultValue;
  lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
  return lang.substring(0, 2);
};
