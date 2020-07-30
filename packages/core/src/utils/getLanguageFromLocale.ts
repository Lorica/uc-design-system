import T from '../components/Translate'
import { Locale } from '../types'

let loaded = false
let languages: { [locale: string]: string } = {}

export default function getLanguageFromLocale(locale: Locale): string {
  if (!loaded) {
    loaded = true
    languages = {
      nl: T.phrase('uc-design-system.language.dutch', 'Dutch'),
      en: T.phrase('uc-design-system.language.english', 'English'),
      fr: T.phrase('uc-design-system.language.french', 'French'),
      de: T.phrase('uc-design-system.language.german', 'German'),
      it: T.phrase('uc-design-system.language.italian', 'Italian'),
      ja: T.phrase('uc-design-system.language.japanese', 'Japanese'),
      ko: T.phrase('uc-design-system.language.korean', 'Korean'),
      zh: T.phrase('uc-design-system.language.mandarin', 'Mandarin'),
      ms: T.phrase('uc-design-system.language.malay', 'Malay'),
      pt: T.phrase('uc-design-system.language.portuguese', 'Portuguese'),
      ru: T.phrase('uc-design-system.language.russian', 'Russian'),
      es: T.phrase('uc-design-system.language.spanish', 'Spanish'),
      tr: T.phrase('uc-design-system.language.turkish', 'Turkish'),
    }
  }

  return languages[locale]
}
