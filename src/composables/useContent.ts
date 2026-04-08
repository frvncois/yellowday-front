import { ref, readonly } from 'vue'
import { fetchYellowDay } from '@/lib/strapi'
import type { Locale, YellowDayContent } from '@/types/content'

const content = ref<YellowDayContent | null>(null)
const locale = ref<Locale>('en')
const loading = ref(false)
const error = ref<string | null>(null)

async function loadContent(loc: Locale = locale.value) {
  loading.value = true
  error.value = null
  try {
    content.value = await fetchYellowDay(loc)
    locale.value = loc
  } catch (e) {
    error.value = String(e)
  } finally {
    loading.value = false
  }
}

export function useContent() {
  return {
    content: readonly(content),
    locale: readonly(locale),
    loading: readonly(loading),
    error: readonly(error),
    loadContent,
  }
}
