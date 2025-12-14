import 'server-only'
import type { Locale } from "./i18n-config";
 
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
}
 
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries
 
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.es();