import type { Locale } from '@/types/content'

const translations = {
  en: {
    visitResourceHub: 'Visit the resource hub',
    letsLearn: "Let's learn",
  },
  fr: {
    visitResourceHub: 'Visiter le hub de ressources',
    letsLearn: 'Apprenons',
  },
  es: {
    visitResourceHub: 'Visitar el centro de recursos',
    letsLearn: 'Aprendamos',
  },
} satisfies Record<Locale, Record<string, string>>

export function useI18n() {
  const { locale } = useContent()
  const t = (key: keyof typeof translations.en) => translations[locale.value as Locale][key]
  return { t }
}

import { useContent } from '@/composables/useContent'
